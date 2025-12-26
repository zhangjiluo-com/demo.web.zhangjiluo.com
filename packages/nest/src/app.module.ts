import { Module } from "@nestjs/common";
import { AuthModule } from "./auth/auth.module";
import { AuthGuard } from "./auth/auth.guard";
import { APP_GUARD } from "@nestjs/core";
import { UserModule } from "./user/user.module";

@Module({
  imports: [AuthModule, UserModule],
  controllers: [],
  providers: [
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
  ],
})
export class AppModule {}
