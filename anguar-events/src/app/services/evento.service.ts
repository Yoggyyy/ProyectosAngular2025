import { Injectable } from '@angular/core';
import { IEvents } from '../interfaces/i-events';

@Injectable({
  providedIn: 'root'
})
export class EventoService {

  // Método para obtener los eventos iniciales
  getEventos(): IEvents[] {
    return [
      {
        title: 'evento de prueba',
        image: 'meme1.jpg',
        date: '2016-10-03',
        description: 'Tremendo partido',
        price: 23.95,
      },
      {
        title: 'evento de prueba 2',
        image: 'meme2.jpeg',
        date: '2024-05-15',
        description: 'Tremendo partido 2 ahora más épico',
        price: 25.95,
      }
    ];
  }
}
