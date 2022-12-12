// import * as Joi from 'joi';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoffeesModule } from './coffees/coffees.module';
import { CoffeeRatingModule } from './coffee-rating/coffee-rating.module';
import { DatabaseModule } from './database/database.module';
import appConfig from './config/app.config';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [appConfig],
      // envFilePath: '.environment',
      // validationSchema: Joi.object({
      //   DATABASE_HOST: Joi.string().default('localhost'),
      //   DATABASE_PORT: Joi.number().default(5432),
      //   DATABASE_USER: Joi.string().required(),
      //   DATABASE_PASSWORD: Joi.string().required(),
      //   DATABASE_NAME: Joi.string().required(),
      // }),
    }),
    CoffeesModule,
    TypeOrmModule.forRoot({
      type: 'postgres', // type of our database
      host: process.env.DATABASE_HOST, // 'localhost', // database host
      port: +process.env.DATABASE_PORT, // 5432, // database host
      username: process.env.DATABASE_USER, // 'postgres', // username
      password: process.env.DATABASE_PASSWORD, // 'pass123', // user password
      database: process.env.DATABASE_NAME, // 'postgres', // name of our database,
      autoLoadEntities: true, // models will be loaded automatically
      synchronize: process.env.NODE_ENV === 'production' ? false : true, // your entities will be synced with the database(recommended: disable in prod)
    }),
    CoffeeRatingModule,
    DatabaseModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
