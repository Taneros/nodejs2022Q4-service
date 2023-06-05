import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import { CreateFavDto } from './dto/create-fav.dto';
import { UpdateFavDto } from './dto/update-fav.dto';

@Injectable()
export class FavsService {
  constructor(private db: DatabaseService) {}

  createArtist(id: string) {
    return 'This action adds a new fav';
  }

  createTrack(id: string) {
    return 'This action adds a new fav';
  }

  createAlbum(id: string) {
    return 'This action adds a new fav';
  }

  findAll() {
    return this.db.findAllFavorite();
  }

  remove(id: string) {
    return `This action removes a #${id} fav`;
  }
}
