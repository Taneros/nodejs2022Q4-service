import { Injectable } from '@nestjs/common';
import { Track } from 'src/tracks/entities/track.entity';
import { CreateUserDto } from 'src/user/dto/create-user.dto';
import { User } from 'src/user/entities/user.entity';
import { removeObjField, unixTimeStampSec } from 'src/utils/utils';
import { v4 as uuidv4 } from 'uuid';

interface Data {
  user: User[];
  artist: Track[];
  track: unknown;
  album: unknown;
  favorites: unknown;
}

@Injectable()
export class DatabaseService {
  data: Data = {
    user: [
      {
        login: 'admin',
        password: 'admin1',
        id: '92c642d5-192c-40aa-a41a-39077d1f461c',
        version: 1,
        createdAt: 1685720272,
        updatedAt: 1685720272,
      },
    ],
    album: [],
    artist: [],
    track: [],
    favorites: [],
  };

  createUser(user: CreateUserDto): Partial<User> {
    const timeStamp = unixTimeStampSec();
    const newUser = {
      ...user,
      id: uuidv4(),
      version: 1,
      createdAt: timeStamp,
      updatedAt: timeStamp,
    };

    this.data.user.push(newUser);
    return removeObjField(newUser, 'password');
  }

  findAllUsers() {
    return this.data.user;
  }

  findOneUser(id: string) {
    return this.data.user.find((user) => user.id === id) || null;
  }

  updateUser(id: User['id'], user: Partial<User>) {
    const oldUser = this.data.user.find((user) => user.id === id);
    const updatedUser: User = {
      ...oldUser,
      ...user,
      version: oldUser.version + 1,
      updatedAt: unixTimeStampSec() + 1,
    };

    this.data.user = this.data.user.map((user) => {
      if (user.id === id) return updatedUser;
      return user;
    });

    return removeObjField(updatedUser, 'password');
  }

  deleteUser(id: User['id']) {
    const deletedUserIdx = this.data.user.findIndex((user) => user.id === id);
    if (deletedUserIdx !== -1) {
      const deletedUser = this.data.user.splice(deletedUserIdx, 1);

      return removeObjField(deletedUser, 'password');
    }
    return null;
  }
}
