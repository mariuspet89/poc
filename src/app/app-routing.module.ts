import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {AuthenticationComponent} from "./authentication/authentication.component";

import {ListPageComponent} from "./list-page/list-page.component";
import {AuthenticationGuard} from "./authentication/authentication.guard";

const routes: Routes = [
  { path: '', redirectTo: 'login',pathMatch: 'full' },
  { path: 'login', component: AuthenticationComponent },
  { path: 'list-page', component: ListPageComponent, canActivate: [AuthenticationGuard] }
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

