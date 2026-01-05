import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UtilSeo } from './util-seo';

describe('UtilSeo', () => {
  let component: UtilSeo;
  let fixture: ComponentFixture<UtilSeo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UtilSeo],
    }).compileComponents();

    fixture = TestBed.createComponent(UtilSeo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
