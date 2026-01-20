import { Component } from '@angular/core';
import { IEvents } from '../interfaces/i-events';


@Component({
  selector: 'events-show',
  imports: [],
  templateUrl: './events-show.html',
  styleUrl: './events-show.css',
})
export class EventsShow {

  events : IEvents [] = [
    {
      title: 'Evento de Pueba',
      imageUrl: '/meme1.jpg',
      date: new Date('2016-10-03'),
      description: 'Tremendo partido',
      price: 23.95,
    },
    {
      title: 'Evento de Pueba 2',
      imageUrl: '/meme2.jpg',
      date: new Date('2016-10-03'),
      description: 'Tremendo partido 2 ahora más epico',
      price: 25.95,
    }
  ];
}
