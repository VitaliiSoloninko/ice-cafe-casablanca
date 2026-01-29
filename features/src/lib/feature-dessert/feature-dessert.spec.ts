import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FeatureDessert } from './feature-dessert';

describe('FeatureDessert', () => {
  let component: FeatureDessert;
  let fixture: ComponentFixture<FeatureDessert>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeatureDessert],
    }).compileComponents();

    fixture = TestBed.createComponent(FeatureDessert);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load dessert products on init', () => {
    expect(component.dessertProducts).toBeDefined();
    expect(component.dessertProducts.length).toBeGreaterThan(0);
  });
});
