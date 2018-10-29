export class DataDto {
  constructor(nome, inicio, fim) {
    this.nome = nome;
    this.inicio = inicio;
    this.fim = fim;
  }
  readonly nome: string;
  readonly inicio: Date;
  readonly fim: Date;
}
