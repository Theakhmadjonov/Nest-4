import { ConsoleLogger, Module } from '@nestjs/common';

@Module({
  providers: [
    {
      provide: 'DATABASE_CONFIG',
      useValue: { host: 'localhost', port: 5432, database: 'fn2' },
    },
    { provide: 'JWT_SECRET', useValue: 'super-secret-key' },
    { provide: 'LOGGER', useClass: ConsoleLogger },
  ],
  exports: ['DATABASE_CONFIG', 'JWT_SECRET', 'LOGGER'],
})
export class ConfigModule {}
