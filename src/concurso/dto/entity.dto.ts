import { LinkDto } from './link.dto';
export class EntityDto {
  self: LinkDto;
  action: LinkDto[] = new Array<LinkDto>();
}
