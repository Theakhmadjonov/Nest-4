import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from './config/config.module';
import { DatabaseService } from './config/databse.service';
import { AuthService } from './auth/auth.service';
import { AuthModule } from './auth/auth.module';
import { CartModule } from './cart/cart.module';
import { CatsModule } from './cats/cats.module';
import { DogsModule } from './cats/dogs.module';
import { OrdersModule } from './orders/orders.module';
import { ProductsModule } from './products/products.module';
import { SessionModule } from './session/session.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    ConfigModule,
    AuthModule,
    CartModule,
    CatsModule,
    DogsModule,
    OrdersModule,
    ProductsModule,
    SessionModule,
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService, DatabaseService, AuthService],
})
export class AppModule {}
