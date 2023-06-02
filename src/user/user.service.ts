import {
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService {
  constructor(private db: DatabaseService) {}

  create(createUserDto: CreateUserDto) {
    return 'This action adds a new user';
  }

  findAll() {
    return this.db.findAll();
  }

  findOne(id: string) {
    const userById = this.db.findOne(id);
    if (userById) return userById;
    throw new NotFoundException('User not found');
  }

  update(id: string, updateUserDto: UpdateUserDto) {
    const userById = this.db.findOne(id);
    if (!userById) throw new NotFoundException('User not found');

    if (userById.password !== updateUserDto.oldPassword)
      throw new ForbiddenException('Invalid old password');

    const updatedUser = this.db.updateUser(id, {
      password: updateUserDto.newPassword,
    });
    if (updatedUser) return updatedUser;
  }

  remove(id: string) {
    return `This action removes a #${id} user`;
  }
}
