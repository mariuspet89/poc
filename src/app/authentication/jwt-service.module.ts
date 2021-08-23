import {Injectable, NgModule} from '@angular/core';
import jwt_decode from "jwt-decode";




@Injectable()
@NgModule()
export class JwtServiceModule {
  constructor() {  }

  decodeToken(token: string): string {
    return  jwt_decode(token);
  }

}
