export class LinkDto {
  constructor(rel: string, method: string, href: string) {
    this.rel = rel;
    this.method = method;
    this.href = href;
  }
  readonly rel: string;
  readonly method: string;
  readonly href: string;
}
