import { Component, Input, Output, EventEmitter, inject } from '@angular/core';
import { DatePipe, CurrencyPipe, TitleCasePipe } from '@angular/common';
import { IEvents } from '../interfaces/i-events';
import { EventoService } from '../services/evento.service';

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
  // Inyectamos el servicio
  private eventoService = inject(EventoService);

  @Input() event!: IEvents;
  @Output() deleted = new EventEmitter<void>();

  // Llama al servicio DELETE y cuando responda, emite al padre
  deleteEvento() {
    // Usamos ! para indicar a TypeScript que id siempre tendrá valor
    this.eventoService.deleteEvento(this.event.id!).subscribe({
      next: () => {
        // El servidor ha eliminado el evento, emitimos al padre
        this.deleted.emit();
      },
      error: (err) => console.error(err)
    });
  }
}
