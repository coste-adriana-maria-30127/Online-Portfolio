import {
  Body,
  Controller,
  Get,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { Express } from 'express';
import { CreatePotfolioEntryDto } from 'src/portfolio/dtos/CreatePortfolioEntry.dto';
import { PortfolioEntryService } from '../services/portfolio-entry.service';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('portfolio-entry')
export class PortfolioEntryController {
  constructor(private portfolioEntryService: PortfolioEntryService) {}

  @Get()
  async getPortfolioEntries() {
    const portfolioEntries =
      await this.portfolioEntryService.fetchPortfolioEntries();

    return portfolioEntries;
  }

  @Post('file')
  @UseInterceptors(FileInterceptor('imageFile')) // 'imageFile' is the name of the file field in the form
  uploadFile(@UploadedFile() imageFile: Express.Multer.File, o) {
    console.log('Uploaded file:', imageFile);
  }

  @Post()
  @UseInterceptors(FileInterceptor('imageFile')) // 'imageFile' is the name of the file field in the form
  createPotfolioEntry(
    @UploadedFile() imageFile: Express.Multer.File,
    @Body() createPotfolioEntryDto: CreatePotfolioEntryDto,
  ) {
    console.log('createPotfolioEntryDto', createPotfolioEntryDto);
    console.log('Uploaded file 1:', imageFile);

    return this.portfolioEntryService.createPotfolioEntry(
      createPotfolioEntryDto,
      imageFile,
    );
  }
}
