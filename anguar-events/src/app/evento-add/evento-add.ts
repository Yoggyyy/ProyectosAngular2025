import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IEvents } from '../interfaces/i-events';

@Component({
  selector: 'evento-add',
  imports: [FormsModule],
  templateUrl: './evento-add.html',
  styleUrl: './evento-add.css',
})
export class EventoAdd {
  @Output() added = new EventEmitter<IEvents>();

  // Objeto para el nuevo evento
  newEvent: IEvents = {
    title: '',
    description: '',
    image: '',
    price: 0,
    date: ''
  };

  // Método para añadir un nuevo evento
  addEvent() {
    // Emitimos una copia del evento al padre
    this.added.emit({ ...this.newEvent });
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
