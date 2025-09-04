import { NgForm } from '@angular/forms';
import { Order } from './../model/order.model';
import { OrderRepository } from './../model/order.repository';
import { Component } from '@angular/core';

// import { FormGroup,FormControl,Validators } from '@angular/forms';

@Component({
  selector: 'checkout',
  templateUrl: 'checkOut.component.html',
  standalone: false,
})
export class CheckOut {
  orderSent: boolean = false; // true
  submitted: boolean = false;

  constructor(private repository: OrderRepository, public order: Order) {
    // order = cart service data + form data
  }

  submitOrder(form: NgForm) {
    this.submitted = true;

    if (form.valid) {
      //
      this.repository
        .saveOrder(this.order)

        .subscribe((order) => {
          this.order.clear();
          this.orderSent = true;
          this.submitted = false;
        });
    }
  }
}

