import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Artist } from './artist/entities/artist.entity';
import { ArtistModule } from './artist/artist.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'admin',
      database: 'flash-hub',
      entities: [
        Artist
      ],
      synchronize: true,
    }),
    ArtistModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
