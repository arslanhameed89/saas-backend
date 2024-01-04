import { NextFunction, Request, Response } from 'express';
import { HttpException, HttpStatus } from '@nestjs/common';
import { isEmpty } from 'lodash';
const TENANT_HEADER = 'x-tenant-id'

export function tenancyMiddleware(req: Request, _res: Response, next: NextFunction): void {
  const header = req.headers[TENANT_HEADER] as string;

  const valuesToCheck = ['tenants']
  if (valuesToCheck.some(value => req.originalUrl.includes(value))) {
    // Skip middleware for routes containing 'tenants'
    return next();
  }

  if (isEmpty(header)) {
    throw new HttpException('x-tenant-id should not be empty', HttpStatus.FORBIDDEN)
  }
  req.tenantId = header?.toString() || null;
  global.CURRENT_TENANT_ID = header?.toString() || null;

  next();
}
