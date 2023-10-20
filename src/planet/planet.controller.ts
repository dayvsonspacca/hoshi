import { Controller, Get, HttpStatus, Param, Res } from '@nestjs/common';
import { ApiOkResponse, ApiNotFoundResponse, ApiTags } from '@nestjs/swagger';
import { PlanetDto } from './dtos/planet.dto';
import { PlanetService } from './planet.service';
import { Response } from 'express';

@Controller('planet')
@ApiTags('planet')
export class PlanetController {
  constructor(private planetService: PlanetService) {}

  @Get(':planet_name')
  @ApiOkResponse({
    status: 200,
    description: 'The found planet.',
    type: PlanetDto,
  })
  @ApiNotFoundResponse({
    status: 404,
    description: 'Planet {planet_name} not found.',
  })
  async getPlanet(
    @Param() { planet_name }: { planet_name: string },
    @Res() response: Response,
  ) {
    const planet = await this.planetService.getPlanet(planet_name);

    if (planet) {
      return response.status(HttpStatus.OK).json(planet);
    }

    return response
      .status(HttpStatus.NOT_FOUND)
      .json({
        message: `Planet {${planet_name}} not found.`,
        statusCode: HttpStatus.NOT_FOUND,
      });
  }
}
