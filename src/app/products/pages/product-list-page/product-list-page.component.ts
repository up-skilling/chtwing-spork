import {Component, OnInit} from '@angular/core';
import {ProductsService} from "../../services/products.service";
import {Product} from "../../models/product";

@Component({
  selector: 'app-product-list-page',
  templateUrl: './product-list-page.component.html',
  styleUrls: ['./product-list-page.component.scss']
})
export class ProductListPageComponent implements OnInit {

  title = 'Tous les produits';
  products: Product[] = [];

  constructor(
    private productsService: ProductsService
  ) {
  }

  ngOnInit() {
    this.productsService.getAll().subscribe(
      products => this.products = products
    );
  }

}
