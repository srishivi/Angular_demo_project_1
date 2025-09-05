import { ProductTableComponent } from './productTable.component';
import { AdminComponent } from './admin.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductEditorComponent } from './productEditor.component';


let routing = RouterModule.forChild([
  {
    path: 'main',
    component: AdminComponent,
    children: [
      {
        path: 'products',
        component: ProductTableComponent,
      },
      {
        path: 'products/:mode/:id',
        component: ProductEditorComponent,
      },
      {
        path: 'products/:mode',
        component: ProductEditorComponent,
      },
      {
        path: '**',
        redirectTo: 'products',
      },
    ],
  },
  {
    path: '**',
    redirectTo: 'main', // default hashbang
  },
]);

@NgModule({
  imports: [CommonModule, FormsModule, routing],
  declarations: [AdminComponent, ProductTableComponent, ProductEditorComponent],
})
export class AdminModule {}

