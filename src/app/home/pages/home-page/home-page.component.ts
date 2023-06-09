import {Component, OnInit} from '@angular/core';
import {Product} from "../../../products/models/product";
import {ProductsService} from "../../../products/services/products.service";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  title = 'Bienvenue';
  limit = 10;
  products: Product[] = [];

  constructor(
    private productsService: ProductsService
  ) {
  }

  ngOnInit() {
    this.productsService.getWithLimit(this.limit).subscribe(
      products => this.products = products
    );
  }

}
