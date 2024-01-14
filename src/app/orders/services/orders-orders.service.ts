import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Order } from '../interfaces/order.interface';
import { Upcoming } from '../interfaces/upcoming.interface';

@Injectable({
  providedIn: 'root'
})
export class OrdersOrdersService {
  constructor(private http: HttpClient) { }

  private ordersUrl: string = 'https://129bc152-6319-4e38-b755-534a4ee46195.mock.pstmn.io/orders';

  private upcomingsUrl: string = 'https://129bc152-6319-4e38-b755-534a4ee46195.mock.pstmn.io/orders/upcoming';

  public getOrders(): Observable<Order> {
    return this.http.get<any>(this.ordersUrl);
  }

  public getUpcoming(): Observable<Upcoming> {
    return this.http.get<any>(this.upcomingsUrl);
  }
}
