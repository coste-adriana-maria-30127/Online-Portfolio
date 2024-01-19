import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ImageEntry } from './typeorm/entities/ImageEntry';
import { ImageDto } from './portfolio/dtos/Image.dto';

@Injectable()
export class AppService {
  // constructor(
  //   @InjectRepository(ImageEntry)
  //   private readonly imageRepository: Repository<ImageEntry>,
  // ) {}
  // async getImages(): Promise<ImageEntry[]> {
  //   return this.imageRepository.find();
  // }
  // async createImage(imageDto: ImageDto): Promise<ImageEntry> {
  //   const image = this.imageRepository.create(imageDto);
  //   return this.imageRepository.save(image);
  // }
  // async getImage(id: number): Promise<ImageEntry> {
  //   return this.imageRepository.findOneBy({ id });
  // }
  // async deleteImage(id: number): Promise<void> {
  //   await this.imageRepository.delete(id);
  // }
}
