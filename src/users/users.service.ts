import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  findUserByEmail(email: string) {
    return { email };
  }

  createUser(userData: any) {
    return { id: Date.now(), ...userData };
  }
}
