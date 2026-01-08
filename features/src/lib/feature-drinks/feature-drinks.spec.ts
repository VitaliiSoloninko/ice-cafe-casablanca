import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FeatureDrinks } from './feature-drinks';

describe('FeatureDrinks', () => {
  let component: FeatureDrinks;
  let fixture: ComponentFixture<FeatureDrinks>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeatureDrinks],
    }).compileComponents();

    fixture = TestBed.createComponent(FeatureDrinks);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load drinks products on init', () => {
    expect(component.drinksProducts).toBeDefined();
    expect(component.drinksProducts.length).toBeGreaterThan(0);
  });

  it('should have correct page title', () => {
    expect(component.pageTitle).toBe('Напої');
  });
});
