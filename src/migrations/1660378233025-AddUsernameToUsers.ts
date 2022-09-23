import {MigrationInterface, QueryRunner} from "typeorm";

export class AddUsernameToUsers1660378233025 implements MigrationInterface {
    name = 'AddUsernameToUsers1660378233025'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ADD "username" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "username"`);
    }

}
