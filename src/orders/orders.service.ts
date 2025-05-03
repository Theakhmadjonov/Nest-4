import { Injectable } from '@nestjs/common';
import { CartService } from 'src/cart/cart.service';

@Injectable()
export class OrdersService {
  constructor(private cartService: CartService) {}

  createOrder(userId: string) {
    const cart = this.cartService.getCart(userId);
    return { userId, cart, status: 'Created' };
  }

  getOrders(userId: string) {
    return [{ id: 1, userId, items: [] }];
  }
}
