import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Product } from '@ice-cafe-casablanca/domain';
import { ProductSliderComponent } from './product-slider.component';

describe('ProductSliderComponent', () => {
  let component: ProductSliderComponent;
  let fixture: ComponentFixture<ProductSliderComponent>;

  const mockProducts: Product[] = [
    {
      id: '1',
      name: 'Vanilla',
      description: 'Classic vanilla',
      price: 3.0,
      category: 'ice',
      image: 'vanilla.jpg',
    },
    {
      id: '2',
      name: 'Chocolate',
      description: 'Rich chocolate',
      price: 3.5,
      category: 'ice',
      image: 'chocolate.jpg',
    },
    {
      id: '3',
      name: 'Strawberry',
      description: 'Fresh strawberry',
      price: 3.2,
      category: 'ice',
      image: 'strawberry.jpg',
    },
  ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductSliderComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductSliderComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should accept products input', () => {
    fixture.componentRef.setInput('products', mockProducts);
    fixture.detectChanges();

    expect(component.products()).toEqual(mockProducts);
  });

  it('should accept currentIndex input', () => {
    fixture.componentRef.setInput('currentIndex', 1);
    fixture.detectChanges();

    expect(component.currentIndex()).toBe(1);
  });

  it('should emit indexChange on nextProduct', () => {
    const emitSpy = jest.fn();
    component.indexChange.subscribe(emitSpy);

    fixture.componentRef.setInput('products', mockProducts);
    fixture.componentRef.setInput('currentIndex', 0);
    fixture.detectChanges();

    component.nextProduct();

    expect(emitSpy).toHaveBeenCalledWith(1);
  });

  it('should emit indexChange on previousProduct', () => {
    const emitSpy = jest.fn();
    component.indexChange.subscribe(emitSpy);

    fixture.componentRef.setInput('products', mockProducts);
    fixture.componentRef.setInput('currentIndex', 1);
    fixture.detectChanges();

    component.previousProduct();

    expect(emitSpy).toHaveBeenCalledWith(0);
  });

  it('should not go to next product when at the end', () => {
    const emitSpy = jest.fn();
    component.indexChange.subscribe(emitSpy);

    fixture.componentRef.setInput('products', mockProducts);
    fixture.componentRef.setInput('currentIndex', 2);
    fixture.detectChanges();

    component.nextProduct();

    expect(emitSpy).not.toHaveBeenCalled();
  });

  it('should not go to previous product when at the start', () => {
    const emitSpy = jest.fn();
    component.indexChange.subscribe(emitSpy);

    fixture.componentRef.setInput('products', mockProducts);
    fixture.componentRef.setInput('currentIndex', 0);
    fixture.detectChanges();

    component.previousProduct();

    expect(emitSpy).not.toHaveBeenCalled();
  });

  it('should handle keyboard arrow right event', () => {
    const emitSpy = jest.fn();
    component.indexChange.subscribe(emitSpy);

    fixture.componentRef.setInput('products', mockProducts);
    fixture.componentRef.setInput('currentIndex', 0);
    fixture.detectChanges();

    const event = new KeyboardEvent('keydown', { key: 'ArrowRight' });
    component.handleKeyboardEvent(event);

    expect(emitSpy).toHaveBeenCalledWith(1);
  });

  it('should handle keyboard arrow left event', () => {
    const emitSpy = jest.fn();
    component.indexChange.subscribe(emitSpy);

    fixture.componentRef.setInput('products', mockProducts);
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
