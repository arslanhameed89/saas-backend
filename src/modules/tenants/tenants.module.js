"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.TenantsModule = void 0;
var common_1 = require("@nestjs/common");
var typeorm_1 = require("@nestjs/typeorm");
var tenant_entity_1 = require("./entities/tenant.entity");
var tenants_controller_1 = require("./controllers/tenants.controller");
var tenants_service_1 = require("./services/tenants.service");
var TenantsModule = /** @class */ (function () {
    function TenantsModule() {
    }
    TenantsModule = __decorate([
        common_1.Module({
            imports: [typeorm_1.TypeOrmModule.forFeature([tenant_entity_1.Tenant])],
            providers: [tenants_service_1.TenantsService],
            controllers: [tenants_controller_1.TenantsController]
        })
    ], TenantsModule);
    return TenantsModule;
}());
exports.TenantsModule = TenantsModule;
