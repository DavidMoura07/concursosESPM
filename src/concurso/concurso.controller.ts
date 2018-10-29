import { Controller, Get, Param } from '@nestjs/common';
import { ConcursoService } from './concurso.service';

@Controller('concursos')
export class ConcursoController {
  constructor(private readonly concursoService: ConcursoService) {}

  @Get('/search/:pag')
  async findAll(@Param() params) {
    console.log('entrei');
    const concursos = await this.concursoService.findAll(params.pag - 1);
    return await this.concursoService.makeArrayDto(concursos);
  }

  @Get(':id')
  async findOne(@Param() params) {
    const concurso = await this.concursoService.findOne(params.id);
    return await this.concursoService.makeDto(concurso);
  }

  @Get(':id/datas')
  async returnDatas(@Param() params) {
    const concurso = await this.concursoService.findOne(params.id);
    return await this.concursoService.makeDataDto(concurso);
  }

  @Get(':id/anexos')
  async returnAnexos(@Param() params) {
    const concurso = await this.concursoService.findOne(params.id);
    return await this.concursoService.makeArquivoDto(concurso);
  }
}
