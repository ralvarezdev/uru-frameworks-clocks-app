import {ComponentFixture, TestBed} from '@angular/core/testing';

import {MosaicClockComponent} from './mosaic-clock.component';

describe('MosaicClockComponent', () => {
  let component: MosaicClockComponent;
  let fixture: ComponentFixture<MosaicClockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MosaicClockComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(MosaicClockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
