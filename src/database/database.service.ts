import { Injectable } from '@nestjs/common';
import { Album } from 'src/album/entities/album.entity';
import { CreateArtistDto } from 'src/artist/dto/create-artist.dto';
import { Artist } from 'src/artist/entities/artist.entity';
import { CreateUserDto } from 'src/user/dto/create-user.dto';
import { User } from 'src/user/entities/user.entity';
import { removeObjField, unixTimeStampSec } from 'src/utils/utils';
import { v4 as uuidv4 } from 'uuid';

interface Data {
  user: User[];
  artist: Artist[];
  track: unknown;
  album: Album[];
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
    artist: [
      {
        id: 'fdcf03dc-cf77-4695-9cf1-1ef850975d02',
        name: 'U2',
        grammy: true,
      },
    ],
    album: [],
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

  createArtist(createArtistDto: CreateArtistDto): Partial<Artist> {
    const newArtist: Artist = {
      id: uuidv4(),
      ...createArtistDto,
    };

    this.data.artist.push(newArtist);
    return newArtist;
  }

  findAllArtists() {
    return this.data.artist;
  }

  findOneArtist(id: Artist['id']) {
    return this.data.artist.find((artist) => artist.id === id) || null;
  }

  updateArtist(id: Artist['id'], artist: Partial<Artist>) {
    const oldArtist = this.data.artist.find((artist) => artist.id === id);
    const updatedArtist: Artist = {
      ...oldArtist,
      ...artist,
    };

    this.data.artist = this.data.artist.map((artist) => {
      if (artist.id === id) return updatedArtist;
      return artist;
    });

    return this.updateArtist;
  }

  deleteArtist(id: Artist['id']) {
    const deletedArtistIdx = this.data.artist.findIndex(
      (artist) => artist.id === id,
    );
    if (deletedArtistIdx !== -1) {
      const deletedArtist = this.data.artist.splice(deletedArtistIdx, 1);

      return deletedArtist;
    }
    return null;
  }
  // 
  createAlbum(createArtistDto: CreateArtistDto): Partial<Artist> {
    const newArtist: Artist = {
      id: uuidv4(),
      ...createArtistDto,
    };

    this.data.artist.push(newArtist);
    return newArtist;
  }

  findAllAlbums() {
    return this.data.artist;
  }

  findOneAlbum(id: Artist['id']) {
    return this.data.artist.find((artist) => artist.id === id) || null;
  }

  updateAlbum(id: Artist['id'], artist: Partial<Artist>) {
    const oldArtist = this.data.artist.find((artist) => artist.id === id);
    const updatedArtist: Artist = {
      ...oldArtist,
      ...artist,
    };

    this.data.artist = this.data.artist.map((artist) => {
      if (artist.id === id) return updatedArtist;
      return artist;
    });

    return this.updateArtist;
  }

  deleteAlbum(id: Artist['id']) {
    const deletedArtistIdx = this.data.artist.findIndex(
      (artist) => artist.id === id,
    );
    if (deletedArtistIdx !== -1) {
      const deletedArtist = this.data.artist.splice(deletedArtistIdx, 1);

      return deletedArtist;
    }
    return null;
  }
}
