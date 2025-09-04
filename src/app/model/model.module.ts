import { NgModule } from '@angular/core';
import { StaticDataSource } from './static.datasource';
import { ProductRepository } from './product.repository';
import { RestDataSource } from './rest.datasource';
import { HttpClientModule } from '@angular/common/http';
import { Cart } from './cart.model';
import { Order } from './order.model';
import { OrderRepository } from './order.repository';


@NgModule({
  imports: [HttpClientModule],
  exports: [],
  declarations: [],
  providers: [StaticDataSource, ProductRepository, RestDataSource, Cart, Order, OrderRepository],
})
export class ModelModule { }
