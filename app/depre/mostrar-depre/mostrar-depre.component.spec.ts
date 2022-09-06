import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarDepreComponent } from './mostrar-depre.component';

describe('MostrarDepreComponent', () => {
  let component: MostrarDepreComponent;
  let fixture: ComponentFixture<MostrarDepreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MostrarDepreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MostrarDepreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
