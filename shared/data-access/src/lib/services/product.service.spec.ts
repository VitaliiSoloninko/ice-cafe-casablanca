import { TestBed } from '@angular/core/testing';
import { firstValueFrom } from 'rxjs';
import { ProductService } from './product.service';

describe('ProductService', () => {
  let service: ProductService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('getIceProducts', () => {
    it('should return ice products', async () => {
      const products = await firstValueFrom(service.getIceProducts());
      expect(products).toBeDefined();
      expect(products.length).toBeGreaterThan(0);
      expect(products[0]).toHaveProperty('name');
      expect(products[0]).toHaveProperty('price');
    });
  });

  describe('getFoodProducts', () => {
    it('should return food products', async () => {
      const products = await firstValueFrom(service.getFoodProducts());
      expect(products).toBeDefined();
      expect(products.length).toBe(4);
    });
  });

  describe('getDrinkProducts', () => {
    it('should return all drinks (cold + hot + tea)', async () => {
      const products = await firstValueFrom(service.getDrinkProducts());
      expect(products).toBeDefined();
      expect(products.length).toBeGreaterThan(0);
    });
  });

  describe('getDessertProducts', () => {
    it('should return dessert products', async () => {
      const products = await firstValueFrom(service.getDessertProducts());
      expect(products).toBeDefined();
      expect(products.length).toBe(3);
    });
  });

  describe('getAllProducts', () => {
    it('should return all products', async () => {
      const products = await firstValueFrom(service.getAllProducts());
      expect(products).toBeDefined();
      expect(products.length).toBeGreaterThan(0);
    });
  });

  describe('getProductById', () => {
    it('should return product by id', async () => {
      const product = await firstValueFrom(service.getProductById(1));
      expect(product).toBeDefined();
      expect(product?.id).toBe(1);
    });

    it('should return undefined for non-existent id', async () => {
      const product = await firstValueFrom(service.getProductById(99999));
      expect(product).toBeUndefined();
    });
  });
});
