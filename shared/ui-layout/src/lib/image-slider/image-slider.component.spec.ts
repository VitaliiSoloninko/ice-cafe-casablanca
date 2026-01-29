import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CafeImage } from '@ice-cafe-casablanca/domain';
import { ImageSliderComponent } from './image-slider.component';

describe('ImageSliderComponent', () => {
  let component: ImageSliderComponent;
  let fixture: ComponentFixture<ImageSliderComponent>;

  const mockImages: CafeImage[] = [
    {
      id: '1',
      url: 'cafe-1.jpg',
      alt: 'Cafe interior',
    },
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
      imports: [ImageSliderComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ImageSliderComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should accept images input', () => {
    fixture.componentRef.setInput('images', mockImages);
    fixture.detectChanges();

    expect(component.images()).toEqual(mockImages);
  });

  it('should accept currentIndex input', () => {
    fixture.componentRef.setInput('currentIndex', 1);
    fixture.detectChanges();

    expect(component.currentIndex()).toBe(1);
  });

  it('should emit indexChange on nextImage', () => {
    const emitSpy = jest.fn();
    component.indexChange.subscribe(emitSpy);

    fixture.componentRef.setInput('images', mockImages);
    fixture.componentRef.setInput('currentIndex', 0);
    fixture.detectChanges();

    component.nextImage();

    expect(emitSpy).toHaveBeenCalledWith(1);
  });

  it('should emit indexChange on previousImage', () => {
    const emitSpy = jest.fn();
    component.indexChange.subscribe(emitSpy);

    fixture.componentRef.setInput('images', mockImages);
    fixture.componentRef.setInput('currentIndex', 1);
    fixture.detectChanges();

    component.previousImage();

    expect(emitSpy).toHaveBeenCalledWith(0);
  });

  it('should not go to next image when at the end', () => {
    const emitSpy = jest.fn();
    component.indexChange.subscribe(emitSpy);

    fixture.componentRef.setInput('images', mockImages);
    fixture.componentRef.setInput('currentIndex', 2);
    fixture.detectChanges();

    component.nextImage();

    expect(emitSpy).not.toHaveBeenCalled();
  });

  it('should not go to previous image when at the start', () => {
    const emitSpy = jest.fn();
    component.indexChange.subscribe(emitSpy);

    fixture.componentRef.setInput('images', mockImages);
    fixture.componentRef.setInput('currentIndex', 0);
    fixture.detectChanges();

    component.previousImage();

    expect(emitSpy).not.toHaveBeenCalled();
  });

  it('should handle keyboard arrow right event', () => {
    const emitSpy = jest.fn();
    component.indexChange.subscribe(emitSpy);

    fixture.componentRef.setInput('images', mockImages);
    fixture.componentRef.setInput('currentIndex', 0);
    fixture.detectChanges();

    const event = new KeyboardEvent('keydown', { key: 'ArrowRight' });
    component.handleKeyboardEvent(event);

    expect(emitSpy).toHaveBeenCalledWith(1);
  });

  it('should handle keyboard arrow left event', () => {
    const emitSpy = jest.fn();
    component.indexChange.subscribe(emitSpy);

    fixture.componentRef.setInput('images', mockImages);
    fixture.componentRef.setInput('currentIndex', 1);
    fixture.detectChanges();

    const event = new KeyboardEvent('keydown', { key: 'ArrowLeft' });
    component.handleKeyboardEvent(event);

    expect(emitSpy).toHaveBeenCalledWith(0);
  });

  it('should have hasPrevious false at first item', () => {
    fixture.componentRef.setInput('currentIndex', 0);
    fixture.detectChanges();

    expect(component.hasPrevious).toBe(false);
  });

  it('should have hasPrevious true after first item', () => {
    fixture.componentRef.setInput('currentIndex', 1);
    fixture.detectChanges();

    expect(component.hasPrevious).toBe(true);
  });
});
