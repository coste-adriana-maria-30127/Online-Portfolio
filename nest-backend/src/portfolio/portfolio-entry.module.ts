import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PortfolioEntry } from 'src/typeorm/entities/PortfolioEntry';
import { PortfolioEntryController } from './controllers/portfolio-entry.controller';
import { PortfolioEntryService } from './services/portfolio-entry.service';

@Module({
  imports: [TypeOrmModule.forFeature([PortfolioEntry])],
  controllers: [PortfolioEntryController],
  providers: [PortfolioEntryService],
})
export class PortfolioEntryModule {}
