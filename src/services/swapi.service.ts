import { HttpService } from '@nestjs/axios';
import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { map, catchError } from 'rxjs/operators';
import { lastValueFrom } from 'rxjs';
import { Translate } from 'src/decorators/Translate.decorator';
import { SwapiGetDTO } from 'src/dtos/swapi/swapi.get';

@Injectable()
export class SwapiService {
  constructor(
    private readonly httpService: HttpService,
    private configService: ConfigService,
  ) {}

  @Translate()
  async findOne(params: SwapiGetDTO): Promise<any> {
    const url = `${this.configService.get<string>('SWAPI_URL')}/${
      params.path
    }/${params.id}`;
    const request = this.httpService
      .get(url)
      .pipe(map((res) => res.data))
      .pipe(
        catchError((e) => {
          throw new InternalServerErrorException(
            `Error en SWAPI: ${e.message}`,
          );
        }),
      );

    const data = await lastValueFrom(request);
    console.info(data);

    return data;
  }
}
