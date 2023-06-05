import {
  IsString,
  IsNotEmpty,
  IsBoolean,
  IsUUID,
  IsOptional,
} from 'class-validator';

export class CreateArtistDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsBoolean()
  @IsNotEmpty()
  grammy: boolean;
}
