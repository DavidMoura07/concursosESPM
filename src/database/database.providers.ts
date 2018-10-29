import { createConnection } from 'typeorm';

export const databaseProviders = [
  {
    provide: 'DbConnectionToken',
    useFactory: async () =>
      await createConnection({
        type: 'mysql',
        host: 'br858.hostgator.com.br',
        port: 3306,
        username: 'davidmou_prodest',
        password: 'prodest.123',
        database: 'davidmou_concursosESPM',
        entities: [__dirname + '/../**/*.entity{.ts,.js}'],
        synchronize: false,
      }),
  },
];
