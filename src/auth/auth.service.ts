import { Inject, Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService, @Inject('JWT_SECRET') private jwtSecret: string) {}

  signToken(payload: any) {
    return `Signed token with ${this.jwtSecret}`;
  }
  login(email: string, password: string) {
    const user = this.usersService.findUserByEmail(email);
    return { message: 'Logged in', user };
  }

  register(userData: any) {
    return this.usersService.createUser(userData);
  }
}
