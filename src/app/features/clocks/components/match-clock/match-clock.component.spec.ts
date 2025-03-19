import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchClockComponent } from './match-clock.component';

describe('MatchClockComponent', () => {
  let component: MatchClockComponent;
  let fixture: ComponentFixture<MatchClockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatchClockComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MatchClockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
