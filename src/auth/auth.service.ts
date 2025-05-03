import { Injectable } from "@nestjs/common";
import { UsersService } from "src/users/users.service";

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService) {}

  login(email: string, password: string) {
    const user = this.usersService.findUserByEmail(email);
    return { message: 'Logged in', user };
  }

  register(userData: any) {
    return this.usersService.createUser(userData);
  }
}
