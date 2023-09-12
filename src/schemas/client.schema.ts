import { AutoMap } from '@automapper/classes';
import { ApiProperty } from '@nestjs/swagger';
import { Schema } from 'dynamoose';

export class ClientKey {
  @ApiProperty()
  id: string;
}

export class Client extends ClientKey {
  @ApiProperty()
  @AutoMap()
  nombre: string;

  @ApiProperty()
  @AutoMap()
  edad: number;

  @ApiProperty()
  @AutoMap()
  genero?: string;

  @ApiProperty()
  @AutoMap()
  correo?: string;
}

export const ClientSchema = new Schema({
  id: { type: String, hashKey: true },
  nombre: { type: String },
  edad: { type: Number },
  genero: { type: String },
  correo: { type: String },
});
