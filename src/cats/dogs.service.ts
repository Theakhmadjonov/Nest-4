import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { CatsService } from './cats.servcie';

@Injectable()
export class DogsService {
  constructor(
    @Inject(forwardRef(() => CatsService)) private catsService: CatsService,
  ) {}

  getDogs() {
    return ['dog1', 'dog2'];
  }

  countRivalDogs() {
    return this.catsService.getCats().length;
  }
}
