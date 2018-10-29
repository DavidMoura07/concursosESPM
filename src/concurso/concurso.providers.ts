import { Connection, Repository } from 'typeorm';
import { Concurso } from './entities/concurso.entity';

export const concursoProviders = [
  {
    provide: 'ConcursoRepositoryToken',
    useFactory: (connection: Connection) => connection.getRepository(Concurso),
    inject: ['DbConnectionToken'],
  },
];
