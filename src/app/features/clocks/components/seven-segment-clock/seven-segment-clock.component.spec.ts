import {ComponentFixture, TestBed} from '@angular/core/testing';

import {SevenSegmentClockComponent} from './seven-segment-clock.component';

describe('MatchClockComponent', () => {
  let component: SevenSegmentClockComponent;
  let fixture: ComponentFixture<SevenSegmentClockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SevenSegmentClockComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(SevenSegmentClockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
