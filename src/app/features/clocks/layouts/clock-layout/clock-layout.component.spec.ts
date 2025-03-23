import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ClockLayoutComponent} from './clock-layout.component';

describe('ClockLayoutComponent', () => {
  let component: ClockLayoutComponent;
  let fixture: ComponentFixture<ClockLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClockLayoutComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ClockLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
