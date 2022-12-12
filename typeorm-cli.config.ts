import { DataSource } from 'typeorm';
import { Coffee } from 'src/coffees/entities/coffee.entity';
import { Flavor } from 'src/coffees/entities/flavor.entity';
import { CoffeeRefactor1670840642885 } from 'src/migrations/1670840642885-CoffeeRefactor';
import { SchemaSync1670841127109 } from 'src/migrations/1670841127109-SchemaSync';

export default new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'pass123',
  database: 'postgres',
  entities: [Coffee, Flavor],
  migrations: [CoffeeRefactor1670840642885, SchemaSync1670841127109],
});
