"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
exports.__esModule = true;
exports.TenantsController = void 0;
var common_1 = require("@nestjs/common");
var TenantsController = /** @class */ (function () {
    function TenantsController(tenantsService) {
        this.tenantsService = tenantsService;
    }
    TenantsController.prototype.create = function (createTenantDto) {
        return this.tenantsService.create(createTenantDto);
    };
    TenantsController.prototype.findAll = function () {
        return this.tenantsService.findAll();
    };
    __decorate([
        common_1.Post(),
        __param(0, common_1.Body())
    ], TenantsController.prototype, "create");
    __decorate([
        common_1.Get()
    ], TenantsController.prototype, "findAll");
    TenantsController = __decorate([
        common_1.Controller('tenants')
    ], TenantsController);
    return TenantsController;
}());
exports.TenantsController = TenantsController;
