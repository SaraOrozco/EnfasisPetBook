import { FilterimagesPipe } from './filterimages.pipe';

describe('FilterimagesPipe', () => {
  it('create an instance', () => {
    const pipe = new FilterimagesPipe();
    expect(pipe).toBeTruthy();
  });
});

describe('Debe filtrar por el nombre que se le pase', () => {
  let pipe : FilterimagesPipe;

  const filtroAll = [
    { "id": 1, "brand": "perro", "url": "assets/images/perro1.jpg" },
    { "id": 2, "brand": "perro", "url": "assets/images/perro2.jpg" },
    { "id": 3, "brand": "gato", "url": "assets/images/gato1.jpg" },
    { "id": 4, "brand": "gato", "url": "assets/images/gato2.jpeg" },
    { "id": 5, "brand": "perro", "url": "assets/images/perro3.jpg" },
  ]

  const filtroPerro = [
    { "id": 1, "brand": "perro", "url": "assets/images/perro1.jpg" },
    { "id": 2, "brand": "perro", "url": "assets/images/perro2.jpg" },
    { "id": 5, "brand": "perro", "url": "assets/images/perro3.jpg" },
  ]

  const filtroGato = [
    { "id": 3, "brand": "gato", "url": "assets/images/gato1.jpg" },
    { "id": 4, "brand": "gato", "url": "assets/images/gato2.jpeg" },
  ]

  const sinFiltro = [{"id": null, "brand": null, "url": null}];

  beforeEach(() => {
    pipe = new FilterimagesPipe();
  });

  describe('transform(items: any[], laptop: string)', () =>{
    it('Retorna todo usando el filtro all y deben ser 5', () => {
      let filtro = pipe.transform(filtroAll, 'all');
      expect(filtro.length).toEqual(5);
    });

    it('Retorna todo usando el filtro perro y deben ser 3', () => {
      let filtro = pipe.transform(filtroPerro, 'perro');
      expect(filtro.length).toBe(3);
    });

    it('Retorna todo usando el filtro gato y deben ser 2', () => {
      let filtro = pipe.transform(filtroGato, 'gato');
      expect(filtro.length).toBe(2);
    });
  });

  describe('transform(items: any[], laptop: string)', () => {
    it('Retorna todo usando el filtro all', () => {
      let filtro = pipe.transform(filtroAll, 'all');
      expect(filtro).toEqual(filtroAll);
    });

    it('Retorna todo usando el filtro perro', () => {
      let filtro = pipe.transform(filtroPerro, 'perro');
      expect(filtro).toEqual(filtroPerro);
    });

    it('Retorna todo usando el filtro gato', () => {
      let filtro = pipe.transform(filtroGato, 'gato');
      expect(filtro).toEqual(filtroGato);
    });

    it('Con un filtro inexistente debería estar vacío', () => {
      let filtro = pipe.transform(sinFiltro, 'carro');
      expect(filtro).toEqual([]);
    });
  });
});


