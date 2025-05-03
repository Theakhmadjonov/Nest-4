import { Body, Controller, Post } from '@nestjs/common';
import { OrdersService } from './orders.service';

@Controller('orders')
export class OrdersController {
  constructor(private ordersService: OrdersService) {}

  @Post()
  create(@Body('userId') userId: string) {
    return this.ordersService.createOrder(userId);
  }
}
