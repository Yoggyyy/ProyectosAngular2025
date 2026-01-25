import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DatePipe, CurrencyPipe, TitleCasePipe } from '@angular/common';
import { IEvents } from '../interfaces/i-events';
import { EventFilterPipe } from '../pipes/event-filter';

@Component({
  selector: 'events-show',
  imports: [FormsModule, DatePipe, CurrencyPipe, TitleCasePipe, EventFilterPipe],
  templateUrl: './events-show.html',
  styleUrl: './events-show.css',
})
export class EventsShow {
  // Propiedad para el filtro de búsqueda
  search: string = '';

  // Objeto para el nuevo evento
  newEvent: IEvents = {
    title: '',
    description: '',
    image: '',
    price: 0,
    date: ''
  };

  // Array de eventos
  events: IEvents[] = [
    {
      title: 'evento de prueba',
      image: '/meme1.jpg',
      date: '2016-10-03',
      description: 'Tremendo partido',
      price: 23.95,
    },
    {
      title: 'evento de prueba 2',
      image: '/meme2.jpeg',
      date: '2024-05-15',
      description: 'Tremendo partido 2 ahora más épico',
      price: 25.95,
    }
  ];

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

  // Método para añadir un nuevo evento
  addEvent() {
    this.events.push(this.newEvent);
    // Reiniciar el formulario
    this.newEvent = {
      title: '',
      description: '',
      image: '',
      price: 0,
      date: ''
    };
  }

  // Método para convertir la imagen a Base64
  changeImage(fileInput: HTMLInputElement) {
    if (!fileInput.files || fileInput.files.length === 0) { return; }
    const reader: FileReader = new FileReader();
    reader.readAsDataURL(fileInput.files[0]);
    reader.addEventListener('loadend', () => {
      this.newEvent.image = reader.result as string;
    });
  }
}
