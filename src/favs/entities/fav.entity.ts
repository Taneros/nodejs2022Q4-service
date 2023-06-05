import { Album } from 'src/album/entities/album.entity';
import { Artist } from 'src/artist/entities/artist.entity';
import { Track } from 'src/track/entities/track.entity';

export class Fav {
  artists: Record<string, string>[]; // favorite artists ids
  albums: Record<string, string>[]; // favorite albums ids
  tracks: Record<string, string>[]; // favorite tracks ids
}
