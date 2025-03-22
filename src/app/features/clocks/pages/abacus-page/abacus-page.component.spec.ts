import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbacusPageComponent } from './abacus-page.component';

describe('AbacusPageComponent', () => {
  let component: AbacusPageComponent;
  let fixture: ComponentFixture<AbacusPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AbacusPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AbacusPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
