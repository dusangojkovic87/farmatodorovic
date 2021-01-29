import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChickeneggsComponent } from './chickeneggs.component';

describe('ChickeneggsComponent', () => {
  let component: ChickeneggsComponent;
  let fixture: ComponentFixture<ChickeneggsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChickeneggsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChickeneggsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
