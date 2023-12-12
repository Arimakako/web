import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Ex89Component } from './ex89/ex89.component';
import { Ex90Component } from './ex90/ex90.component';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { Ex86Component } from './ex86/ex86.component';
import { Ex87Component } from './ex87/ex87.component';
import { Ex88Component } from './ex88/ex88.component';
import { ServiceProductImageEventComponent } from './service-product-image-event/service-product-image-event.component';
import { ServiceProductImageEventDetailComponent } from './service-product-image-event-detail/service-product-image-event-detail.component';
import { ServiceProductHttpHandleErrorComponent } from './service-product-http-handle-error/service-product-http-handle-error.component';
import { Ex92Component } from './ex92/ex92.component';
import { Ex93Component } from './ex93/ex93.component';
import { DongABankComponent } from './dong-abank/dong-abank.component';
import { FakeProductComponent } from './fake-product/fake-product.component';
import { FakeProduct2Component } from './fake-product2/fake-product2.component';
import { BitcoinpriceComponent } from './bitcoinprice/bitcoinprice.component';
import { BooksComponent } from './books/books.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { BookNewComponent } from './book-new/book-new.component';
import { BookUpdateComponent } from './book-update/book-update.component';
import { BookDeleteComponent } from './book-delete/book-delete.component';
import { HelloComponent } from './hello/hello.component';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { CurriculumDetailComponent } from './curriculum-detail/curriculum-detail.component';
import { CurriculumNewComponent } from './curriculum-new/curriculum-new.component';
import { CurriculumUpdateComponent } from './curriculum-update/curriculum-update.component';
import { CurriculumComponent } from './curriculum/curriculum.component';
import { FashionComponent } from './fashion/fashion.component';
import { FashionDetailComponent } from './fashion-detail/fashion-detail.component';
import { FashionNewComponent } from './fashion-new/fashion-new.component';
@NgModule({
  declarations: [
    AppComponent,
    Ex89Component,
    Ex90Component,
    Ex86Component,
    Ex87Component,
    Ex88Component,
    ServiceProductImageEventComponent,
    ServiceProductImageEventDetailComponent,
    ServiceProductHttpHandleErrorComponent,
    Ex92Component,
    Ex93Component,
    DongABankComponent,
    FakeProductComponent,
    FakeProduct2Component,
    BitcoinpriceComponent,
    BooksComponent,
    BookDetailComponent,
    BookNewComponent,
    BookUpdateComponent,
    BookDeleteComponent,
    HelloComponent,
    FileUploadComponent,
    CurriculumDetailComponent,
    CurriculumNewComponent,
    CurriculumUpdateComponent,
    CurriculumComponent,
    FashionComponent,
    FashionDetailComponent,
    FashionNewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
