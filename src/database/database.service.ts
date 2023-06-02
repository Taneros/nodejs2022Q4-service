import { Injectable } from '@nestjs/common';
import { UpdateUserDto } from 'src/user/dto/update-user.dto';
import { User } from 'src/user/entities/user.entity';

// interface UserData {
//   id: string; // uuid v4
//   login: string;
//   password: string;
//   version: number; // integer number, increments on update
//   createdAt: number; // timestamp of creation
//   updatedAt: number; // timestamp of last update
// }

// interface Artist {
//   id: string; // uuid v4
//   name: string;
//   grammy: boolean;
// }

// interface Track {
//   id: string; // uuid v4
//   name: string;
//   artistId: string | null; // refers to Artist
//   albumId: string | null; // refers to Album
//   duration: number; // integer number
// }

// interface Album {
//   id: string; // uuid v4
//   name: string;
//   year: number;
//   artistId: string | null; // refers to Artist
// }

// interface Favorites {
//   artists: string[]; // favorite artists ids
//   albums: string[]; // favorite albums ids
//   tracks: string[]; // favorite tracks ids
// }

interface Data {
  user: User[];
  artist: unknown;
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

  findAll() {
    return this.data.user;
  }

  findOne(id: string) {
    return this.data.user.find((user) => user.id === id) || null;
  }

  updateUser(id: User['id'], user: Partial<User>) {
    const oldUser = this.data.user.find((user) => user.id === id);
    const userById: User = {
      ...oldUser,
      ...user,
      version: oldUser.version + 1,
      updatedAt: Math.floor(Date.now() / 1000),
    };

    this.data.user = this.data.user.map((user) => {
      if (user.id === id) return userById;
      return user;
    });

    return userById;
  }
}
