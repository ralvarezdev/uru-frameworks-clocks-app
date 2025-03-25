import {ComponentFixture, TestBed} from '@angular/core/testing';

import {TripleOrbitPageComponent} from './triple-orbit-page.component';

describe('LedPageComponent', () => {
  let component: TripleOrbitPageComponent;
  let fixture: ComponentFixture<TripleOrbitPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TripleOrbitPageComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(TripleOrbitPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
