import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RgbPageComponent } from './rgb-page.component';

describe('RgbPageComponent', () => {
  let component: RgbPageComponent;
  let fixture: ComponentFixture<RgbPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RgbPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RgbPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
