import { Global, Module } from '@nestjs/common';
import { CONNECTION } from './database.symbols';
import { databaseProviders } from './database.provider';


@Global()
@Module({
  providers: [databaseProviders],
  exports: [CONNECTION],
})
export class DatabaseModule {}
