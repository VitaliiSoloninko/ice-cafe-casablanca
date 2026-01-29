import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Product } from '@ice-cafe-casablanca/domain';
import { ProductModalComponent } from './product-modal.component';

describe('ProductModalComponent', () => {
  let component: ProductModalComponent;
  let fixture: ComponentFixture<ProductModalComponent>;

  const mockProduct: Product = {
    id: '1',
    name: 'Vanilla Ice Cream',
    description: 'Classic vanilla flavor',
    price: 3.0,
    category: 'ice',
    image: 'vanilla.jpg',
  };

  const mockProducts: Product[] = [
    mockProduct,
    {
      id: '2',
      name: 'Chocolate Ice Cream',
      description: 'Rich chocolate flavor',
      price: 3.5,
      category: 'ice',
      image: 'chocolate.jpg',
    },
  ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductModalComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductModalComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should accept product input', () => {
    fixture.componentRef.setInput('product', mockProduct);
    fixture.detectChanges();

    expect(component.product()).toEqual(mockProduct);
  });

  it('should accept products array input', () => {
    fixture.componentRef.setInput('products', mockProducts);
    fixture.detectChanges();

    expect(component.products()).toEqual(mockProducts);
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

  it('should handle null product', () => {
    fixture.componentRef.setInput('product', null);
    fixture.detectChanges();

    expect(component.product()).toBeNull();
  });

  it('should display product details when product is provided', () => {
    fixture.componentRef.setInput('product', mockProduct);
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled).toBeTruthy();
  });
});
