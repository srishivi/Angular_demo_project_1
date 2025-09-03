import { Router } from '@angular/router';
import { Cart } from '../model/cart.model';
import { Product } from './../model/product.model';
import { ProductRepository } from './../model/product.repository';
import { Component } from '@angular/core';

@Component({
  selector: 'store',
  templateUrl: 'store.component.html',
  standalone: false,
})
export class StoreComponent {
  public selectedCategory = 'undefined'; // 'Category 1'  ---- 'undefined'
  public productsPerPage = 4; // event driven
  public selectedPage = 1; // 2

  // register this
  constructor(private repository: ProductRepository, private cart : Cart,  private router: Router) {}

  get products() {
    let pageIndex = (this.selectedPage - 1) * this.productsPerPage;
    return this.repository
      .getProducts(this.selectedCategory)
      .slice(pageIndex, pageIndex + this.productsPerPage);
  }

  get categories() {
    return this.repository.getCategories();
  }

  changeCategory(newCategory?: any) {
    this.selectedCategory = newCategory;
    this.changePage(1);
  }

  changePageSize(newSize: any) {
    this.productsPerPage = newSize.value;
  }

  get pageNumbers() {
    return Array(
      Math.ceil(
        this.repository.getProducts(this.selectedCategory).length /
          this.productsPerPage
      )
    )
      .fill(0)
      .map((x, i) => i + 1);
  }

  changePage(newPage: number) {
    this.selectedPage = newPage;
  }

  addProductToCart(product: Product) {
    console.log(product);
    this.cart.addLine(product);
    this.router.navigateByUrl("/cart");
  }
}

// ECMAScript version 5 - Accessor property - auto getter & auto setter

