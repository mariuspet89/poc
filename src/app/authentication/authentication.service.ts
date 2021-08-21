import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";



@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient) {
  }

  login(username: string, password: string) {
    return this.http.post('http://localhost:3000/api/v1/auth/login', {
        username: username, password: password
       }
      // {
      //   headers: new HttpHeaders().set('Authorization',`Bearer ${AuthenticationService.getToken()}`)
      // }
   );
  }

  isLoggedIn() {
    return true;
  }

  public logout() {

  }

}
