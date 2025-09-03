import { NgModule } from '@angular/core';

import { StoreComponent } from './store.component';
import { BrowserModule } from '@angular/platform-browser';
import { ModelModule } from '../model/model.module';
import { CartSummaryComponent } from './cartSummary.component';
import { CartDetail } from './cartDetail.component';
import { RouterModule } from '@angular/router';


@NgModule({
  imports: [BrowserModule, ModelModule, RouterModule],
  exports:[StoreComponent, CartDetail], //shareable to other angular module
  declarations: [StoreComponent,CartSummaryComponent, CartDetail], //private to this angular module  --Register & Load this component
  providers: []
})
export class StoreModule { }
