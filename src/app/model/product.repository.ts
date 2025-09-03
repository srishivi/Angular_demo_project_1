//SRP CRUD methods

import { Injectable } from '@angular/core';
import { Product } from './product.model';
import { StaticDataSource } from './static.datasource';
import { RestDataSource } from './rest.datasource';

@Injectable()
export class ProductRepository {
  private products: Product[] = []; // 15 objects   -- state aware ? yes
  private categories: any[] = []; // 15 strings     -- state aware ?  yes

  constructor(private datasource: RestDataSource) {
    this.datasource.getProducts().subscribe((data) => {
      this.products = data;
      this.categories = data
        .map((p) => p.category)
        .filter((c, index, array) => array.indexOf(c) == index)
        .sort();
    });
  }

  getProducts(category: string = 'undefined'): Product[] {
    // auto fire
    return this.products.filter(
      (p) => category == 'undefined' || category == p.category
    );
  }

  getCategories(): any[] {
    // auto fire
    return this.categories;
  }
}
