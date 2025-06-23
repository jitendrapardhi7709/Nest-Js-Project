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
import { CreateUserDto } from 'src/dto/create-user.dto';
@Controller('/user')
export class UserController {
  constructor(private userService: UserService) {}

  @Get()
  getRequest() {
    return this.userService.get();
  }

  @Post('/register')
  createTransaction(@Body() CreateUserDto: CreateUserDto) {
    console.log({ req: CreateUserDto });
    return this.userService.register(CreateUserDto);
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
