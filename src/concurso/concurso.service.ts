import { Injectable, Inject } from '@nestjs/common';
import { Repository, getRepository } from 'typeorm';
import { Concurso } from './entities/concurso.entity';
import { ConcursoDto } from './dto/concurso.dto';
import { DataDto } from './dto/data.dto';
import { LinkDto } from './dto/link.dto';

@Injectable()
export class ConcursoService {
  constructor(
    @Inject('ConcursoRepositoryToken')
    private readonly concursoRepository: Repository<Concurso>,
  ) {}

  // busca todos os concursos com paginação de 10 em 10
  async findAll(pag: number): Promise<Concurso[]> {
    return await this.concursoRepository
      .createQueryBuilder('concurso')
      .innerJoin(
        'concurso.arquivos',
        'arquivo',
        'concurso.concursoid = arquivo.concursoid',
      )
      .select([
        'concurso.concursoid',
        'concurso.nome',
        'concurso.datainicioinscricao',
        'concurso.datafiminscricao',
        'concurso.liberarvisualizacao',
        'concurso.datafimvigencia',
        'concurso.datainiciosiahres',
        'concurso.datafimsiahres',
        'concurso.datainicioisencao',
        'concurso.datafimisencao',
        'arquivo.arquivoid',
        'arquivo.nomearquivo',
        'arquivo.exibir',
      ])
      .skip(pag * 10)
      .take(10)
      .getMany();
  }

  // define o status de um concurso
  setStatus(
    dataFimVigencia: Date,
    dataFimInscricao: Date,
    dataInicioInscricao: Date,
  ) {
    if (dataFimVigencia && dataFimVigencia.getTime() < Date.now()) {
      return 'encerrado';
    } else if (dataFimInscricao && dataFimInscricao.getTime() < Date.now()) {
      return 'vigencia';
    } else if (
      dataInicioInscricao &&
      dataInicioInscricao.getTime() >= Date.now()
    ) {
      return 'aberto';
    } else {
      return 'previsto';
    }
  }

  // recebe uma lista de concursos, converte cada um no padrao dto e gera uma nova lista
  makeArrayDto(concursos) {
    const arrayConcursoDto: ConcursoDto[] = new Array();
    concursos.forEach(concurso => {
      if (concurso.liberarvisualizacao) {
        const concursoDto: ConcursoDto = this.makeDto(concurso);
        arrayConcursoDto.push(concursoDto);
      }
    });
    return arrayConcursoDto;
  }

  // recebe um unico concurso e gera seu dto
  makeDto(concurso) {
    const status = this.setStatus(
      concurso.datafimvigencia,
      concurso.datafiminscricao,
      concurso.datainicioinscricao,
    );

    const concursoDto: ConcursoDto = new ConcursoDto(
      concurso.concursoid,
      status,
      concurso.nome,
    );

    return concursoDto;
  }

  // gera uma lista de datas no padrao dto
  makeDataDto(concurso) {
    const inscricaoDataDto: DataDto = new DataDto(
      'inscricao',
      concurso.datainicioinscricao,
      concurso.datafiminscricao,
    );
    const insencaoDataDto: DataDto = new DataDto(
      'insencao',
      concurso.datainicioisencao,
      concurso.datafimisencao,
    );
    const siahresDataDto: DataDto = new DataDto(
      'siahres',
      concurso.datainiciosiahres,
      concurso.datafimsiahres,
    );
    const vigenciaDataDto: DataDto = new DataDto(
      'vigencia',
      null,
      concurso.datafimvigencia,
    );
    const arrayDataDto: DataDto[] = new Array();
    arrayDataDto.push(
      inscricaoDataDto,
      insencaoDataDto,
      siahresDataDto,
      vigenciaDataDto,
    );
    return arrayDataDto;
  }

  makeOneArquivoDto(arquivo) {
    const url =
      'https://selecao.es.gov.br/novo/Arquivo/Download/' + arquivo.arquivoid;
    const arquivoDto: LinkDto = new LinkDto(arquivo.nomearquivo, 'GET', url);
    return arquivoDto;
  }

  makeArquivoDto(concurso) {
    const arquivos = concurso.arquivos;
    const arrayArquivoDto: LinkDto[] = new Array();
    arquivos.forEach(arquivo => {
      if (arquivo.exibir) {
        const arquivoDto: LinkDto = this.makeOneArquivoDto(arquivo);
        arrayArquivoDto.push(arquivoDto);
      }
    });
    return arrayArquivoDto;
  }

  async findOne(id: number) {
    return await this.concursoRepository
      .createQueryBuilder('concurso')
      .innerJoin(
        'concurso.arquivos',
        'arquivo',
        'concurso.concursoid = arquivo.concursoid',
      )
      .select([
        'concurso.concursoid',
        'concurso.nome',
        'concurso.datainicioinscricao',
        'concurso.datafiminscricao',
        'concurso.liberarvisualizacao',
        'concurso.datafimvigencia',
        'concurso.datainiciosiahres',
        'concurso.datafimsiahres',
        'concurso.datainicioisencao',
        'concurso.datafimisencao',
        'arquivo.arquivoid',
        'arquivo.nomearquivo',
        'arquivo.exibir',
      ])
      .where('concurso.concursoid = :idConcurso', { idConcurso: id })
      .getOne();
  }
}
