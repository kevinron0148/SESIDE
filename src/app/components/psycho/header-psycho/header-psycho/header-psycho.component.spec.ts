import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderPsychoComponent } from './header-psycho.component';

describe('HeaderPsychoComponent', () => {
  let component: HeaderPsychoComponent;
  let fixture: ComponentFixture<HeaderPsychoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderPsychoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderPsychoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
