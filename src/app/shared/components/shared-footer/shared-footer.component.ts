import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'shared-footer',
  templateUrl: './shared-footer.component.html',
  styleUrls: ['./shared-footer.component.scss'],
  providers: [DatePipe]
})
export class SharedFooterComponent {

  constructor(private datePipe: DatePipe) {}

  public getCurrentDay(): string {
    const currentDate = new Date();
    const months: any = {
      'January': 'Enero',
      'February': 'Febrero',
      'March': 'Marzo',
      'April': 'Abril',
      'May': 'Mayo',
      'June': 'Junio',
      'July': 'Julio',
      'August': 'Agosto',
      'September': 'Septiembre',
      'October': 'Agosoto',
      'November': 'Noviembre',
      'December': 'Diciembre',
    }
    let day: string | null = this.datePipe.transform(currentDate, 'dd \'de\' MMMM yyyy', 'ES');
    for (let month in months) {
      if (day?.includes(month)) {
        day = day.replace(month, months[month]);
      }
    }
    return `${day}` || '';
  }

  public getCurrentHour(): string {
    const currentDate = new Date();
    const hour = this.datePipe.transform(currentDate, 'HH:mm');
    return `${hour}` || '';
  }
}
