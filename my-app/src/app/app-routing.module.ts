import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Ptrb1Component } from './ptrb1/ptrb1.component';
import { Ptrb2Component } from './ptrb2/ptrb2.component';
import { SlideshowComponent } from './slideshow/slideshow.component';
import { AboutComponent } from './about/about.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ListproductComponent } from './listproduct/listproduct.component';
import { LoginComponent } from './login/login.component';
import { FormbindingComponent } from './formbinding/formbinding.component';

const routes: Routes = [
  {path: '', redirectTo: '/gioithieu', pathMatch: 'full'},
  { path: 'ptrb1' , component: Ptrb1Component },
  { path: 'ptrb2' , component: Ptrb2Component },
  {path: 'slideshow', component: SlideshowComponent},
  { path: 'gioithieu', component: AboutComponent },
  { path: 'listproduct', component: ListproductComponent},
  { path: 'login', component:LoginComponent},
  {path: 'customer',component:FormbindingComponent},
  { path: '**', component: PagenotfoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [Ptrb1Component, Ptrb2Component, SlideshowComponent]