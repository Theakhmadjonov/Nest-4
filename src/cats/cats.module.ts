import { forwardRef, Module } from '@nestjs/common';
import { DogsModule } from './dogs.module';
import { CatsService } from './cats.servcie';

@Module({
  imports: [forwardRef(() => DogsModule)],
  providers: [CatsService],
  exports: [CatsService],
})
export class CatsModule {}
