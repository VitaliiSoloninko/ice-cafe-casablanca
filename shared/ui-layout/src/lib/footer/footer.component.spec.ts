import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import {
  ROUTE_CONTACT,
  ROUTE_DESERT,
  ROUTE_DRINK,
  ROUTE_FOOD,
  ROUTE_ICE,
} from '@ice-cafe-casablanca/domain';
import { FooterComponent } from './footer.component';

describe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FooterComponent, RouterTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have 5 footer menu items', () => {
    expect(component.menuItems.length).toBe(5);
  });

  it('should have correct footer links', () => {
    const links = component.menuItems.map((item) => item.link);
    expect(links).toEqual([
      ROUTE_ICE,
      ROUTE_DRINK,
      ROUTE_DESERT,
      ROUTE_FOOD,
      ROUTE_CONTACT,
    ]);
  });

  it('should have icons for all menu items', () => {
    component.menuItems.forEach((item) => {
      expect(item.icon).toBeDefined();
    });
  });

  it('should render footer menu items', () => {
    const footerLinks = fixture.nativeElement.querySelectorAll('a');
    expect(footerLinks.length).toBeGreaterThan(0);
  });

  it('should have ice cream icon for ice route', () => {
    const iceItem = component.menuItems.find((item) => item.link === ROUTE_ICE);
    expect(iceItem).toBeDefined();
    expect(iceItem?.icon).toBeDefined();
  });

  it('should display copyright information', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const copyrightElement = compiled.querySelector('.copyright');

    if (copyrightElement) {
      expect(copyrightElement.textContent).toContain('Ice Cafe Casablanca');
    }
  });
});
