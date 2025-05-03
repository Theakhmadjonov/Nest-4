import { DynamicModule, Module } from '@nestjs/common';
import { SessionService } from './session.service';

@Module({})
export class SessionModule {
  static forFeature(options: any): DynamicModule {
    return {
      module: SessionModule,
      providers: [
        { provide: 'SESSION_CONFIG', useValue: options },
        SessionService,
      ],
      exports: [SessionService],
    };
  }
}
