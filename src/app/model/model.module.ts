import { NgModule } from '@angular/core';
import { StaticDataSource } from './static.datasource';
import { ProductRepository } from './product.repository';


@NgModule({
  imports: [],
  exports: [],
  declarations: [],
  providers: [StaticDataSource, ProductRepository],
})
export class ModelModule { }
