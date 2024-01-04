"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppModule = void 0;
require("reflect-metadata");
var common_1 = require("@nestjs/common");
var typeorm_1 = require("@nestjs/typeorm");
var tenants_module_1 = require("./modules/tenants/tenants.module");
var database_module_1 = require("./core/database/database.module");
var cats_module_1 = require("./modules/cats/cats.module");
var ormConfig = require("./orm.config");
var user_module_1 = require("./modules/users/user.module");
var graphql_1 = require("@nestjs/graphql");
var graphql_format_error_factory_1 = require("./core/errors/graphql.format.error.factory");
var graphql_format_response_factory_1 = require("./core/errors/graphql.format.response.factory");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        common_1.Module({
            imports: [
                typeorm_1.TypeOrmModule.forRoot(ormConfig),
                graphql_1.GraphQLModule.forRoot({
                    autoSchemaFile: true,
                    sortSchema: true,
                    formatError: graphql_format_error_factory_1.GraphQLFormatErrorFactory,
                    formatResponse: graphql_format_response_factory_1.GraphQLFormatResponseFactory
                }),
                tenants_module_1.TenantsModule,
                database_module_1.DatabaseModule,
                cats_module_1.CatsModule,
                user_module_1.UserModule,
            ]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
