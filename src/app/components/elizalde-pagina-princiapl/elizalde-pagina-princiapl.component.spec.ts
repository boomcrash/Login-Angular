import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElizaldePaginaPrinciaplComponent } from './elizalde-pagina-princiapl.component';

describe('ElizaldePaginaPrinciaplComponent', () => {
  let component: ElizaldePaginaPrinciaplComponent;
  let fixture: ComponentFixture<ElizaldePaginaPrinciaplComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElizaldePaginaPrinciaplComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ElizaldePaginaPrinciaplComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
