import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Cargo } from './cargo.entity';
import { Concurso } from '../concurso/entities/concurso.entity';

@Injectable()
export class CargoService {
  constructor(
    @Inject('CargoRepositoryToken')
    private readonly cargoRepository: Repository<Cargo>,
  ) {}

  findByConcursoId(concursoid) {
    return this.cargoRepository
      .createQueryBuilder('cargo')
      .innerJoin('cargo.area', 'area', 'cargo.areaid = area.areaid')
      .innerJoin(Concurso, 'concurso', 'concurso.concursoid = area.concursoid')
      .where('concurso.concursoid = :id', { id: concursoid })
      .select('DISTINCT cargo.nome')
      .getRawMany()
      .then(cargos => {
        const arrayCargo: string[] = new Array();
        cargos.forEach(cargo => {
          arrayCargo.push(cargo.nome);
        });
        return arrayCargo;
      });
  }
}
