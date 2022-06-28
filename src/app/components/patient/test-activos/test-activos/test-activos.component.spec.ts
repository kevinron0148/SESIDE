import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestActivosComponent } from './test-activos.component';

describe('TestActivosComponent', () => {
  let component: TestActivosComponent;
  let fixture: ComponentFixture<TestActivosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestActivosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestActivosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
