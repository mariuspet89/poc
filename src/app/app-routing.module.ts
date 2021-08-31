import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {AuthenticationComponent} from "./authentication/authentication.component";

import {ListPageComponent} from "./list-page/list-page.component";
import {AuthenticationGuard} from "./authentication/authentication.guard";

const routes: Routes = [
  {path: 'login', component: AuthenticationComponent},
  {path: 'list-page', component: ListPageComponent},
  {path: 'list-page/:id', component: ListPageComponent},
  {path: '', redirectTo: 'login', pathMatch: 'full'}
]


@NgModule({
  imports: [RouterModule.forRoot(routes, {enableTracing: true})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

