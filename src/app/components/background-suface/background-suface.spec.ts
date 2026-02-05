import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackgroundSuface } from './background-suface';

describe('BackgroundSuface', () => {
  let component: BackgroundSuface;
  let fixture: ComponentFixture<BackgroundSuface>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BackgroundSuface]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BackgroundSuface);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
