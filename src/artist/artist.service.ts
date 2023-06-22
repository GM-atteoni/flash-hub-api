import { Injectable } from '@nestjs/common';
import { CreateArtistDto } from './dto/create-artist.dto';
import { UpdateArtistDto } from './dto/update-artist.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Artist } from './entities/artist.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ArtistService {
  constructor(
    @InjectRepository(Artist)
    private artistRepository: Repository<Artist>,
  ) {}
  
  create(createArtistDto: CreateArtistDto) {
    return this.artistRepository.save({...createArtistDto});
  }

  findAll() {
    return this.artistRepository.find();
  }

  findOne(id: number) {
    return this.artistRepository.findOneBy({ id });
  }

  update(id: number, updateArtistDto: UpdateArtistDto) {
    return this.artistRepository.save({...updateArtistDto});
  }

  remove(id: number) {
    this.artistRepository.delete(id);
  }
}
