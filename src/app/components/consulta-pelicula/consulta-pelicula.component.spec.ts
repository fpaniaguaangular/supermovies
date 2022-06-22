import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaPeliculaComponent } from './consulta-pelicula.component';

describe('ConsultaPeliculaComponent', () => {
  let component: ConsultaPeliculaComponent;
  let fixture: ComponentFixture<ConsultaPeliculaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultaPeliculaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultaPeliculaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
