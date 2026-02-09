import { Component, inject, OnInit, ChangeDetectorRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IEvents } from '../interfaces/i-events';
import { EventFilterPipe } from '../pipes/event-filter';
import { EventoItem } from '../evento-item/evento-item';
import { EventoService } from '../services/evento.service';

@Component({
  selector: 'events-show',
  imports: [FormsModule, EventFilterPipe, EventoItem],
  templateUrl: './events-show.html',
  styleUrl: './events-show.css',
})
export class EventsShow implements OnInit {
  // Inyectamos el servicio y el detector de cambios
  private eventoService = inject(EventoService);
  private cdr = inject(ChangeDetectorRef);

  // Propiedad para el filtro de búsqueda
  search: string = '';

  // Array de eventos (obtenido del servicio mediante subscribe)
  events: IEvents[] = [];

  // Cargamos los eventos al iniciar el componente
  ngOnInit() {
    this.loadEvents();
  }

  // Método para cargar los eventos desde el servicio
  loadEvents() {
    this.eventoService.getEventos().subscribe({
      next: (events) => {
        this.events = events;
        this.cdr.detectChanges(); // Forzar detección de cambios ya que al usar subscribe, no se detecta el cambio automáticamente con f5
      },
      error: (err) => console.error(err)
    });
  }

  // Método para ordenar por fecha
  orderDate() {
    this.search = '';
    this.events.sort((a, b) => a.date.localeCompare(b.date));
    // Creamos un nuevo array para que el pipe detecte el cambio
    this.events = [...this.events];
  }

  // Método para ordenar por precio
  orderPrice() {
    this.search = '';
    this.events.sort((a, b) => a.price - b.price);
    // Creamos un nuevo array para que el pipe detecte el cambio
    this.events = [...this.events];
  }

  // Método para eliminar un evento del array local
  // La llamada al servidor ya la ha hecho evento-item
  deleteEvento(event: IEvents) {
    this.events = this.events.filter(e => e !== event);
  }
}
