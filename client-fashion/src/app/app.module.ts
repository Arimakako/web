import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientFashionsComponent } from './client-fashions/client-fashions.component';
import { FashionDetailComponent } from './fashion-detail/fashion-detail.component';
import { FashionStyleComponent } from './fashion-style/fashion-style.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { CommonModule } from '@angular/common';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';

@NgModule({
  declarations: [
    AppComponent,
    ClientFashionsComponent,
    FashionDetailComponent,
    FashionStyleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CommonModule,
    CKEditorModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
