import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FashionComponent } from './fashion/fashion.component';
import { FashionDetailComponent } from './fashion-detail/fashion-detail.component';
import { FashionUpdateComponent } from './fashion-update/fashion-update.component';
import { FashionNewComponent } from './fashion-new/fashion-new.component';
import { FormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { CommonModule } from '@angular/common';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';

@NgModule({
  declarations: [
    AppComponent,
    FashionComponent,
    FashionDetailComponent,
    FashionUpdateComponent,
    FashionNewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    DatePipe,
    FormsModule,
    CommonModule,
    CKEditorModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
