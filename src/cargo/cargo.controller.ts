import { Controller, Get, Param } from '@nestjs/common';
import { CargoService } from './cargo.service';

@Controller('cargos')
export class CargoController {
  constructor(private readonly cargoService: CargoService) {}

  @Get(':concursoid')
  findAll(@Param() params) {
    return this.cargoService.findByConcursoId(params.concursoid);
  }
}
