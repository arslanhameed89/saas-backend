"use strict";
exports.__esModule = true;
var snake_naming_strategy_1 = require("./snake-naming.strategy");
var path_1 = require("path");
module.exports = {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'postgres',
    database: 'nestjs-multi-tenant',
    namingStrategy: new snake_naming_strategy_1.SnakeNamingStrategy(),
    logging: true,
    autoLoadEntities: true,
    entities: [path_1.join(__dirname, './modules/tenants/*.entity{.ts,.js}')],
    migrations: [path_1.join(__dirname, './migrations/public/*{.ts,.js}')]
};
