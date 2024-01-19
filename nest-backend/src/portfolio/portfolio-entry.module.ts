import { Module } from '@nestjs/common';
import { MulterModule } from '@nestjs/platform-express';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PortfolioEntry } from 'src/typeorm/entities/PortfolioEntry';
import { ImageEntry } from 'src/typeorm/entities/ImageEntry';
import { PortfolioEntryController } from './controllers/portfolio-entry.controller';
import { PortfolioEntryService } from './services/portfolio-entry.service';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

@Module({
  imports: [
    TypeOrmModule.forFeature([PortfolioEntry, ImageEntry]),
    MulterModule.register({
      dest: './files', // Specify your upload directory
    }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'files'),
    }),
  ],
  controllers: [PortfolioEntryController],
  providers: [PortfolioEntryService],
})
export class PortfolioEntryModule {}
