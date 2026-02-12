import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardAbout } from './card-about';

describe('CardAbout', () => {
  let component: CardAbout;
  let fixture: ComponentFixture<CardAbout>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardAbout]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardAbout);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
