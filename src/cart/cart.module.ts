import { Module } from '@nestjs/common';
import { ProductsModule } from 'src/products/products.module';
import { CartService } from './cart.service';

@Module({
  imports: [ProductsModule],
  providers: [CartService],
  exports: [CartService],
})
export class CartModule {}
