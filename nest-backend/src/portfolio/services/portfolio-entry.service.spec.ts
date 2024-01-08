import { Test, TestingModule } from '@nestjs/testing';
import { PortfolioEntryService } from './portfolio-entry.service';

describe('PortfolioEntryService', () => {
  let service: PortfolioEntryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PortfolioEntryService],
    }).compile();

    service = module.get<PortfolioEntryService>(PortfolioEntryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
