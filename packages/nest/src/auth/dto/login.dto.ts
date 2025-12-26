import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString, Length } from "class-validator";

export class LoginDto {
  @ApiProperty({ description: "用户名|手机号|邮箱", example: "admin" })
  @IsNotEmpty()
  @IsString()
  @Length(4, 32)
  username: string;

  @ApiProperty({ description: "密码", example: "admin123" })
  @IsNotEmpty()
  @IsString()
  @Length(6, 24)
  password: string;
}
