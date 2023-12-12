import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientFashionsComponent } from './client-fashions/client-fashions.component';
import { FashionDetailComponent } from './fashion-detail/fashion-detail.component';
import { FashionStyleComponent } from './fashion-style/fashion-style.component';

const routes: Routes = [
  { path:"", redirectTo:"client-fashions", pathMatch:"full"},
  { path:"client-fashions", component:ClientFashionsComponent},
  { path:"fashion-detail/:id", component:FashionDetailComponent},
  { path:"fashion-style/:style", component:FashionStyleComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
