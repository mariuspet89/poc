import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {AuthenticationComponent} from "./authentication/authentication.component";

import {ListPageComponent} from "./list-page/list-page.component";


const routes: Routes = [
  {path: 'login', component: AuthenticationComponent},
  {path: 'list-page', component: ListPageComponent},
  {path: 'list-page/:id', component: ListPageComponent},
  {path: '', redirectTo: 'login', pathMatch: 'full'}
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

