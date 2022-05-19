import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ComunicationService } from './comunication.service';

@Component({
  selector: 'app-nieto-b',
  templateUrl: './nieto-b.component.html',
  styleUrls: ['./nieto-b.component.scss']
})
export class NietoBComponent implements OnInit {

  form: FormGroup;

  mensaje: string = {} as string;

  constructor(
    private fb: FormBuilder,
    private comunicationService: ComunicationService)
     { 
      this.form = this.fb.group({
        texto: ['', Validators.required]
      });
    }

  ngOnInit(): void {
    this.comunicationService.enviarMensajeObservable.subscribe(mensaje => {
      this.mensaje = mensaje;
    });

    this.cambioTexto();
  }

  cambioTexto() {
    
    //si el form es invalido termina la ejecucion del modulo
    //y no se ejecuta el console.log, ni el servicio
    //es una validacion
    if (this.form.invalid) {
      return;
    }
    console.log(this.form);

    this.mensaje = this.form.value.texto;

    this.comunicationService.enviarMensaje(this.mensaje);
  }
}
