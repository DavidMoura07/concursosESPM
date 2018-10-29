import { Entity, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Concurso } from './concurso.entity';

@Entity('arquivo', { schema: 'public' })
export class Arquivo {
  @Column('integer', {
    nullable: false,
    primary: true,
    name: 'arquivoid',
  })
  arquivoid: number;

  @Column('character varying', {
    nullable: true,
    length: 400,
    name: 'nomearquivo',
  })
  nomearquivo: string | null;

  @Column('character varying', {
    nullable: true,
    length: 100,
    name: 'content_type',
  })
  content_type: string | null;

  @Column('timestamp without time zone', {
    nullable: true,
    name: 'dataupload',
  })
  dataupload: Date | null;

  @ManyToOne(() => Concurso, concurso => concurso.arquivos, {})
  @JoinColumn({ name: 'concursoid' })
  concurso: Concurso | null;

  @Column('boolean', {
    nullable: true,
    name: 'exibir',
  })
  exibir: boolean | null;

  @Column('character varying', {
    nullable: true,
    length: 5,
    name: 'extensao',
  })
  extensao: string | null;

  @Column('integer', {
    nullable: true,
    name: 'acessos',
  })
  acessos: number | null;
}
