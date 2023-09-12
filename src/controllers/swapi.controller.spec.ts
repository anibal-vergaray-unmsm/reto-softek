import { SwapiController } from './swapi.controller';
import { SwapiService } from 'src/services/swapi.service';
import { TestBed } from '@automock/jest';

describe('SwapiController', () => {
  let swapiController: SwapiController;
  let swapiService: jest.Mocked<SwapiService>;
  const person = {
    nombre: 'Luke Skywalker',
    altura: '172',
    masa: '77',
    color_de_pelo: 'blond',
    color_de_piel: 'fair',
    color_de_ojos: 'blue',
    año_de_nacimiento: '19BBY',
    genero: 'male',
    planeta_de_origen: 'https://swapi.dev/api/planets/1/',
    films: [
      'https://swapi.dev/api/films/1/',
      'https://swapi.dev/api/films/2/',
      'https://swapi.dev/api/films/3/',
      'https://swapi.dev/api/films/6/',
    ],
    especies: [],
    vehiculos: [
      'https://swapi.dev/api/vehicles/14/',
      'https://swapi.dev/api/vehicles/30/',
    ],
    naves_espaciales: [
      'https://swapi.dev/api/starships/12/',
      'https://swapi.dev/api/starships/22/',
    ],
    fecha_de_creacion: '2014-12-09T13:50:51.644000Z',
    fecha_de_edicion: '2014-12-20T21:17:56.891000Z',
    url: 'https://swapi.dev/api/people/1/',
  };
  const film = {
    titulo: 'A New Hope',
    numero_de_episodio: 4,
    parrafos_iniciales:
      "It is a period of civil war.\r\nRebel spaceships, striking\r\nfrom a hidden base, have won\r\ntheir first victory against\r\nthe evil Galactic Empire.\r\n\r\nDuring the battle, Rebel\r\nspies managed to steal secret\r\nplans to the Empire's\r\nultimate weapon, the DEATH\r\nSTAR, an armored space\r\nstation with enough power\r\nto destroy an entire planet.\r\n\r\nPursued by the Empire's\r\nsinister agents, Princess\r\nLeia races home aboard her\r\nstarship, custodian of the\r\nstolen plans that can save her\r\npeople and restore\r\nfreedom to the galaxy....",
    director: 'George Lucas',
    productor: 'Gary Kurtz, Rick McCallum',
    fecha_de_lanzamiento: '1977-05-25',
    personajes: [
      'https://swapi.dev/api/people/1/',
      'https://swapi.dev/api/people/2/',
      'https://swapi.dev/api/people/3/',
      'https://swapi.dev/api/people/4/',
      'https://swapi.dev/api/people/5/',
      'https://swapi.dev/api/people/6/',
      'https://swapi.dev/api/people/7/',
      'https://swapi.dev/api/people/8/',
      'https://swapi.dev/api/people/9/',
      'https://swapi.dev/api/people/10/',
      'https://swapi.dev/api/people/12/',
      'https://swapi.dev/api/people/13/',
      'https://swapi.dev/api/people/14/',
      'https://swapi.dev/api/people/15/',
      'https://swapi.dev/api/people/16/',
      'https://swapi.dev/api/people/18/',
      'https://swapi.dev/api/people/19/',
      'https://swapi.dev/api/people/81/',
    ],
    planetas: [
      'https://swapi.dev/api/planets/1/',
      'https://swapi.dev/api/planets/2/',
      'https://swapi.dev/api/planets/3/',
    ],
    naves_espaciales: [
      'https://swapi.dev/api/starships/2/',
      'https://swapi.dev/api/starships/3/',
      'https://swapi.dev/api/starships/5/',
      'https://swapi.dev/api/starships/9/',
      'https://swapi.dev/api/starships/10/',
      'https://swapi.dev/api/starships/11/',
      'https://swapi.dev/api/starships/12/',
      'https://swapi.dev/api/starships/13/',
    ],
    vehiculos: [
      'https://swapi.dev/api/vehicles/4/',
      'https://swapi.dev/api/vehicles/6/',
      'https://swapi.dev/api/vehicles/7/',
      'https://swapi.dev/api/vehicles/8/',
    ],
    especies: [
      'https://swapi.dev/api/species/1/',
      'https://swapi.dev/api/species/2/',
      'https://swapi.dev/api/species/3/',
      'https://swapi.dev/api/species/4/',
      'https://swapi.dev/api/species/5/',
    ],
    fecha_de_creacion: '2014-12-10T14:23:31.880000Z',
    fecha_de_edicion: '2014-12-20T19:49:45.256000Z',
    url: 'https://swapi.dev/api/films/1/',
  };

  beforeAll(() => {
    const { unit, unitRef } = TestBed.create(SwapiController)
      .mock(SwapiService)
      .using({ findOne: jest.fn() })
      .compile();

    swapiController = unit;
    swapiService = unitRef.get(SwapiService);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('GetById', () => {
    it('should return a person with id 1', async () => {
      const params = {
        path: 'people',
        id: 1,
      };

      swapiService.findOne.mockResolvedValueOnce(person);
      const response = await swapiController.getById(params);

      expect(response.nombre).toBe(person.nombre);
      expect(response.altura).toBe(person.altura);
      expect(response.masa).toBe(person.masa);
      expect(response.color_de_pelo).toBe(person.color_de_pelo);
      expect(response.color_de_piel).toBe(person.color_de_piel);
      expect(response.color_de_ojos).toBe(person.color_de_ojos);
      expect(response.año_de_nacimiento).toBe(person.año_de_nacimiento);
      expect(response.genero).toBe(person.genero);
      expect(response.planeta_de_origen).toBe(person.planeta_de_origen);
      expect(response.films).toEqual(person.films);
      expect(response.especies).toEqual(person.especies);
      expect(response.vehiculos).toEqual(person.vehiculos);
      expect(response.naves_espaciales).toEqual(person.naves_espaciales);
      expect(response.fecha_de_creacion).toBe(person.fecha_de_creacion);
      expect(response.fecha_de_edicion).toBe(person.fecha_de_edicion);
      expect(response.url).toBe(person.url);
      expect(swapiService.findOne).toHaveBeenCalledTimes(1);
      expect(swapiService.findOne).toHaveBeenCalledWith(params);
    });

    it('should return a film with id 1', async () => {
      const params = {
        path: 'films',
        id: 1,
      };

      swapiService.findOne.mockResolvedValueOnce(film);

      const response = await swapiController.getById(params);

      expect(response.titulo).toBe(film.titulo);
      expect(response.numero_de_episodio).toBe(film.numero_de_episodio);
      expect(response.parrafos_iniciales).toBe(film.parrafos_iniciales);
      expect(response.director).toBe(film.director);
      expect(response.productor).toBe(film.productor);
      expect(response.fecha_de_lanzamiento).toBe(film.fecha_de_lanzamiento);
      expect(response.personajes).toEqual(film.personajes);
      expect(response.planetas).toEqual(film.planetas);
      expect(response.naves_espaciales).toEqual(film.naves_espaciales);
      expect(response.vehiculos).toEqual(film.vehiculos);
      expect(response.especies).toEqual(film.especies);
      expect(response.fecha_de_creacion).toBe(film.fecha_de_creacion);
      expect(swapiService.findOne).toHaveBeenCalledTimes(1);
      expect(swapiService.findOne).toHaveBeenCalledWith(params);
    });
  });
});
