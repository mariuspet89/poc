import {HttpEvent, HttpHandler, HttpInterceptor, HttpParams, HttpRequest} from "@angular/common/http";
import {AuthenticationService} from "./authentication.service";
import {Observable} from "rxjs";
import {Injectable} from "@angular/core";

@Injectable()
export class AuthenticationInterceptor implements HttpInterceptor {
  constructor(private authenticationService: AuthenticationService) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    let token;
    this.authenticationService.getToken().subscribe({
      next: value => token = value?.access_token
    })

    if (token) {
      console.log(token);
      const cloned = req.clone({
       headers: req.headers.set('Authorization', 'Bearer '+ token)
      });
      return next.handle(cloned);
    } else {
      return next.handle(req);
   }

  }



}
