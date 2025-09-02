import { NgModule } from '@angular/core';

import { StoreComponent } from './store.component';
import { BrowserModule } from '@angular/platform-browser';
import { ModelModule } from '../model/model.module';


@NgModule({
  imports: [BrowserModule, ModelModule],
  exports:[StoreComponent], //shareable to other angular module
  declarations: [StoreComponent], //private to this angular module  --Register & Load this component
  providers: []
})
export class StoreModule { }
