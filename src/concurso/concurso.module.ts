import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { ConcursoController } from './concurso.controller';
import { ConcursoService } from './concurso.service';
import { concursoProviders } from './concurso.providers';

@Module({
  imports: [DatabaseModule],
  controllers: [ConcursoController],
  providers: [...concursoProviders, ConcursoService],
})
export class ConcursoModule {}
