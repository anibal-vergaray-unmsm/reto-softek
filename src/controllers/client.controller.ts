import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { ClientService } from '../services/client.service';
import { Client } from 'src/schemas/client.schema';
import { ClientCreateDTO } from 'src/dtos/client/client.create.dto';
import { ClientIdentityDTO } from 'src/dtos/client/client.identity.dto';
import { ClientUpdateDTO } from 'src/dtos/client/client.update.dto';
import {
  ApiCreatedResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiTags,
} from '@nestjs/swagger';

@ApiTags('Clients')
@Controller('clients')
export class ClientController {
  constructor(private readonly clientService: ClientService) {}

  @Get()
  @ApiOkResponse({
    description: 'The records were obtained.',
    type: [Client],
  })
  async getAll(): Promise<Client[]> {
    return this.clientService.findAll();
  }

  @Get('/:id')
  @ApiOkResponse({
    description: 'The record was obtained.',
    type: Client,
  })
  @ApiNotFoundResponse({
    description: 'Client was not found',
  })
  async getById(@Param() params: ClientIdentityDTO): Promise<Client> {
    return this.clientService.findOne(params);
  }

  @Post()
  @ApiCreatedResponse({
    description: 'The record has been successfully created.',
    type: Client,
  })
  async create(@Body() body: ClientCreateDTO): Promise<Client> {
    return this.clientService.create(body);
  }

  @Put('/:id')
  @ApiOkResponse({
    description: 'The record has been successfully updated.',
    type: Client,
  })
  async update(
    @Param() params: ClientIdentityDTO,
    @Body() body: ClientUpdateDTO,
  ): Promise<Client> {
    return this.clientService.update(params, body);
  }

  @Delete('/:id')
  @ApiOkResponse({
    description: 'The record has been successfully removed.',
    type: 'Cliente eliminado.',
  })
  async delete(@Param() params: ClientIdentityDTO): Promise<string> {
    return this.clientService.delete(params);
  }
}
