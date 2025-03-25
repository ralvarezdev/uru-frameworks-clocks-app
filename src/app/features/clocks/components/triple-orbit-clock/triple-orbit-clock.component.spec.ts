import {ComponentFixture, TestBed} from '@angular/core/testing';

import {TripleOrbitClockComponent} from './triple-orbit-clock.component';

describe('TripleOrbitClockComponent', () => {
  let component: TripleOrbitClockComponent;
  let fixture: ComponentFixture<TripleOrbitClockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TripleOrbitClockComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(TripleOrbitClockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
