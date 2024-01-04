import { SnakeNamingStrategy } from './snake-naming.strategy';

import { join } from 'path';
import { appConfig } from './core/env/configuration';

module.exports = {
  type: 'postgres',
  url: appConfig.pg.url,
  namingStrategy: new SnakeNamingStrategy(),
  logging: true,
  autoLoadEntities: true,
  entities: [join(__dirname, './modules/tenants/*.entity{.ts,.js}')],
  migrations: [join(__dirname, './migrations/public/*{.ts,.js}')],
};