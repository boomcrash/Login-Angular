import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElizaldeInicioSesionComponent } from './elizalde-inicio-sesion.component';

describe('ElizaldeInicioSesionComponent', () => {
  let component: ElizaldeInicioSesionComponent;
  let fixture: ComponentFixture<ElizaldeInicioSesionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElizaldeInicioSesionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ElizaldeInicioSesionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
