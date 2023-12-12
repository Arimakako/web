import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Ex89Component } from './ex89/ex89.component';
import { Ex90Component } from './ex90/ex90.component';
import { Ex86Component } from './ex86/ex86.component';
import { Ex87Component } from './ex87/ex87.component';
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
import { CurriculumUpdateComponent } from './curriculum-update/curriculum-update.component';
import { CurriculumComponent } from './curriculum/curriculum.component';
import { CurriculumNewComponent } from './curriculum-new/curriculum-new.component';
import { FashionComponent } from './fashion/fashion.component';
import { FashionDetailComponent } from './fashion-detail/fashion-detail.component';
import { FashionNewComponent } from './fashion-new/fashion-new.component';
const routes: Routes = [
  {path: 'ex89', component: Ex89Component},
  {path: 'ex90', component: Ex90Component},
  {path:'ex86',component:Ex86Component},
  {path:'ex87',component: Ex87Component},
  {path:'ex92',component:Ex92Component},
  {path:'service-product-image-event',component:ServiceProductImageEventComponent},
{path:'service-product-image-event/:id',component:ServiceProductImageEventDetailComponent},
{path:'service-product-http-handle-error',component:ServiceProductHttpHandleErrorComponent},
{ path:'ex93',component:Ex93Component},
{path: 'dongabank',component: DongABankComponent},
{path: 'fakeproduct',component: FakeProductComponent},
{path:'fakeproduct2',component:FakeProduct2Component},
{path:'bitcoinprice',component:BitcoinpriceComponent},
{path:'book',component:BooksComponent},
{path: 'bookdetail',component:BookDetailComponent},
{path: 'booknew',component:BookNewComponent},
{path: 'bookupdate',component:BookUpdateComponent},
{path:'bookdelete',component:BookDeleteComponent},
{path:'hello',component:HelloComponent},
{path: 'uploadfile', component: FileUploadComponent},
{path: 'curriculum', component: CurriculumComponent},
{path: 'curriculum-detail/:id', component: CurriculumDetailComponent},
{path: 'curriculum-update/:id', component: CurriculumUpdateComponent},
{path: 'curriculum-new', component: CurriculumNewComponent},
{path: 'fashion', component: FashionComponent},
{path:'fashion-detail',component:FashionDetailComponent},
{path:'fashion-new',component:FashionNewComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
