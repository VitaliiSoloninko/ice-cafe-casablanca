import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CafeGalleryComponent } from './cafe-gallery';

describe('CafeGalleryComponent', () => {
  let component: CafeGalleryComponent;
  let fixture: ComponentFixture<CafeGalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CafeGalleryComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CafeGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
