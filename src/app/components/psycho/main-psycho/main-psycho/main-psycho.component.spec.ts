import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainPsychoComponent } from './main-psycho.component';

describe('MainPsychoComponent', () => {
  let component: MainPsychoComponent;
  let fixture: ComponentFixture<MainPsychoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainPsychoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainPsychoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
