import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PremiumSuface } from './premium-suface';

describe('PremiumSuface', () => {
  let component: PremiumSuface;
  let fixture: ComponentFixture<PremiumSuface>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PremiumSuface]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PremiumSuface);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
