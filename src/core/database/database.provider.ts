import { CONNECTION } from './database.symbols';
import { Scope } from '@nestjs/common';
import { Request as ExpressRequest } from 'express';
import { getTenantConnection } from './database.utils';
import { REQUEST } from '@nestjs/core'
import { ConfigModule } from '@nestjs/config';

export const databaseProviders = {
    provide: CONNECTION,
    scope: Scope.REQUEST,
    useFactory: (request: ExpressRequest) => {
        const { tenantId } = request;
        const tenantIdentification = tenantId ?? global.CURRENT_TENANT_ID;

        if (tenantIdentification) {
            return getTenantConnection(tenantIdentification);
        }

        return null;
    },
    inject: [REQUEST],
};