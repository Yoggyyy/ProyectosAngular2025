import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { IEvents } from '../interfaces/i-events';
import { EventoService } from '../services/evento.service';

@Component({
  selector: 'evento-add',
  imports: [FormsModule],
  templateUrl: './evento-add.html',
  styleUrl: './evento-add.css',
})
export class EventoAdd {
  // Inyectamos el servicio y el router
  private eventoService = inject(EventoService);
  private router = inject(Router);

  // Objeto para el nuevo evento
  newEvent: IEvents = {
    title: '',
    description: '',
    image: '',
    price: 0,
    date: ''
  };

  // Método para añadir un nuevo evento
  // Llama al servicio y cuando el servidor responde, navega al listado
  addEvent() {
    this.eventoService.addEvento(this.newEvent).subscribe({
      next: () => {
        // El evento se ha creado, navegamos al listado
        this.router.navigate(['/eventos']);
      },
      error: (err) => console.error(err)
    });
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
