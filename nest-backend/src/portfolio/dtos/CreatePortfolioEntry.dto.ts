import {
  IsBoolean,
  IsOptional,
  IsString,
  IsUrl,
  MaxLength,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreatePotfolioEntryDto {
  @IsString()
  @MaxLength(255, { message: 'Title is too long' })
  title: string;

  @IsString()
  @MaxLength(1000, { message: 'Description is too long' })
  description: string;

  @ApiProperty({ type: 'string', format: 'binary' })
  imageFile: any;

  @IsOptional()
  @IsUrl({}, { message: 'Invalid customerLink. Must be a URL' })
  customerURL: string;
}
