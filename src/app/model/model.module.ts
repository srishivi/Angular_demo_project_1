import { NgModule } from '@angular/core';
import { StaticDataSource } from './static.datasource';
import { ProductRepository } from './product.repository';
import { RestDataSource } from './rest.datasource';


@NgModule({
  imports: [],
  exports: [],
  declarations: [],
  providers: [StaticDataSource, ProductRepository, RestDataSource],
})
export class ModelModule { }
