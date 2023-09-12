import { Controller, Get, Param } from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { SwapiGetDTO } from 'src/dtos/swapi/swapi.get';
import { SwapiService } from 'src/services/swapi.service';

@ApiTags('Swapi')
@Controller('swapi')
export class SwapiController {
  constructor(private readonly swapiService: SwapiService) {}

  @Get('/:path/:id')
  @ApiOkResponse({
    description: 'The record was obtained.',
    type: Object,
  })
  async getById(@Param() params: SwapiGetDTO): Promise<any> {
    return this.swapiService.findOne(params);
  }
}
