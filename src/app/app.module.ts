import { StoreFirstGuard } from './StoreFirstGuard';
import { CartDetail } from './store/cartDetail.component';
import { StoreModule } from './store/store.module';
import { StoreComponent } from './store/store.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { CheckOut } from './store/checkout.component';

@NgModule({
  declarations: [
    // register components,directives & pipes     -- non services
    AppComponent,
  ],
  imports: [
    // blocking script / preloading / dependency modules/ helper or utility modules / wider scopes
    BrowserModule,
    StoreModule,
    RouterModule.forRoot([
      {
        path: 'store',
        canActivate: [StoreFirstGuard], // route guard - non first navigation
        component: StoreComponent,
      },
      {
        path: 'cart', // tracks /subscribe's to the BrowserURL state -- localhost:3001/cart
        canActivate: [StoreFirstGuard], // route guard - non first navigation
        component: CartDetail,
      },
      {
        path: 'admin', // tracks /subscribe's to the BrowserURL state -- localhost:3001/cart
        loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule), // lazy loading
      },
        {
        path: 'checkout', // tracks /subscribe's to the BrowserURL state -- localhost:3001/cart
        canActivate: [StoreFirstGuard], // route guard - non first navigation
        component: CheckOut,
      },
      {
        path: '**', // default path
        redirectTo: '/store', // state change in the BrowserURL - HashBang
      },
    ]),
  ],
  providers: [StoreFirstGuard], // register services
  bootstrap: [AppComponent], // load root component
})
export class AppModule {}

// root level entities do not directly try to connect to model level entity (services - data)

// root level entities should not register feature level entities (component,directive or pipe) !

