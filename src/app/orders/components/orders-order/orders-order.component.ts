import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'orders-order',
  templateUrl: './orders-order.component.html',
  styleUrls: ['./orders-order.component.scss']
})
export class OrdersOrderComponent {
  constructor(private router: Router) { }
  
  @Input() order: any = {};

  public navigate(): void {
    if (this.datesDiff()) {
      console.log('Navegar')
    }
  }

  public goToDetail(): void {
    localStorage.setItem('order', JSON.stringify(this.order))
    this.router.navigate(['detail'])
  }

  public getMessage(): string {
    return this.datesDiff() ? 'Its time for pickup' : `Start pickup in ${this.getDatesDiff()}`
  }

  public getDatesDiff(): string {
    const now: any = new Date();
    
    const diff = this.order.start_date - now;

    const seconds = Math.floor(diff / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);

    const secondsRes = seconds % 60;
    const minutesRes = minutes % 60;

    return `${hours}:${minutesRes}:${secondsRes}`;
  }

  public datesDiff(): boolean {
    const now = new Date();
    if (this.order.start_date < now) {
      return true;
    }
    return false;
  }
}