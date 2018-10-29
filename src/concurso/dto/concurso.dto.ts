import { DataDto } from './data.dto';
import { EntityDto } from './entity.dto';
import { LinkDto } from './link.dto';
export class ConcursoDto extends EntityDto {
  constructor(id: number, status: string, nome: string) {
    super();
    this.id = id;
    this.status = status;
    this.nome = nome;
    this.init();
  }

  private init() {
    const self = new LinkDto(
      'self',
      'GET',
      'http://localhost:3000/concursos/' + this.id,
    );
    const datas = new LinkDto(
      'datas',
      'GET',
      'http://localhost:3000/concursos/' + this.id + '/datas',
    );
    const cargos = new LinkDto(
      'cargos',
      'GET',
      'http://localhost:3000/cargos/' + this.id,
    );
    const anexos = new LinkDto(
      'anexos',
      'GET',
      'http://localhost:3000/concursos/' + this.id + '/anexos',
    );
    this.action.push(self);
    this.action.push(datas);
    this.action.push(cargos);
    this.action.push(anexos);
  }

  readonly id: number;
  readonly status: string;
  readonly nome: string;
}
