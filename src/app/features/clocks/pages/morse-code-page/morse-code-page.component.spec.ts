import {ComponentFixture, TestBed} from '@angular/core/testing';

import {MorseCodePageComponent} from './morse-code-page.component';

describe('MorseCodePageComponent', () => {
  let component: MorseCodePageComponent;
  let fixture: ComponentFixture<MorseCodePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MorseCodePageComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(MorseCodePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
