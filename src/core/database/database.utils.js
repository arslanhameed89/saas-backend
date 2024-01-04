"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
exports.getTenantConnection = void 0;
var typeorm_1 = require("typeorm");
var tenantsOrmConfig = require("../../tenants-orm.config");
function getTenantConnection(tenantId) {
    var connectionName = "tenant_" + tenantId;
    var connectionManager = typeorm_1.getConnectionManager();
    if (connectionManager.has(connectionName)) {
        var connection = connectionManager.get(connectionName);
        return Promise.resolve(connection.isConnected ? connection : connection.connect());
    }
    return typeorm_1.createConnection(__assign(__assign({}, tenantsOrmConfig), { name: connectionName, schema: connectionName }));
}
exports.getTenantConnection = getTenantConnection;
