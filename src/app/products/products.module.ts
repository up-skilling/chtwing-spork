import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ProductsRoutingModule} from './products-routing.module';
import {ProductListPageComponent} from './pages/product-list-page/product-list-page.component';
import {ProductDetailPageComponent} from './pages/product-detail-page/product-detail-page.component';
import {FormsModule} from "@angular/forms";
import {RatingModule} from "primeng/rating";
import {MessageModule} from "primeng/message";

@NgModule({
  declarations: [
    ProductListPageComponent,
    ProductDetailPageComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    FormsModule,
    RatingModule,
    MessageModule
  ]
})
export class ProductsModule {
}
