import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnvioMensajeComponent } from './envio-mensaje.component';

describe('EnvioMensajeComponent', () => {
  let component: EnvioMensajeComponent;
  let fixture: ComponentFixture<EnvioMensajeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnvioMensajeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnvioMensajeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
