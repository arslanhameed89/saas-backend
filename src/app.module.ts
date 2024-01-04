import 'reflect-metadata';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TenantsModule } from './modules/tenants/tenants.module';
import { DatabaseModule } from './core/database/database.module';
import * as ormConfig from './orm.config';
import { UserModule } from './modules/users/user.module';
import { GraphQLModule } from '@nestjs/graphql';
import { GraphQLFormatErrorFactory } from './core/errors/graphql.format.error.factory';
import { GraphQLFormatResponseFactory } from './core/errors/graphql.format.response.factory';
import { ConfigModule } from '@nestjs/config';
import configuration from './core/env/configuration';


@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration],
    }),
    TypeOrmModule.forRoot(ormConfig),
    GraphQLModule.forRoot({
      autoSchemaFile: true,
      sortSchema: true,
      formatError: GraphQLFormatErrorFactory,
      formatResponse: GraphQLFormatResponseFactory
    }),
    TenantsModule,
    DatabaseModule,
    UserModule,
  ],
})
export class AppModule {}
