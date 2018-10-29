import { Test, TestingModule } from '@nestjs/testing';
import { ConcursoController } from './concurso.controller';

describe('Concurso Controller', () => {
  let module: TestingModule;
  beforeAll(async () => {
    module = await Test.createTestingModule({
      controllers: [ConcursoController],
    }).compile();
  });
  it('should be defined', () => {
    const controller: ConcursoController = module.get<ConcursoController>(ConcursoController);
    expect(controller).toBeDefined();
  });
});
