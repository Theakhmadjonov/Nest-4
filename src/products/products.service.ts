import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductsService {
  getProductById(id: string) {
    return { id, name: 'Product' };
  }

  checkStock(id: string, quantity: number) {
    return true;
  }
}
