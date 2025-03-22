import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MosaicPageComponent } from './mosaic-page.component';

describe('MosaicPageComponent', () => {
  let component: MosaicPageComponent;
  let fixture: ComponentFixture<MosaicPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MosaicPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MosaicPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
