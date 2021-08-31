import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { User } from './user.model';
import { LoginResponse } from './loginresponce.model';
import jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  private user: BehaviorSubject<User | null> = new BehaviorSubject<User | null>(null);
  private token: BehaviorSubject<string | null> = new BehaviorSubject<string | null>(null);

  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<LoginResponse> {
    return this.http
      .post<LoginResponse>('http://localhost:3000/api/v1/auth/login', {
        username: username,
        password: password,
      })
      .pipe(
        map((loginResponse) => {
          this.token.next(loginResponse.access_token);
          this.user.next({
            firstName: username,
            lastName: password,
          });

          console.log(jwt_decode(loginResponse.access_token));
          return loginResponse;
        })
      );
  }

  public getToken(): Observable<string | null> {
    return this.token.asObservable().pipe(take(1));
  }

  isLoggedIn() {
    return true;
  }

  public logout() {}
}
