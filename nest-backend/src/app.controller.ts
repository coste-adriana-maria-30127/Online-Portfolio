import {
  Body,
  Controller,
  Get,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { AppService } from './app.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { ImageEntry } from './typeorm/entities/ImageEntry';
import { Express } from 'express';
import { ImageDto } from './portfolio/dtos/Image.dto';

@Controller('images')
export class AppController {
  constructor(private readonly appService: AppService) {}
  // @Post()
  // @UseInterceptors(FileInterceptor('file')) // 'imageFile' is the name of the file field in the form
  // uploadFile(@UploadedFile() file: Express.Multer.File) {
  //   console.log('Uploaded file:', file);

  //   const imageDto: ImageDto = {
  //     originalname: file.originalname,
  //     file_path: file.path,
  //     mimetype: file.mimetype,
  //     size: file.size,
  //   };

  //   return this.appService.createImage(imageDto);
  // }

  // @Get()
  // async getAllImages(): Promise<ImageEntry[]> {
  //   return this.appService.getImages();
  // }
}
