import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import {
  ROUTE_CONTACT,
  ROUTE_DESERT,
  ROUTE_DRINK,
  ROUTE_FOOD,
  ROUTE_ICE,
} from '@ice-cafe-casablanca/domain';
import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderComponent, RouterTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have 5 menu items', () => {
    expect(component.menuItems.length).toBe(5);
  });

  it('should have correct menu item names', () => {
    const names = component.menuItems.map((item) => item.name);
    expect(names).toEqual([
      'Eis',
      'Getränke',
      'Nachtisch',
      'Essen',
      'Kontakte',
    ]);
  });

  it('should have correct menu item links', () => {
    const links = component.menuItems.map((item) => item.link);
    expect(links).toEqual([
      ROUTE_ICE,
      ROUTE_DRINK,
      ROUTE_DESERT,
      ROUTE_FOOD,
      ROUTE_CONTACT,
    ]);
  });

  it('should render all menu items', () => {
    const menuElements = fixture.nativeElement.querySelectorAll('a');
    expect(menuElements.length).toBeGreaterThanOrEqual(5);
  });

  it('should have menu items defined', () => {
    expect(component.menuItems).toBeDefined();
    expect(Array.isArray(component.menuItems)).toBe(true);
  });

  it('should have Ice menu item with correct route', () => {
    const iceItem = component.menuItems.find((item) => item.name === 'Eis');
    expect(iceItem).toBeDefined();
    expect(iceItem?.link).toBe(ROUTE_ICE);
  });
});
