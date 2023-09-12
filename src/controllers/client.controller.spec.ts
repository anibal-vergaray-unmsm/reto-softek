import { Client } from '../schemas/client.schema';
import { ClientController } from './client.controller';
import { ClientService } from '../services/client.service';
import { ClientCreateDTO } from '../dtos/client/client.create.dto';
import { ClientUpdateDTO } from 'src/dtos/client/client.update.dto';
import { TestBed } from '@automock/jest';

describe('ClientController', () => {
  let clientController: ClientController;
  let clientService: ClientService;
  const clientCreateDTO: ClientCreateDTO = {
    correo: 'anibal@gmail.com',
    nombre: 'Anibal',
    edad: 24,
    genero: 'M',
  };
  const clientUpdateDTO: ClientUpdateDTO = {
    correo: 'angie@gmail.com',
    nombre: 'Angie',
    edad: 25,
    genero: 'F',
  };
  const client: Client = {
    correo: 'anibal@gmail.com',
    nombre: 'Anibal',
    id: '10764ad6-c11a-40b9-9b0f-035d66548396',
    edad: 24,
    genero: 'M',
  };

  beforeAll(() => {
    const { unit, unitRef } = TestBed.create(ClientController).compile();

    clientController = unit;
    clientService = unitRef.get(ClientService);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('create', () => {
    it('should return created client', async () => {
      jest.spyOn(clientService, 'create').mockResolvedValueOnce(client);

      const response = await clientController.create(clientCreateDTO);

      expect(response.nombre).toBe(clientCreateDTO.nombre);
      expect(response.correo).toBe(clientCreateDTO.correo);
      expect(response.edad).toBe(clientCreateDTO.edad);
      expect(response.genero).toBe(clientCreateDTO.genero);
      expect(clientService.create).toHaveBeenCalledTimes(1);
    });
  });

  describe('getAll', () => {
    it('should return created clients', async () => {
      jest.spyOn(clientService, 'findAll').mockResolvedValueOnce([client]);

      const response = await clientController.getAll();

      expect(response.length).toBe(1);
      expect(response[0].correo).toBe(client.correo);
      expect(response[0].nombre).toBe(client.nombre);
      expect(response[0].edad).toBe(client.edad);
      expect(response[0].genero).toBe(client.genero);
      expect(clientService.findAll).toHaveBeenCalledTimes(1);
    });
  });

  describe('getById', () => {
    it('should return client by id', async () => {
      jest.spyOn(clientService, 'findOne').mockResolvedValueOnce(client);

      const response = await clientController.getById({ id: client.id });

      expect(response.nombre).toBe(client.nombre);
      expect(response.correo).toBe(client.correo);
      expect(response.edad).toBe(client.edad);
      expect(response.genero).toBe(client.genero);
      expect(clientService.findOne).toHaveBeenCalledTimes(1);
    });
  });

  describe('update', () => {
    it('should return updated client', async () => {
      jest
        .spyOn(clientService, 'update')
        .mockResolvedValueOnce({ ...client, ...clientUpdateDTO });

      const response = await clientController.update(
        { id: client.id },
        clientUpdateDTO,
      );

      expect(response.nombre).toBe(clientUpdateDTO.nombre);
      expect(response.correo).toBe(clientUpdateDTO.correo);
      expect(response.edad).toBe(clientUpdateDTO.edad);
      expect(response.genero).toBe(clientUpdateDTO.genero);
      expect(clientService.update).toHaveBeenCalledTimes(1);
    });
  });

  describe('delete', () => {
    it('should return message successful', async () => {
      jest
        .spyOn(clientService, 'delete')
        .mockResolvedValueOnce('Cliente eliminado.');

      const response = await clientController.delete({ id: client.id });

      expect(response).toBe('Cliente eliminado.');
      expect(clientService.delete).toHaveBeenCalledTimes(1);
    });
  });
});
