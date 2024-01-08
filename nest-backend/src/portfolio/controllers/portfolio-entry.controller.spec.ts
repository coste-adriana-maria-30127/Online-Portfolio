import { Test, TestingModule } from '@nestjs/testing';
import { PortfolioEntryController } from './portfolio-entry.controller';

describe('PortfolioEntryController', () => {
  let controller: PortfolioEntryController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PortfolioEntryController],
    }).compile();

    controller = module.get<PortfolioEntryController>(PortfolioEntryController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
