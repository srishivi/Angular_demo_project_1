import { CartDetail } from './store/cartDetail.component';
import { StoreModule } from './store/store.module';
import { StoreComponent } from './store/store.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { StoreFirstGuard } from './StoreFirstGuard';

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
        component: StoreComponent,
      },
      {
        path: 'cart',
        canActivate: [StoreFirstGuard], //Routing Guard
        component: CartDetail,
      },
      {
        path: '**',  //default path
        redirectTo: '/store', //HashBang
      },
    ]),
  ],
  providers: [StoreFirstGuard], // register services
  bootstrap: [AppComponent], // load root component
})
export class AppModule {}

// root level entities do not directly try to connect to model level entity (services - data)

// root level entities should not register feature level entities (component,directive or pipe) !

