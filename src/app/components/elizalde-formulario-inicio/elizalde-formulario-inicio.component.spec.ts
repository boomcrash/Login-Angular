import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElizaldeFormularioInicioComponent } from './elizalde-formulario-inicio.component';

describe('ElizaldeFormularioInicioComponent', () => {
  let component: ElizaldeFormularioInicioComponent;
  let fixture: ComponentFixture<ElizaldeFormularioInicioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElizaldeFormularioInicioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ElizaldeFormularioInicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
