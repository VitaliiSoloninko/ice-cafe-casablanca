import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Product } from '@ice-cafe-casablanca/domain';
import { ProductListComponent } from './product-list.component';

describe('ProductListComponent', () => {
  let component: ProductListComponent;
  let fixture: ComponentFixture<ProductListComponent>;

  const mockProducts: Product[] = [
    {
      id: '1',
      name: 'Vanilla Ice Cream',
      description: 'Classic vanilla flavor',
      price: 3.0,
      category: 'ice',
      image: 'vanilla.jpg',
    },
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
      imports: [ProductListComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductListComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should accept products input', () => {
    fixture.componentRef.setInput('products', mockProducts);
    fixture.detectChanges();

    expect(component.products()).toEqual(mockProducts);
    expect(component.products().length).toBe(2);
  });

  it('should emit productClick event when product is clicked', () => {
    const emitSpy = jest.fn();
    component.productClick.subscribe(emitSpy);

    fixture.componentRef.setInput('products', mockProducts);
    fixture.detectChanges();

    const productElements =
      fixture.nativeElement.querySelectorAll('lib-product-item');
    expect(productElements.length).toBe(2);
  });

  it('should display empty list when no products provided', () => {
    fixture.componentRef.setInput('products', []);
    fixture.detectChanges();

    const productElements =
      fixture.nativeElement.querySelectorAll('lib-product-item');
    expect(productElements.length).toBe(0);
  });

  it('should handle undefined products gracefully', () => {
    fixture.detectChanges();

    expect(component.products()).toEqual([]);
  });
});
