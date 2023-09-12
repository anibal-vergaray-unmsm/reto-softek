import { ApiProperty } from '@nestjs/swagger';
import { IsIn, IsNotEmpty, IsNumberString, IsString } from 'class-validator';

export class SwapiGetDTO {
  @ApiProperty()
  @IsNotEmpty()
  @IsIn(['planets', 'species', 'vehicles', 'starships', 'films', 'people'])
  @IsString()
  path: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsNumberString()
  id: number;
}
