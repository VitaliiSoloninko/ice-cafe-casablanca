import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FeatureIce } from './feature-ice';

describe('FeatureIce', () => {
  let component: FeatureIce;
  let fixture: ComponentFixture<FeatureIce>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeatureIce],
    }).compileComponents();

    fixture = TestBed.createComponent(FeatureIce);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
