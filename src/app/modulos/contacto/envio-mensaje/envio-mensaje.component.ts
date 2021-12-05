import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-envio-mensaje',
  templateUrl: './envio-mensaje.component.html',
  styleUrls: ['./envio-mensaje.component.css']
})
export class EnvioMensajeComponent implements OnInit {

  fgValidador: FormGroup = this.fb.group({
    'nombre': ['', [Validators.required]],
    'correo': ['', [Validators.required, Validators.email]],
    'asunto': ['', [Validators.required]],
    'mensaje': ['', [Validators.required]]
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

}
