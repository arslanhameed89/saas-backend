"use strict";
exports.__esModule = true;
exports.databaseProviders = void 0;
var database_symbols_1 = require("./database.symbols");
var common_1 = require("@nestjs/common");
var database_utils_1 = require("./database.utils");
var core_1 = require("@nestjs/core");
exports.databaseProviders = {
    provide: database_symbols_1.CONNECTION,
    scope: common_1.Scope.REQUEST,
    useFactory: function (request) {
        var tenantId = request.tenantId;
        var tenantIdentification = tenantId !== null && tenantId !== void 0 ? tenantId : global.CURRENT_TENANT_ID;
        if (tenantIdentification) {
            return database_utils_1.getTenantConnection(tenantIdentification);
        }
        return null;
    },
    inject: [core_1.REQUEST]
};
