import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { IEvents } from '../interfaces/i-events';

@Injectable({
  providedIn: 'root'
})
export class EventoService {
  // URL base del servicio web
  private eventosEndpoint = 'http://localhost:3000/eventos';

  // Inyectamos HttpClient
  constructor(private http: HttpClient) {}

  // Obtiene todos los eventos
  // GET /eventos
  getEventos(): Observable<IEvents[]> {
    return this.http.get<IEvents[]>(this.eventosEndpoint).pipe(
      catchError((resp: HttpErrorResponse) => {
        console.error(`Error obteniendo eventos. Código: ${resp.status}. Mensaje: ${resp.message}`);
        return throwError(() => new Error(`Error obteniendo eventos`));
      })
    );
  }

  // Añade un nuevo evento
  // POST /eventos
  addEvento(evento: IEvents): Observable<IEvents> {
    return this.http.post<IEvents>(this.eventosEndpoint, evento).pipe(
      catchError((resp: HttpErrorResponse) => {
        console.error(`Error añadiendo evento. Código: ${resp.status}. Mensaje: ${resp.message}`);
        return throwError(() => new Error(`Error añadiendo evento`));
      })
    );
  }

  // Elimina un evento
  // DELETE /eventos/:id
  deleteEvento(id: string): Observable<any> {
    return this.http.delete(`${this.eventosEndpoint}/${id}`).pipe(
      catchError((resp: HttpErrorResponse) => {
        console.error(`Error eliminando evento. Código: ${resp.status}. Mensaje: ${resp.message}`);
        return throwError(() => new Error(`Error eliminando evento`));
      })
    );
  }
}
