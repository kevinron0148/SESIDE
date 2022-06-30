import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistorialTestComponent } from './historial-test.component';

describe('HistorialTestComponent', () => {
  let component: HistorialTestComponent;
  let fixture: ComponentFixture<HistorialTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistorialTestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HistorialTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
