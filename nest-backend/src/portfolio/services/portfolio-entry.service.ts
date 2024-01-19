import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreatePotfolioEntryParams } from 'src/portfolio/utils/types';
import { PortfolioEntry } from 'src/typeorm/entities/PortfolioEntry';
import { ImageEntry } from 'src/typeorm/entities/ImageEntry';

import { Repository } from 'typeorm';

@Injectable()
export class PortfolioEntryService {
  constructor(
    @InjectRepository(PortfolioEntry)
    private portfolioEntryRepository: Repository<PortfolioEntry>,
    @InjectRepository(ImageEntry)
    private imageRepository: Repository<ImageEntry>,
  ) {}

  fetchPortfolioEntries() {
    return this.portfolioEntryRepository.find();
  }

  async createPotfolioEntry(
    createPortfolioEntryDetails: CreatePotfolioEntryParams,
    imageFile: Express.Multer.File,
  ) {
    console.log('createPotfolioEntryDetails', createPortfolioEntryDetails);
    console.log('Uploaded file:', imageFile);

    // const { title, description, customerURL } = createPortfolioEntryDetails;

    // Create a new portfolio entry
    const portfolioEntry = this.portfolioEntryRepository.create(
      createPortfolioEntryDetails,
    );

    // Save the portfolio entry to get its ID
    const savedPortfolioEntry =
      await this.portfolioEntryRepository.save(portfolioEntry);

    // Create a new image entity associated with the portfolio entry
    const image = this.imageRepository.create({
      originalname: imageFile.originalname,
      file_path: imageFile.path.replace('\\', '/'), // Adjust path separators
      mimetype: imageFile.mimetype,
      size: imageFile.size,
      description: '', // You can set the description based on your needs
      portfolioEntry: savedPortfolioEntry, // Associate the image with the portfolio entry
    });

    console.log('image', image);

    // Save the image entity
    await this.imageRepository.save(image);

    return savedPortfolioEntry;
  }
}
