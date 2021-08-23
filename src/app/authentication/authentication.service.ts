import {Injectable} from '@angular/core';
import {HttpClient, HttpResponse} from "@angular/common/http";
import {Observable} from "rxjs";
import {tap} from "rxjs/operators";
import {JwtServiceModule} from "./jwt-service.module";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  //private username: User = null;
  public token: string = '';

  constructor(private http: HttpClient, private jwtService: JwtServiceModule) {
  }


  login(username: string, password: string): Observable<HttpResponse<any>> {
    let token: Object | null;
    //let jwtService: any;


    return this.http.post('http://localhost:3000/api/v1/auth/login', {
        username: username, password: password
      }, {observe: 'response'}
    ).pipe(tap(x => {
git       token = x.body;
      // @ts-ignore
      this.token = token.access_token;
      console.log(this.token);
      if (this.token)
        console.log(this.jwtService.decodeToken(this.token));
    }));

  }


  isLoggedIn() {
    return true;
  }

  public logout() {

  }

}
