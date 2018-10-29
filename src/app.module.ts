import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConcursoModule } from './concurso/concurso.module';
import { DatabaseModule } from './database/database.module';
import { CargoModule } from './cargo/cargo.module';

@Module({
  imports: [ConcursoModule, DatabaseModule, CargoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
