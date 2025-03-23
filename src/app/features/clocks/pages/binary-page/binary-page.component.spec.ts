import {ComponentFixture, TestBed} from '@angular/core/testing';

import {BinaryPageComponent} from './binary-page.component';

describe('BinaryPageComponent', () => {
  let component: BinaryPageComponent;
  let fixture: ComponentFixture<BinaryPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BinaryPageComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(BinaryPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
