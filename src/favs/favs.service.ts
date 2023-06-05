import {
  Injectable,
  NotFoundException,
  UnprocessableEntityException,
} from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import { CreateFavDto } from './dto/create-fav.dto';
import { UpdateFavDto } from './dto/update-fav.dto';

@Injectable()
export class FavsService {
  constructor(private db: DatabaseService) {}

  createArtist(id: string) {
    const artistById = this.db.findOneArtist(id);
    if (!artistById) throw new UnprocessableEntityException('Artist not found');
    return this.db.createFavoriteArtist(id);
  }

  createAlbum(id: string) {
    const albumById = this.db.findOneAlbum(id);
    if (!albumById) throw new UnprocessableEntityException('Album not found');
    return this.db.createFavoriteAlbum(id);
  }

  createTrack(id: string) {
    const trackById = this.db.findOneTrack(id);
    if (!trackById) throw new UnprocessableEntityException('Track not found');
    return this.db.createFavoriteTrack(id);
  }

  findAll() {
    return this.db.findAllFavorite();
  }

  removeArtist(id: string) {
    const artistById = this.db.findOneFavorite(id, 'artists');
    if (!artistById) throw new NotFoundException('Artist is not favorite');
    return this.db.deleteFavoriteArtist(id);
  }

  removeAlbum(id: string) {
    const albumById = this.db.findOneFavorite(id, 'albums');
    if (!albumById) throw new NotFoundException('Album is not favorite');
    return this.db.deleteFavoriteAlbum(id);
  }
}
