import {
  Entity,
  Column,
  OneToMany,
  ManyToOne,
  JoinColumn,
  JoinTable,
} from 'typeorm';
import { Concurso } from './concurso.entity';
import { Cargo } from '../../cargo/cargo.entity';

@Entity('area', { schema: 'public' })
export class Area {
  @Column('integer', {
    nullable: false,
    primary: true,
    name: 'areaid',
  })
  areaid: number;

  @Column('varchar', {
    nullable: true,
    length: 250,
    name: 'nome',
  })
  nome: string | null;

  @Column('varchar', {
    nullable: true,
    length: 500,
    name: 'descricao',
  })
  descricao: string | null;

  @ManyToOne(() => Area, area => area.areas, {})
  @JoinColumn({ name: 'areaidsuperior' })
  areaidsuperior: Area | null;

  @ManyToOne(() => Concurso, concurso => concurso.areas, {})
  @JoinColumn({ name: 'concursoid' })
  concurso: Concurso | null;

  @Column('tinyint', {
    nullable: true,
    name: 'ocultarcandidato',
  })
  ocultarcandidato: boolean | null;

  @OneToMany(() => Area, area => area.areaidsuperior)
  areas: Area[];

  @OneToMany(() => Cargo, cargo => cargo.area, {})
  cargos: Cargo[];
}
