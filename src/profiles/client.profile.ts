import { AutomapperProfile, InjectMapper } from '@automapper/nestjs';
import { createMap, Mapper } from '@automapper/core';
import { Injectable } from '@nestjs/common';
import { ClientCreateDTO } from 'src/dtos/client/client.create.dto';
import { Client } from 'src/schemas/client.schema';
import { ClientUpdateDTO } from 'src/dtos/client/client.update.dto';

@Injectable()
export class ClientProfile extends AutomapperProfile {
  constructor(@InjectMapper() mapper: Mapper) {
    super(mapper);
  }

  override get profile() {
    return (mapper) => {
      createMap(mapper, ClientCreateDTO, Client);
      createMap(mapper, ClientUpdateDTO, Client);
    };
  }
}
