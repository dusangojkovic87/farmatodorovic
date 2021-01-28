import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurGoalsCardComponent } from './our-goals-card.component';

describe('OurGoalsCardComponent', () => {
  let component: OurGoalsCardComponent;
  let fixture: ComponentFixture<OurGoalsCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OurGoalsCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OurGoalsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
