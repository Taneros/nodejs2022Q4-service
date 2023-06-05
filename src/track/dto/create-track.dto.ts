import { IsString, IsNotEmpty, IsOptional, IsNumber } from 'class-validator';

export class CreateTrackDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsOptional()
  artistId: string; // refers to Artist

  @IsString()
  @IsOptional()
  albumId: string; // refers to Album

  @IsNumber()
  @IsNotEmpty()
  duration: number; // integer number
}
