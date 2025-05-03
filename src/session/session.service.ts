import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class SessionService {
  constructor(@Inject('SESSION_CONFIG') private config: any) {}

  getSessionInfo() {
    return {
      message: 'Session info',
      config: this.config,
    };
  }
}
