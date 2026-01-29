import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Product } from '@ice-cafe-casablanca/domain';
import { ProductItemComponent } from './product-item.component';

describe('ProductItemComponent', () => {
  let component: ProductItemComponent;
  let fixture: ComponentFixture<ProductItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductItemComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductItemComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should accept product input', () => {
    const mockProduct: Product = {
      id: '1',
      name: 'Test Ice Cream',
      description: 'Delicious test flavor',
      price: 3.5,
      category: 'ice',
      image: 'test.jpg',
    };

    fixture.componentRef.setInput('product', mockProduct);
    fixture.detectChanges();

    expect(component.product()).toEqual(mockProduct);
  });

  it('should have product data when set', () => {
    const mockProduct: Product = {
      id: '1',
      name: 'vanilla',
      description: 'Classic vanilla',
      price: 3.0,
      category: 'ice',
      image: 'vanilla.jpg',
    };

    fixture.componentRef.setInput('product', mockProduct);
    fixture.detectChanges();

    expect(component.product()?.name).toBe('vanilla');
    expect(component.product()?.price).toBe(3.0);
  });

  it('should have price when product is set', () => {
    const mockProduct: Product = {
      id: '1',
      name: 'Test',
      description: 'Test product',
      price: 5.99,
      category: 'ice',
      image: 'test.jpg',
    };

    fixture.componentRef.setInput('product', mockProduct);
    fixture.detectChanges();

    expect(component.product()?.price).toBe(5.99);
  });
});
