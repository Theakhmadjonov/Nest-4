import { Module } from '@nestjs/common';
import { CartModule } from 'src/cart/cart.module';
import { OrdersService } from './orders.service';
import { OrdersController } from './orders.controller';

@Module({
  imports: [CartModule],
  providers: [OrdersService],
  controllers: [OrdersController],
})
export class OrdersModule {}
