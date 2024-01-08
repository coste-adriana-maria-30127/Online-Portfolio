import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreatePotfolioEntryParams } from 'src/portfolio/utils/types';
import { PortfolioEntry } from 'src/typeorm/entities/PortfolioEntry';
import { Repository } from 'typeorm';

@Injectable()
export class PortfolioEntryService {
  constructor(
    @InjectRepository(PortfolioEntry)
    private portfolioEntryRepository: Repository<PortfolioEntry>,
  ) {}

  fetchPortfolioEntries() {
    return this.portfolioEntryRepository.find();
  }

  createPotfolioEntry(createPotfolioEntryDetails: CreatePotfolioEntryParams) {
    const newPortfolioEntry = this.portfolioEntryRepository.create(
      createPotfolioEntryDetails,
    );
    return this.portfolioEntryRepository.save(newPortfolioEntry);
  }
}
