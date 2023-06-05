import { Album } from 'src/album/entities/album.entity';
import { Artist } from 'src/artist/entities/artist.entity';
import { Track } from 'src/track/entities/track.entity';

export class Fav {
  artists: Record<'id', string>[]; // favorite artists ids
  albums: Record<'id', string>[]; // favorite albums ids
  tracks: Record<'id', string>[]; // favorite tracks ids
}
