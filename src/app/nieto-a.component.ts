import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ComunicationService } from './comunication.service';

@Component({
  selector: 'app-nieto-a',
  templateUrl: './nieto-a.component.html',
  styleUrls: ['./nieto-a.component.scss']
})
export class NietoAComponent implements OnInit {
  mensaje: string = {} as string;

  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private comunicationService: ComunicationService) {
    this.form = this.fb.group({
      texto: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.comunicationService.enviarMensajeObservable.subscribe(mensaje => {
      this.mensaje = mensaje;
    });
  }

  cambioTexto() {
    //si el form es invalido termina la ejecucion del modulo
    //y no se ejecuta el console.log, ni el servicio
    //es una validacion
    if (this.form.invalid) {
      return;
    }
    console.table(this.form);

    console.table("tabla: " + this.form.value.texto);

    this.mensaje = this.form.value.texto;
    console.log("mensaje: " + this.mensaje);

    this.comunicationService.enviarMensaje(this.mensaje);
  }
}
