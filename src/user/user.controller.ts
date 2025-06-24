import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Req,
  Res,
} from '@nestjs/common';
import { Request } from 'express';
import { UserService } from './user.service';
import { RegisterUserDto } from 'src/user/dto/register-user.dto';
import { LoginUserDto } from 'src/user/dto/login-user.dto';

@Controller('/user')
export class UserController {
  constructor(private userService: UserService) {}

  @Post('/register')
  UserRegister(@Body() RegisterUserDto: RegisterUserDto) {
    console.log({ req: RegisterUserDto });
    return this.userService.registerUser(RegisterUserDto);
  }
  @Post('/login')
  UserLogin(@Body() LoginUserDto: LoginUserDto) {
    console.log({ req: LoginUserDto });
    return this.userService.loginUser(LoginUserDto);
  }
  @Patch('/:id')
  updateRequest(@Req() req: Request, @Param() param: { id: number }) {
    console.log({ req: req.body });
    return this.userService.update(req, param);
  }

  @Get('/:id')
  fetchDetails(@Param() id: number) {
    return this.userService.getData(id);
  }

  @Delete('/:id')
  deleteRequest(@Param() id: number) {
    return this.userService.delete(id);
  }
}
