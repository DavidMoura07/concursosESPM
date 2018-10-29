import { Entity, Column, OneToMany, PrimaryColumn, JoinTable } from 'typeorm';
import { Arquivo } from './arquivo.entity';
import { Area } from './area.entity';

@Entity('concurso', { schema: 'public' })
export class Concurso {
  @PrimaryColumn('integer', {
    nullable: false,
    primary: true,
    name: 'concursoid',
  })
  concursoid: number;

  @Column('varchar', {
    nullable: true,
    length: 250,
    name: 'nome',
  })
  nome: string | null;

  @Column('varchar', {
    nullable: true,
    length: 1500,
    name: 'descricao',
  })
  descricao: string | null;

  @Column('datetime', {
    nullable: true,
    name: 'datainiciodivulgacao',
  })
  datainiciodivulgacao: Date | null;

  @Column('datetime', {
    nullable: true,
    name: 'datafimdivulgacao',
  })
  datafimdivulgacao: Date | null;

  @Column('datetime', {
    nullable: true,
    name: 'datainicioinscricao',
  })
  datainicioinscricao: Date | null;

  @Column('datetime', {
    nullable: true,
    name: 'datafiminscricao',
  })
  datafiminscricao: Date | null;

  @Column('datetime', {
    nullable: true,
    name: 'horainicioinscricao',
  })
  horainicioinscricao: Date | null;

  @Column('datetime', {
    nullable: true,
    name: 'horafiminscricao',
  })
  horafiminscricao: Date | null;

  @Column('tinyint', {
    nullable: true,
    name: 'liberarvisualizacao',
  })
  liberarvisualizacao: boolean | null;

  @Column('integer', {
    nullable: true,
    name: 'limiteinscricaoconcurso',
  })
  limiteinscricaoconcurso: number | null;

  @Column('integer', {
    nullable: true,
    name: 'limiteinscricoesarea',
  })
  limiteinscricoesarea: number | null;

  @Column('integer', {
    nullable: true,
    name: 'acessos',
  })
  acessos: number | null;

  @Column('integer', {
    nullable: true,
    name: 'interesse',
  })
  interesse: number | null;

  @Column('tinyint', {
    nullable: true,
    name: 'resultadopublicado',
  })
  resultadopublicado: boolean | null;

  @Column('datetime', {
    nullable: true,
    name: 'datafimvigencia',
  })
  datafimvigencia: Date | null;

  @Column('tinyint', {
    nullable: true,
    name: 'experienciasiahres',
  })
  experienciasiahres: boolean | null;

  @Column('integer', {
    nullable: true,
    name: 'subempresa',
  })
  subempresa: number | null;

  @Column('datetime', {
    nullable: true,
    name: 'datainiciosiahres',
  })
  datainiciosiahres: Date | null;

  @Column('datetime', {
    nullable: true,
    name: 'datafimsiahres',
  })
  datafimsiahres: Date | null;

  @Column('numeric', {
    nullable: true,
    precision: 8,
    scale: 2,
    name: 'pontuacaotecnica',
  })
  pontuacaotecnica: string | null;

  @Column('numeric', {
    nullable: true,
    precision: 8,
    scale: 2,
    name: 'pontuacaonaotecnica',
  })
  pontuacaonaotecnica: string | null;

  @Column('varchar', {
    nullable: true,
    length: 11,
    name: 'telefonecontato',
  })
  telefonecontato: string | null;

  @Column('tinyint', {
    nullable: true,
    name: 'ocultarpontuacao',
  })
  ocultarpontuacao: boolean | null;

  @Column('tinyint', {
    nullable: true,
    name: 'etapaprova',
  })
  etapaprova: boolean | null;

  @Column('datetime', {
    nullable: true,
    name: 'datainicioisencao',
  })
  datainicioisencao: Date | null;

  @Column('datetime', {
    nullable: true,
    name: 'datafimisencao',
  })
  datafimisencao: Date | null;

  @Column('datetime', {
    nullable: true,
    name: 'horainicioisencao',
  })
  horainicioisencao: Date | null;

  @Column('datetime', {
    nullable: true,
    name: 'horafimisencao',
  })
  horafimisencao: Date | null;

  @Column('datetime', {
    nullable: true,
    name: 'datainiciocancelamento',
  })
  datainiciocancelamento: Date | null;

  @Column('datetime', {
    nullable: true,
    name: 'datafimcancelamento',
  })
  datafimcancelamento: Date | null;

  @Column('datetime', {
    nullable: true,
    name: 'horainiciocancelamento',
  })
  horainiciocancelamento: Date | null;

  @Column('datetime', {
    nullable: true,
    name: 'horafimcancelamento',
  })
  horafimcancelamento: Date | null;

  @Column('text', {
    nullable: true,
    name: 'mensagemcancelamento',
  })
  mensagemcancelamento: string | null;

  @Column('tinyint', {
    nullable: true,
    name: 'selecaoefetivo',
  })
  selecaoefetivo: boolean | null;

  @Column('varchar', {
    nullable: true,
    length: 100,
    name: 'emailcontato',
  })
  emailcontato: string | null;

  @Column('tinyint', {
    nullable: true,
    name: 'ocultarquestionamento',
  })
  ocultarquestionamento: boolean | null;

  @Column('tinyint', {
    nullable: true,
    name: 'liberarclassificacao',
  })
  liberarclassificacao: boolean | null;

  @Column('tinyint', {
    nullable: true,
    name: 'liberarexclusaoinscricao',
  })
  liberarexclusaoinscricao: boolean | null;

  @OneToMany(() => Area, area => area.concurso, { eager: true })
  @JoinTable()
  areas: Area[];

  @OneToMany(() => Arquivo, arquivo => arquivo.concurso, { eager: true })
  @JoinTable()
  arquivos: Arquivo[];
}
