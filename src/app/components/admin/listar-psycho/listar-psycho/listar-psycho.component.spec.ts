import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarPsychoComponent } from './listar-psycho.component';

describe('ListarPsychoComponent', () => {
  let component: ListarPsychoComponent;
  let fixture: ComponentFixture<ListarPsychoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarPsychoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarPsychoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
