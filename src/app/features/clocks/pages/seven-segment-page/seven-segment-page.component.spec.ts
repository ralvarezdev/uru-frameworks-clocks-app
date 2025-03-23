import {ComponentFixture, TestBed} from '@angular/core/testing';

import {SevenSegmentPageComponent} from './seven-segment-page.component';

describe('MatchPageComponent', () => {
  let component: SevenSegmentPageComponent;
  let fixture: ComponentFixture<SevenSegmentPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SevenSegmentPageComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(SevenSegmentPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
