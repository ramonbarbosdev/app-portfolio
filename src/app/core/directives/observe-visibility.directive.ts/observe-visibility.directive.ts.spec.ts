import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObserveVisibilityDirectiveTs } from './observe-visibility.directive.ts';

describe('ObserveVisibilityDirectiveTs', () => {
  let component: ObserveVisibilityDirectiveTs;
  let fixture: ComponentFixture<ObserveVisibilityDirectiveTs>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ObserveVisibilityDirectiveTs]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ObserveVisibilityDirectiveTs);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
