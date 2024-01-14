import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { OrdersListPageComponent } from './orders/pages/orders-list-page/orders-list-page.component';
import { OrdersDetailPageComponent } from './orders/pages/orders-detail-page/orders-detail-page.component';

const routes: Routes = [
  { path: '', component: OrdersListPageComponent },
  { path: 'detail', component: OrdersDetailPageComponent },
  { path: '**', pathMatch: 'full', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
