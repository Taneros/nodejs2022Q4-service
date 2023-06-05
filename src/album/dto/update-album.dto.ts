import { PartialType } from '@nestjs/mapped-types';
import { IsString, IsNotEmpty, IsNumber } from 'class-validator';
import { CreateAlbumDto } from './create-album.dto';

export class UpdateAlbumDto extends PartialType(CreateAlbumDto) {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsNumber()
  @IsNotEmpty()
  year: number;

  @IsString()
  @IsNotEmpty()
  artistId: string | null;
}
