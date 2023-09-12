import { Mapper } from '@automapper/core';
import { InjectMapper } from '@automapper/nestjs';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel, Model } from 'nestjs-dynamoose';
import { ClientCreateDTO } from 'src/dtos/client/client.create.dto';
import { ClientUpdateDTO } from 'src/dtos/client/client.update.dto';
import { Client, ClientKey } from 'src/schemas/client.schema';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class ClientService {
  constructor(
    @InjectModel('Client')
    private clientModel: Model<Client, ClientKey> = undefined,
    @InjectMapper() private readonly mapper: Mapper = undefined,
  ) {}

  async create(data: ClientCreateDTO): Promise<Client> {
    const client = this.mapper.map(data, ClientCreateDTO, Client);

    return await this.clientModel.create({ id: uuidv4(), ...client });
  }

  async findOne(key: ClientKey): Promise<Client> {
    const client = await this.clientModel.get(key);

    if (!client) {
      throw new NotFoundException('Cliente no encontrado.');
    }
    return client;
  }

  async findAll(): Promise<Client[]> {
    return await this.clientModel.scan().exec();
  }

  async update(key: ClientKey, data: ClientUpdateDTO): Promise<Client> {
    const client = await this.findOne(key);

    return await this.clientModel.update({ ...client, ...data });
  }

  async delete(key: ClientKey): Promise<string> {
    await this.findOne(key);
    await this.clientModel.delete(key);

    return 'Cliente eliminado.';
  }
}
