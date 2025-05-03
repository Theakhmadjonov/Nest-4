import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { DogsService } from './dogs.service';

@Injectable()
export class CatsService {
  constructor(
    @Inject(forwardRef(() => DogsService)) private dogsService: DogsService,
  ) {}

  getCats() {
    return ['cat1', 'cat2'];
  }

  countRivalCats() {
    return this.dogsService.getDogs().length;
  }
}
