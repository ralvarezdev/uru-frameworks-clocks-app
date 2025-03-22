import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LedPageComponent } from './led-page.component';

describe('LedPageComponent', () => {
  let component: LedPageComponent;
  let fixture: ComponentFixture<LedPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LedPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LedPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
