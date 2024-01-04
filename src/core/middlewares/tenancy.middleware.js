"use strict";
exports.__esModule = true;
exports.tenancyMiddleware = void 0;
var lodash_1 = require("lodash");
var TENANT_HEADER = 'x-tenant-id';
function tenancyMiddleware(req, _res, next) {
    var header = req.headers[TENANT_HEADER];
    if (req.originalUrl.includes('tenants')) {
        // Skip middleware for routes containing 'tenants'
        return next();
    }
    if (lodash_1.isEmpty(header)) {
        //throw new HttpException('x-tenant-id should not be empty', HttpStatus.FORBIDDEN)
    }
    req.tenantId = (header === null || header === void 0 ? void 0 : header.toString()) || null;
    global.CURRENT_TENANT_ID = (header === null || header === void 0 ? void 0 : header.toString()) || null;
    next();
}
exports.tenancyMiddleware = tenancyMiddleware;
