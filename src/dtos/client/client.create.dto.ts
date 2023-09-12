import { AutoMap } from '@automapper/classes';
import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsIn, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class ClientCreateDTO {
  @ApiProperty()
  @AutoMap()
  @IsString()
  @IsNotEmpty()
  readonly nombre: string;

  @ApiProperty()
  @AutoMap()
  @IsNumber()
  @IsNotEmpty()
  readonly edad: number;

  @ApiProperty()
  @AutoMap()
  @IsIn(['F', 'M'])
  @IsNotEmpty()
  readonly genero: string;

  @ApiProperty()
  @AutoMap()
  @IsEmail()
  @IsString()
  @IsNotEmpty()
  readonly correo: string;
}
