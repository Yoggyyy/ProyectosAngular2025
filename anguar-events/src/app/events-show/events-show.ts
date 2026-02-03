import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DatePipe, CurrencyPipe, TitleCasePipe } from '@angular/common';
import { IEvents } from '../interfaces/i-events';
import { EventFilterPipe } from '../pipes/event-filter';
import { EventoItem } from '../evento-item/evento-item';
import { EventoAdd } from '../evento-add/evento-add';
import { EventoService } from '../services/evento.service';

@Component({
  selector: 'events-show',
  imports: [FormsModule, EventFilterPipe, EventoItem, EventoAdd],
  templateUrl: './events-show.html',
  styleUrl: './events-show.css',
})
export class EventsShow {
  // Inyectamos el servicio
  private eventoService = inject(EventoService);

  // Propiedad para el filtro de búsqueda
  search: string = '';

  // Array de eventos - obtenidos del servicio
  events: IEvents[] = this.eventoService.getEventos();

  // Método para ordenar por fecha
  orderDate() {
    this.search = '';
    this.events.sort((a, b) => a.date.localeCompare(b.date));
  }

  // Método para ordenar por precio
  orderPrice() {
    this.search = '';
    this.events.sort((a, b) => a.price - b.price);
  }

  // Método para añadir un nuevo evento (recibe el evento del componente hijo)
  // Usamos spread operator para crear un nuevo array y que el pipe detecte el cambio
  addEvent(event: IEvents) {
    this.events = [...this.events, event];
  }

  // Método para eliminar un evento
  // Usamos filter() en lugar de splice() para crear un nuevo array
  // Esto permite que los pipes puros detecten el cambio al filtrar
  deleteEvento(event: IEvents) {
    this.events = this.events.filter(e => e !== event);
  }
}
