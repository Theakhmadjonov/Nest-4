import { forwardRef, Module } from '@nestjs/common';
import { CatsModule } from './cats.module';
import { DogsService } from './dogs.service';

@Module({
  imports: [forwardRef(() => CatsModule)],
  providers: [DogsService],
  exports: [DogsService],
})
export class DogsModule {}
