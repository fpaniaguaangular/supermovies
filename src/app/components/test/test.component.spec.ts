import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent } from './test.component';

describe('TestComponent', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  fit('suma dos + dos', () => {
    expect(component.sumar(2,2)).toEqual(4);
  });
  fit('suma dos + tres', () => {
    expect(component.sumar(2,3)).toEqual(4);
  });
  it('suma ocho + diez', () => {
    expect(component.sumar(8,10)).toBeGreaterThan(12);
  })
});
