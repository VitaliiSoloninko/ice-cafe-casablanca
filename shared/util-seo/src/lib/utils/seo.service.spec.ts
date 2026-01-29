import { TestBed } from '@angular/core/testing';
import { Meta, Title } from '@angular/platform-browser';
import { SeoService } from './seo.service';

describe('SeoService', () => {
  let service: SeoService;
  let titleService: Title;
  let metaService: Meta;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SeoService);
    titleService = TestBed.inject(Title);
    metaService = TestBed.inject(Meta);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('setSeo', () => {
    it('should set page title', () => {
      const spy = jest.spyOn(titleService, 'setTitle');
      service.setSeo({
        title: 'Test Title',
      });
      expect(spy).toHaveBeenCalledWith('Test Title');
    });

    it('should set meta description', () => {
      const spy = jest.spyOn(metaService, 'updateTag');
      service.setSeo({
        description: 'Test Description',
      });
      expect(spy).toHaveBeenCalledWith({
        name: 'description',
        content: 'Test Description',
      });
    });

    it('should set meta keywords', () => {
      const spy = jest.spyOn(metaService, 'updateTag');
      service.setSeo({
        keywords: 'test, keywords',
      });
      expect(spy).toHaveBeenCalledWith({
        name: 'keywords',
        content: 'test, keywords',
      });
    });

    it('should set Open Graph title', () => {
      const spy = jest.spyOn(metaService, 'updateTag');
      service.setSeo({
        title: 'OG Test Title',
      });
      expect(spy).toHaveBeenCalledWith({
        property: 'og:title',
        content: 'OG Test Title',
      });
    });

    it('should set Open Graph description', () => {
      const spy = jest.spyOn(metaService, 'updateTag');
      service.setSeo({
        description: 'OG Test Description',
      });
      expect(spy).toHaveBeenCalledWith({
        property: 'og:description',
        content: 'OG Test Description',
      });
    });

    it('should set all SEO data at once', () => {
      const titleSpy = jest.spyOn(titleService, 'setTitle');
      const metaSpy = jest.spyOn(metaService, 'updateTag');

      service.setSeo({
        title: 'Complete Test',
        description: 'Complete Description',
        keywords: 'test, complete',
      });

      expect(titleSpy).toHaveBeenCalledWith('Complete Test');
      expect(metaSpy).toHaveBeenCalled();
    });
  });
});
