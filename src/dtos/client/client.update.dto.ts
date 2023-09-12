import { IsEmail, IsIn, IsNumber, IsOptional, IsString } from 'class-validator';
import { AutoMap } from '@automapper/classes';
import { ApiPropertyOptional } from '@nestjs/swagger';

export class ClientUpdateDTO {
  @ApiPropertyOptional()
  @AutoMap()
  @IsString()
  @IsOptional()
  readonly nombre: string;

  @ApiPropertyOptional()
  @AutoMap()
  @IsNumber()
  @IsOptional()
  readonly edad: number;

  @ApiPropertyOptional()
  @AutoMap()
  @IsIn(['F', 'M'])
  @IsOptional()
  readonly genero: string;

  @ApiPropertyOptional()
  @AutoMap()
  @IsEmail()
  @IsString()
  @IsOptional()
  readonly correo: string;
}
