import { Test, TestingModule } from '@nestjs/testing';
import { CargoController } from './cargo.controller';

describe('Cargo Controller', () => {
  let module: TestingModule;
  beforeAll(async () => {
    module = await Test.createTestingModule({
      controllers: [CargoController],
    }).compile();
  });
  it('should be defined', () => {
    const controller: CargoController = module.get<CargoController>(
      CargoController,
    );
    expect(controller).toBeDefined();
  });
});
