import { Connection, Repository } from 'typeorm';
import { Cargo } from './cargo.entity';

export const cargoProviders = [
  {
    provide: 'CargoRepositoryToken',
    useFactory: (connection: Connection) => connection.getRepository(Cargo),
    inject: ['DbConnectionToken'],
  },
];
