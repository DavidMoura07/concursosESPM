import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { CargoController } from './cargo.controller';
import { cargoProviders } from './cargo.providers';
import { CargoService } from './cargo.service';

@Module({
  imports: [DatabaseModule],
  controllers: [CargoController],
  providers: [...cargoProviders, CargoService],
})
export class CargoModule {}
