import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FeatureFood } from './feature-food';

describe('FeatureFood', () => {
  let component: FeatureFood;
  let fixture: ComponentFixture<FeatureFood>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeatureFood],
    }).compileComponents();

    fixture = TestBed.createComponent(FeatureFood);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load food products on init', () => {
    expect(component.foodProducts).toBeDefined();
    expect(component.foodProducts.length).toBeGreaterThan(0);
  });
});
