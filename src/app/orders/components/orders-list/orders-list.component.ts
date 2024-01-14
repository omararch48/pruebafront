import { Component, OnInit } from '@angular/core';
import { Order, Result as ResultOrder } from '../../interfaces/order.interface';
import { Upcoming, Result as ResultUpcoming } from '../../interfaces/upcoming.interface';
import { OrdersOrdersService } from '../../services/orders-orders.service';

@Component({
  selector: 'orders-list',
  templateUrl: './orders-list.component.html',
  styleUrls: ['./orders-list.component.scss']
})
export class OrdersListComponent implements OnInit {
  constructor(private ordersOrdersService: OrdersOrdersService) { }

  private orders: any = {};
  private ordersUpcoming: any = {};

  private ordersResults: any = [];
  private ordersUpcomingResults: any = [];

  public ordersList: any = [];
  public ordersUpcomingList: any = [];

  ngOnInit(): void {
    this.ordersOrdersService.getOrders().subscribe(data => {
      this.orders = data;
    });

    this.ordersOrdersService.getUpcoming().subscribe(data => {
      this.ordersUpcoming = data;
    });

    setTimeout(() => {
      if (!this.orders.result.isArray) {
        this.ordersResults = [ this.orders.result ];
      } else {
        this.ordersResults = this.orders.result;
      }
      if (!this.ordersUpcoming.result.isArray) {
        this.ordersUpcomingResults = [ this.ordersUpcoming.result ];
      } else {
        this.ordersUpcomingResults = this.ordersUpcoming.result;
      }
      for (let index = 0; index < this.ordersResults.length; index++) {
        const Order = this.ordersResults[index];
        const aux = {
          order_number: Order.order_number,
          start_date: Order.start_date,
        };
        this.ordersList.push(aux);
      }
    }, 2000);
  }
}
