import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreatePotfolioEntryDto } from 'src/portfolio/dtos/CreatePortfolioEntry.dto';
import { PortfolioEntryService } from '../services/portfolio-entry.service';

@Controller('portfolio-entry')
export class PortfolioEntryController {
  constructor(private portfolioEntryService: PortfolioEntryService) {}

  @Get()
  async getPortfolioEntries() {
    const portfolioEntries =
      await this.portfolioEntryService.fetchPortfolioEntries();

    return portfolioEntries;
  }

  @Post()
  createPotfolioEntry(@Body() createPotfolioEntryDto: CreatePotfolioEntryDto) {
    return this.portfolioEntryService.createPotfolioEntry(
      createPotfolioEntryDto,
    );
  }
}
