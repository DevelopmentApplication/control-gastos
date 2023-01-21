import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistorialVersionComponent } from './historial-version.component';

describe('HistorialVersionComponent', () => {
  let component: HistorialVersionComponent;
  let fixture: ComponentFixture<HistorialVersionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistorialVersionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HistorialVersionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
