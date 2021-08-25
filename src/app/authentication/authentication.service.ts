import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, Observable} from "rxjs";
import {map} from "rxjs/operators";
import {User} from "./user.model";
import {LoginResponse} from "./loginresponce.model";
import jwt_decode from "jwt-decode";


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {


  private user: BehaviorSubject<User | null> = new BehaviorSubject<User | null>(null);
  private token: BehaviorSubject<LoginResponse | null> = new BehaviorSubject<LoginResponse | null>(null);

  constructor(private http: HttpClient) {
  }

  login(username: string, password: string): Observable<LoginResponse> {


    return this.http.post<LoginResponse>('http://localhost:3000/api/v1/auth/login', {
        username: username, password: password
      }
    ).pipe(
      map(loginResponse => {
        this.token.next(loginResponse)
        this.user.next( {
          username: username,
          password: password
        })
        jwt_decode(loginResponse.access_token);
        return loginResponse;
      })
    );
  }

  public getToken(): Observable<LoginResponse | null> {
    return this.token.asObservable();
  }


  isLoggedIn() {
    return true;
  }

  public logout() {

  }

}
