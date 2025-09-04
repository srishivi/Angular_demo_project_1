import { NgModule } from '@angular/core';

import { StoreComponent } from './store.component';
import { BrowserModule } from '@angular/platform-browser';
import { ModelModule } from '../model/model.module';
import { CartSummaryComponent } from './cartSummary.component';
import { CartDetail } from './cartDetail.component';
import { RouterModule } from '@angular/router';
import { CheckOut } from './checkout.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  imports: [BrowserModule, ModelModule, RouterModule, FormsModule],
  exports:[StoreComponent, CartDetail, CheckOut], //shareable to other angular module
  declarations: [StoreComponent,CartSummaryComponent, CartDetail, CheckOut] //private to this angular module  --Register & Load this component

})
export class StoreModule { }
