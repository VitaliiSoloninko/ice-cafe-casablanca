import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CafeImage } from '@ice-cafe-casablanca/domain';
import { ImageItemComponent } from './image-item.component';

describe('ImageItemComponent', () => {
  let component: ImageItemComponent;
  let fixture: ComponentFixture<ImageItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImageItemComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ImageItemComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should accept image input', () => {
    const mockImage: CafeImage = {
      id: '1',
      url: 'cafe-1.jpg',
      alt: 'Cafe interior',
    };

    fixture.componentRef.setInput('image', mockImage);
    fixture.detectChanges();

    expect(component.image()).toEqual(mockImage);
  });

  it('should have image input defined when set', () => {
    const mockImage: CafeImage = {
      id: '1',
      url: 'cafe-test.jpg',
      alt: 'Test Cafe',
    };

    fixture.componentRef.setInput('image', mockImage);
    fixture.detectChanges();

    expect(component.image()?.alt).toBe('Test Cafe');
    expect(component.image()?.url).toBe('cafe-test.jpg');
  });

  it('should handle undefined image', () => {
    fixture.detectChanges();

    expect(component.image()).toBeUndefined();
  });
});
