import {
  Body,
  Controller,
  HttpException,
  HttpStatus,
  Param,
  Post,
} from "@nestjs/common";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { CreateUserDto } from "src/users/dto/create-user.dto";
import { AuthService } from "./auth.service";

@ApiTags("Authorization")
@Controller("auth")
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post("/login")
  login(@Body() userDto: CreateUserDto) {
    return this.authService.login(userDto);
  }

  @Post("/regestration")
  regestration(@Body() userDto: CreateUserDto) {
    return this.authService.registration(userDto);
  }
}
