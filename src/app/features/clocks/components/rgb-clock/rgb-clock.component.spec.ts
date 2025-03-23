import {ComponentFixture, TestBed} from '@angular/core/testing';

import {RgbClockComponent} from './rgb-clock.component';

describe('RgbClockComponent', () => {
  let component: RgbClockComponent;
  let fixture: ComponentFixture<RgbClockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RgbClockComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(RgbClockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
