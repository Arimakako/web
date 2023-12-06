import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { ThirdComponent } from './third/third.component';
import { FourthComponent } from './fourth/fourth.component';
import { FormsModule } from '@angular/forms';
import { Ptrb1Component } from './ptrb1/ptrb1.component';
import { MycomponentComponent } from './mycomponent/mycomponent.component';
import { BindingComponent } from './binding/binding.component';
import { BindingclassComponent } from './bindingclass/bindingclass.component';
import { BindingstyleComponent } from './bindingstyle/bindingstyle.component';
import { BindingeventComponent } from './bindingevent/bindingevent.component';
import { BindingTwoWayComponent } from './binding-two-way/binding-two-way.component';
import { SlideshowComponent } from './slideshow/slideshow.component';
import { Ptrb2Component } from './ptrb2/ptrb2.component';
import { LunarConversionComponent } from './lunar-conversion/lunar-conversion.component';
import { ContactComponent } from './contact/contact.component';
import { ListproductComponent } from './listproduct/listproduct.component';
import { Listproduct2Component } from './listproduct2/listproduct2.component';
import { Listproduct3Component } from './listproduct3/listproduct3.component';
import { Listproduct4Component } from './listproduct4/listproduct4.component';
import { Listproduct5Component } from './listproduct5/listproduct5.component';
import { Listproduct6Component } from './listproduct6/listproduct6.component';
import { Listproduct7Component } from './listproduct7/listproduct7.component';
import{HttpClientModule} from '@angular/common/http';
import { AboutComponent } from './about/about.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { TopmenuComponent } from './topmenu/topmenu.component';
import { LeftmenuComponent } from './leftmenu/leftmenu.component';
import { LoginComponent } from './login/login.component';
import { FormbindingComponent } from './formbinding/formbinding.component';
@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent,
    ThirdComponent,
    FourthComponent,
    Ptrb1Component,
    MycomponentComponent,
    BindingComponent,
    BindingclassComponent,
    BindingstyleComponent,
    BindingeventComponent,
    BindingTwoWayComponent,
    SlideshowComponent,
    Ptrb2Component,
    LunarConversionComponent,
    ContactComponent,
    ListproductComponent,
    Listproduct2Component,
    Listproduct3Component,
    Listproduct4Component,
    Listproduct5Component,
    Listproduct6Component,
    Listproduct7Component,
    AboutComponent,
    PagenotfoundComponent,
    TopmenuComponent,
    LeftmenuComponent,
    LoginComponent,
    FormbindingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  
 }
