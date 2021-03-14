import { TestBed } from '@angular/core/testing';

import { ImageService } from './image.service';

describe('ImageService', () => {
  let service: ImageService;

  beforeEach(() => {
    service = new ImageService();
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

    it('Cuando se envíe un id que no está dentro de la lista, entonces debe retornar indefinido', () => {
      const id = 8;
      let res = service.getImage(id);
      expect(res).toBeUndefined();
    });

  });
});
