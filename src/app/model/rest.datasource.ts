import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Product } from "./product.model";
import { Order } from "./order.model";

const PROTOCOL = "http";
const PORT = 3500;

@Injectable()
export class RestDataSource {
  baseURL: string;

  constructor(private http: HttpClient) {
    this.baseURL = `${PROTOCOL}://${location.hostname}:${PORT}/`;
  }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.baseURL + "products");
  }

  saveOrder(order: Order): Observable<any> {
    return this.http.post<any>(this.baseURL + "orders", order);
  }

  deleteProduct(id?: number): Observable<Product> {
    return this.http.delete<Product>(this.baseURL + "products/" + id);
  }

  saveProduct(product: Product): Observable<Product> {

      return this.http.post<Product>(this.baseURL + "products", product);

  }

  updateProduct(product: Product): Observable<Product> {
    return this.http.put<Product>(
      `${this.baseURL}products/${product.id}`,
      product
    );
  }
}
