import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateUserTable1704366348023 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "users",
            columns: [
                { name: "id", type: "uuid", isPrimary: true, default: "uuid_generate_v4()" },
                { name: "name", type: "varchar" },
                { name: "email", type: "varchar" },
                { name: "created_at", type: "timestamp without time zone", default: "CURRENT_TIMESTAMP" },
                { name: "updated_at", type: "timestamp without time zone", default: "CURRENT_TIMESTAMP", onUpdate: "CURRENT_TIMESTAMP" },
            ],
        }), true);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("users");
    }

}