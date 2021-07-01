import { MysqlConnectionOptions } from 'typeorm/driver/mysql/MysqlConnectionOptions';

const jwt = '';
const config: MysqlConnectionOptions = {
  type: 'mysql',
  database: 'db_library',
  host: 'localhost',
  port: 3306,
  password: 'Bismillah',
  username: 'root',
  entities: ['dist/src/**/*.entity.js'],
  synchronize: true,
  migrations: ['dist/src/db/migrations/*.js'],
  cli: {
    migrationsDir: 'src/db/migrations',
  },
};

export default { config, jwt };
