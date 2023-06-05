import { Injectable } from '@nestjs/common';
import { CreateFavDto } from './dto/create-fav.dto';
import { UpdateFavDto } from './dto/update-fav.dto';

@Injectable()
export class FavsService {
  create(createFavDto: CreateFavDto) {
    return 'This action adds a new fav';
  }

  findAll() {
    return `This action returns all favs`;
  }

  findOne(id: string) {
    return `This action returns a #${id} fav`;
  }

  update(id: string, updateFavDto: UpdateFavDto) {
    return `This action updates a #${id} fav`;
  }

  remove(id: string) {
    return `This action removes a #${id} fav`;
  }
}
