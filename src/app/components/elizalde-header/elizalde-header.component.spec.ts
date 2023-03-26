import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElizaldeHeaderComponent } from './elizalde-header.component';

describe('ElizaldeHeaderComponent', () => {
  let component: ElizaldeHeaderComponent;
  let fixture: ComponentFixture<ElizaldeHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElizaldeHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ElizaldeHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
