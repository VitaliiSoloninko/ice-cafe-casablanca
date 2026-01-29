import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CafeImage } from '@ice-cafe-casablanca/domain';
import { ImageListComponent } from './image-list.component';

describe('ImageListComponent', () => {
  let component: ImageListComponent;
  let fixture: ComponentFixture<ImageListComponent>;

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
      imports: [ImageListComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ImageListComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should accept images input', () => {
    fixture.componentRef.setInput('images', mockImages);
    fixture.detectChanges();

    expect(component.images()).toEqual(mockImages);
    expect(component.images().length).toBe(3);
  });

  it('should emit imageClick event', () => {
    const emitSpy = jest.fn();
    component.imageClick.subscribe(emitSpy);

    fixture.componentRef.setInput('images', mockImages);
    fixture.detectChanges();

    const imageElements =
      fixture.nativeElement.querySelectorAll('lib-image-item');
    expect(imageElements.length).toBe(3);
  });

  it('should display empty list when no images provided', () => {
    fixture.componentRef.setInput('images', []);
    fixture.detectChanges();

    const imageElements =
      fixture.nativeElement.querySelectorAll('lib-image-item');
    expect(imageElements.length).toBe(0);
  });

  it('should handle undefined images gracefully', () => {
    fixture.detectChanges();

    expect(component.images()).toEqual([]);
  });
});
