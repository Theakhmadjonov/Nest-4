import { Controller, Get } from '@nestjs/common';
import {
  RequestSessionService,
  TransientService,
  UserSessionService,
} from './sc.services';

@Controller('session')
export class SessionController {
  constructor(
    private readonly userSession: UserSessionService,
    private readonly requestSession: RequestSessionService,
    private readonly transient: TransientService,
  ) {}

  @Get()
  testSession() {
    return {
      user: this.userSession,
      request: this.requestSession,
      transient: this.transient,
    };
  }
}
