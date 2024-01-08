import {
  IsBoolean,
  IsOptional,
  IsString,
  IsUrl,
  MaxLength,
} from 'class-validator';

export class CreatePotfolioEntryDto {
  @IsString()
  @MaxLength(255, { message: 'Title is too long' })
  title: string;

  @IsString()
  @MaxLength(1000, { message: 'Description is too long' })
  description: string;

  @IsUrl({}, { message: 'Invalid imageURL. Must be a URL' })
  imageURL: string;

  @IsOptional()
  @IsUrl({}, { message: 'Invalid customerLink. Must be a URL' })
  customerLink: string;

  @IsBoolean()
  visible: boolean;
}
