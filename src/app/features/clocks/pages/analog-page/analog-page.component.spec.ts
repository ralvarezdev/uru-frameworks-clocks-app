import {ComponentFixture, TestBed} from '@angular/core/testing';

import {AnalogPageComponent} from './analog-page.component';

describe('AnalogPageComponent', () => {
  let component: AnalogPageComponent;
  let fixture: ComponentFixture<AnalogPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnalogPageComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(AnalogPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
