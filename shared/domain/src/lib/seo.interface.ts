export interface SeoData {
  title: string;
  description: string;
  keywords: string;
}

export abstract class SeoService {
  abstract setSeo(data: SeoData): void;
}
