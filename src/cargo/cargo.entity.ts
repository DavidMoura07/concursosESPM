import { Entity, Column, OneToMany, ManyToOne, JoinColumn } from 'typeorm';
import { Area } from '../concurso/entities/area.entity';

@Entity('cargo', { schema: 'public' })
export class Cargo {
  @Column('integer', {
    nullable: false,
    primary: true,
    name: 'cargoid',
  })
  cargoid: number;

  @ManyToOne(() => Area, area => area.cargos, { eager: true })
  @JoinColumn({ name: 'areaid' })
  area: Area | null;

  @Column('character varying', {
    nullable: true,
    length: 2000,
    name: 'nome',
  })
  nome: string | null;

  @Column('character varying', {
    nullable: true,
    length: 500,
    name: 'descricao',
  })
  descricao: string | null;

  @Column('numeric', {
    nullable: true,
    precision: 8,
    scale: 2,
    name: 'pontuacaomaxtitulo',
  })
  pontuacaomaxtitulo: string | null;

  @Column('numeric', {
    nullable: true,
    precision: 8,
    scale: 2,
    name: 'pontuacaomaxexperiencia',
  })
  pontuacaomaxexperiencia: string | null;

  @Column('numeric', {
    nullable: true,
    precision: 8,
    scale: 2,
    name: 'pontuacaomaxexperienciaimportada',
  })
  pontuacaomaxexperienciaimportada: string | null;

  @Column('character varying', {
    nullable: true,
    length: 1000,
    name: 'textopontuacaoimportada',
  })
  textopontuacaoimportada: string | null;

  @Column('character varying', {
    nullable: true,
    length: 1000,
    name: 'textopontuacaoassiduidade',
  })
  textopontuacaoassiduidade: string | null;
}
