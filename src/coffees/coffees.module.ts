import { Injectable, Module, Scope } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CoffeesController } from './coffees.controller';
import { CoffeesService } from './coffees.service';
import { Coffee } from './entities/coffee.entity';
import { Flavor } from './entities/flavor.entity';
import { Event } from '../events/entities/event.entity';
import { COFFEE_BRANDS } from './coffees.constants';
// import { Connection } from 'typeorm';

// export class MockCoffeesService {}

// class ConfigService {}
// class DevelopmentConfigService {}
// class ProductionConfigService {}

// @Injectable()
// export class CoffeeBrandsFactory {
//   create() {
//     return ['buddy brew', 'nescafe'];
//   }
// }

@Module({
  imports: [TypeOrmModule.forFeature([Coffee, Flavor, Event])],
  controllers: [CoffeesController],
  providers: [
    CoffeesService,
    // {
    //   provide: ConfigService,
    //   useClass:
    //     process.env.NODE_ENV === 'production'
    //       ? ProductionConfigService
    //       : DevelopmentConfigService,
    // },
    // CoffeeBrandsFactory,
    // {
    //   provide: COFFEE_BRANDS,
    //   // useValue: ['buddy brew', 'nescafe'],
    //   // useFactory: (brandsFactory: CoffeeBrandsFactory) =>
    //   //   brandsFactory.create(),
    //   // inject: [CoffeeBrandsFactory],
    //   useFactory: async (connection: Connection): Promise<string[]> => {
    //     const coffeeBrands = await Promise.resolve(['buddy brew', 'nescafe']);
    //     console.log('[!] Async factory');
    //     return coffeeBrands;
    //   },
    //   inject: [Connection],
    // },
    {
      provide: COFFEE_BRANDS,
      useFactory: () => {
        console.log('CoffeeBrands instantiated');
        return ['buddy brew', 'nescafe'];
      },
      scope: Scope.TRANSIENT,
    },
  ],
  exports: [CoffeesService],
})
export class CoffeesModule {}
