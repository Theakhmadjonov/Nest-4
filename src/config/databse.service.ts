import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class DatabaseService {
  constructor(@Inject('DATABASE_CONFIG') private config: any) {}
  connect() {
    return `Connected to ${this.config.database} at ${this.config.host}:${this.config.port}`;
  }
}
