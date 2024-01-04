import { appConfig } from './src/core/env/configuration';

const join = require('path').join;

module.exports = {
  type: 'postgres',
  url: appConfig.pg.url,
  logging: true,
  autoLoadEntities: true,
  entities: [join(__dirname, './modules/*/*.entity{.ts,.js}')],
  migrations: [join(__dirname, './migrations/tenanted/*{.ts,.js}')],
};