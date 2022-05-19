import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComunicationService {
  mensaje: string = {} as string;

  private enviarMensajeSubject = new Subject<string>();

  enviarMensajeObservable = this.enviarMensajeSubject.asObservable();

  enviarMensaje(mensaje: string) {
    this.mensaje = mensaje;
    this.enviarMensajeSubject.next(mensaje);
  }

  constructor() {
    
  }
}
