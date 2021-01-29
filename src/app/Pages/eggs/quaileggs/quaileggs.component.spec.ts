import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuaileggsComponent } from './quaileggs.component';

describe('QuaileggsComponent', () => {
  let component: QuaileggsComponent;
  let fixture: ComponentFixture<QuaileggsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuaileggsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuaileggsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
