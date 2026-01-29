import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CafeImage } from '@ice-cafe-casablanca/domain';
import { ImageModalComponent } from './image-modal.component';

describe('ImageModalComponent', () => {
  let component: ImageModalComponent;
  let fixture: ComponentFixture<ImageModalComponent>;

  const mockImage: CafeImage = {
    id: '1',
    url: 'cafe-1.jpg',
    alt: 'Cafe interior',
  };

  const mockImages: CafeImage[] = [
    mockImage,
    {
      id: '2',
      url: 'cafe-2.jpg',
      alt: 'Cafe exterior',
    },
    {
      id: '3',
      url: 'cafe-3.jpg',
      alt: 'Cafe menu',
    },
  ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImageModalComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ImageModalComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should accept image input', () => {
    fixture.componentRef.setInput('image', mockImage);
    fixture.detectChanges();

    expect(component.image()).toEqual(mockImage);
  });

  it('should accept images array input', () => {
    fixture.componentRef.setInput('images', mockImages);
    fixture.detectChanges();

    expect(component.images()).toEqual(mockImages);
  });

  it('should accept currentIndex input', () => {
    fixture.componentRef.setInput('currentIndex', 1);
    fixture.detectChanges();

    expect(component.currentIndex()).toBe(1);
  });

  it('should emit closeModal event when onClose is called', () => {
    const emitSpy = jest.fn();
    component.closeModal.subscribe(emitSpy);

    component.onClose();

    expect(emitSpy).toHaveBeenCalled();
  });

  it('should emit indexChange event when onIndexChange is called', () => {
    const emitSpy = jest.fn();
    component.indexChange.subscribe(emitSpy);

    component.onIndexChange(2);

    expect(emitSpy).toHaveBeenCalledWith(2);
  });

  it('should handle null image', () => {
    fixture.componentRef.setInput('image', null);
    fixture.detectChanges();

    expect(component.image()).toBeNull();
  });
});
