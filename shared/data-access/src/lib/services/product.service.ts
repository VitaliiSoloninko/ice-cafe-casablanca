import { Injectable } from '@angular/core';
import { Product } from '@ice-cafe-casablanca/domain';
import { Observable, of } from 'rxjs';
import {
  COLD_DRINKS,
  DESSERT_PRODUCTS,
  FOOD_PRODUCTS,
  HOT_DRINKS,
  ICE_PRODUCTS,
  TEA,
} from '../data';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  getIceProducts(): Observable<Product[]> {
    return of(ICE_PRODUCTS);
  }

  getFoodProducts(): Observable<Product[]> {
    return of(FOOD_PRODUCTS);
  }

  getDrinkProducts(): Observable<Product[]> {
    return of([...COLD_DRINKS, ...HOT_DRINKS, ...TEA]);
  }

  getColdDrinks(): Observable<Product[]> {
    return of(COLD_DRINKS);
  }

  getHotDrinks(): Observable<Product[]> {
    return of(HOT_DRINKS);
  }

  getTea(): Observable<Product[]> {
    return of(TEA);
  }

  getDessertProducts(): Observable<Product[]> {
    return of(DESSERT_PRODUCTS);
  }

  getAllProducts(): Observable<Product[]> {
    return of([
      ...ICE_PRODUCTS,
      ...FOOD_PRODUCTS,
      ...COLD_DRINKS,
      ...HOT_DRINKS,
      ...TEA,
      ...DESSERT_PRODUCTS,
    ]);
  }

  getProductById(id: number): Observable<Product | undefined> {
    const allProducts = [
      ...ICE_PRODUCTS,
      ...FOOD_PRODUCTS,
      ...COLD_DRINKS,
      ...HOT_DRINKS,
      ...TEA,
      ...DESSERT_PRODUCTS,
    ];
    const product = allProducts.find((p) => p.id === id);
    return of(product);
  }
}
