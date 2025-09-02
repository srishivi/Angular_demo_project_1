import { ProductRepository } from './../model/product.repository';
import { Component } from '@angular/core';

@Component({
  selector: 'store',
  templateUrl: 'store.component.html',
  standalone: false,
})
export class StoreComponent {

  public selectedCategory = 'undefined'; // 'Category 1'

  // register this
  constructor(private repository: ProductRepository) {}

  get products() {
    // - invoking the function - property (computed property) - not allowing for inverse data flow
    return this.repository.getProducts(this.selectedCategory);
  }

  get categories() {
    // // - invoking the function - property (computed property)
    return this.repository.getCategories();
  }

  changeCategory(newCategory?: any) {
    this.selectedCategory = newCategory;
  }
}

// ECMAScript version 5 - Accessor property - auto getter & auto setter
