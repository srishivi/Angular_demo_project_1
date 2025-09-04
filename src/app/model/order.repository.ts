import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from './order.model';
import { RestDataSource } from './rest.datasource';

@Injectable()
export class OrderRepository {
  private orders: Order[] = [];

  constructor(private dataSource: RestDataSource) {}

  saveOrder(order: Order) {
    return this.dataSource.saveOrder(order);
  }

}



