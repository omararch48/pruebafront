import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';

import { OrdersListComponent } from './components/orders-list/orders-list.component';
import { OrdersOrderComponent } from './components/orders-order/orders-order.component';
import { OrdersDetailComponent } from './components/orders-detail/orders-detail.component';

import { OrdersListPageComponent } from './pages/orders-list-page/orders-list-page.component';
import { OrdersDetailPageComponent } from './pages/orders-detail-page/orders-detail-page.component';


@NgModule({
  declarations: [
    OrdersListComponent,
    OrdersOrderComponent,
    OrdersDetailComponent,
    OrdersListPageComponent,
    OrdersDetailPageComponent,
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    OrdersListComponent,
    OrdersOrderComponent,
    OrdersDetailComponent,
    OrdersListPageComponent,
    OrdersDetailPageComponent,
  ]
})
export class OrdersModule { }
