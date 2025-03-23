import {ComponentFixture, TestBed} from '@angular/core/testing';

import {LedClockComponent} from './led-clock.component';

describe('LedClockComponent', () => {
  let component: LedClockComponent;
  let fixture: ComponentFixture<LedClockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LedClockComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(LedClockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
