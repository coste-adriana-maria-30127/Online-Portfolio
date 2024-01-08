import {
  IsBoolean,
  IsOptional,
  IsString,
  IsUrl,
  MaxLength,
} from 'class-validator';

export class CreatePotfolioEntryDto {
  @IsString()
  @IsOptional()
  @MaxLength(255, { message: 'Title is too long' })
  title: string;

  @IsString()
  @IsOptional()
  @MaxLength(1000, { message: 'Description is too long' })
  description: string;

  @IsOptional()
  @IsUrl({}, { message: 'Invalid imageURL. Must be a URL' })
  imageURL: string;

  @IsOptional()
  @IsUrl({}, { message: 'Invalid customerLink. Must be a URL' })
  customerLink: string;

  @IsBoolean()
  @IsOptional()
  visible: boolean;
}
