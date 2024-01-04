var join = require('path').join;
console.log(join(__dirname, 'src', '**/*.typeorm.entity.{ts,js}'), 'join(__dirname, \'./migrations/tenanted/*{.ts,.js}\')join(__dirname, \'./migrations/tenanted/*{.ts,.js}\')');
//const entities = [join(__dirname, 'src', '**/*.typeorm.entity.{ts,js}')];
module.exports = {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'postgres',
    database: 'nestjs-multi-tenant',
    //namingStrategy: new SnakeNamingStrategy(),
    logging: true,
    autoLoadEntities: true,
    entities: [join(__dirname, './modules/*/*.entity{.ts,.js}')],
    migrations: [join(__dirname, './migrations/tenanted/*{.ts,.js}')]
};
