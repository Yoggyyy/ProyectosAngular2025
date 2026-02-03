import { Component, Input, Output, EventEmitter } from '@angular/core';
import { DatePipe, CurrencyPipe, TitleCasePipe } from '@angular/common';
import { IEvents } from '../interfaces/i-events';

@Component({
  selector: 'evento-item',
  imports: [DatePipe, CurrencyPipe, TitleCasePipe],
  templateUrl: './evento-item.html',
  styleUrl: './evento-item.css',
  host: {
    class: 'bg-white rounded-lg shadow-md overflow-hidden'
  }
})
export class EventoItem {
  @Input() event!: IEvents;
  @Output() deleted = new EventEmitter<void>();

  deleteEvento() {
    this.deleted.emit();
  }
}
