import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { DatabaseModule } from './database/database.module';
import { TracksModule } from './tracks/tracks.module';

@Module({
  imports: [DatabaseModule, UserModule, TracksModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
