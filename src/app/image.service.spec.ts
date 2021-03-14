import { TestBed } from '@angular/core/testing';

import { ImageService } from './image.service';

describe('ImageService', () => {
  let service: ImageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImageService);
  });

});

describe('ImageService', () => {
  let service: ImageService;

  beforeEach(() => {
    service = new ImageService();
  });

  it('Debe crear el servicio', () => {
    expect(service).toBeTruthy();
  });

  describe('getImages', () => {
    it('Debe traer todas las imagenes y deben ser 5', () => {
      const resp = service.getImages();
      expect(resp.length).toBe(5);
    });
  });

  describe('getImage(x)', () => {
    it('Debe traer una imagen cuando el id existe en las imagenes', () => {
      const img = service.getImage(2);
      expect(img.id).toBe(2);
      expect(img.brand).toBe('perro');
      expect(img.url).toBe('assets/images/perro2.jpg');
    });
  });
});
