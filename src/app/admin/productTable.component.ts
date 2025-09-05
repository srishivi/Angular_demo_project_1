import { Component } from '@angular/core';
import { ProductRepository } from '../model/product.repository';
import { Product } from '../model/product.model';

@Component({
  selector: 'product-table',
  templateUrl: 'productTable.component.html',
  standalone: false,
})
export class ProductTableComponent {

  constructor(private repository : ProductRepository) {}

  getProducts(): Product[] {
    return this.repository.getProducts();
  }

  deleteProduct(id?: number) {
    this.repository.deleteProduct(id);
  }
}
