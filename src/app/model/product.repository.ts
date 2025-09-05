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

  deleteProduct(id?: number) {
    this.datasource.deleteProduct(id)
    .subscribe((p) => {
      this.products.splice(
        this.products.findIndex((p) => p.id == id),
        1
      );
    });
}

getProduct(id: number): Product | undefined {
    return this.products.find((p) => p.id == id);
  }

saveProduct(product: Product) {
    if (product.id == null || product.id == 0) {
      this.datasource
        .saveProduct(product)
        .subscribe((p) => this.products.push(p));
    } else {
      this.datasource.updateProduct(product).subscribe((p) => {
        this.products.splice(
          this.products.findIndex((p) => p.id == product.id),
          1,
          product
        );
      });
    }
  }



}
