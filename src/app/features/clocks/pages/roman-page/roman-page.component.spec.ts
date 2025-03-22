import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RomanPageComponent } from './roman-page.component';

describe('RomanPageComponent', () => {
  let component: RomanPageComponent;
  let fixture: ComponentFixture<RomanPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RomanPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RomanPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
