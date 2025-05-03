import { Injectable } from '@nestjs/common';
import { ProductsService } from 'src/products/products.service';

@Injectable()
export class CartService {
  constructor(private productsService: ProductsService) {}

  addToCart(userId: string, productId: string, quantity: number) {
    const product = this.productsService.getProductById(productId);
    return { userId, product, quantity };
  }

  getCart(userId: string) {
    return [{ productId: '1', quantity: 2 }];
  }
}
