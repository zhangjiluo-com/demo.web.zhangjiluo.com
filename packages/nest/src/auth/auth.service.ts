import { Injectable, Logger } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";

@Injectable()
export class AuthService {
  constructor(private readonly jwtService: JwtService) {}

  async login(username: string, password: string) {
    // const user = await this.usersService.findOne(username);
    // if (user?.password !== pass) {
    //   throw new UnauthorizedException();
    // }
    const payload = { username: username };

    return {
      accessToken: await this.jwtService.signAsync(payload),
    };
  }
}
