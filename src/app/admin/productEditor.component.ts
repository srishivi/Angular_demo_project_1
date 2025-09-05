import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Product } from '../model/product.model';
import { ProductRepository } from '../model/product.repository';
import { ActivatedRoute , Router} from '@angular/router';

@Component({
  selector: 'product-editor-name',
  templateUrl: 'productEditor.component.html',
  standalone: false,
})

export class ProductEditorComponent  {

  editing: boolean = false;
  id: number = 0;
  product: Product = new Product();

  constructor(private repository : ProductRepository,
    private router : Router,
    activeRoute : ActivatedRoute
  ) {
    this.editing = activeRoute.snapshot.params['mode'] == 'edit';
    this.id = activeRoute.snapshot.params['id'];
    if (this.editing) {
      Object.assign(this.product,
        repository.getProduct(this.id));
    }
  }

  save(form :NgForm) {
    if (form.valid) {
      this.repository.saveProduct(this.product)
      this.router.navigateByUrl('/admin/main/products');

  }
}
}
