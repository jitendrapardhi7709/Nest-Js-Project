import {
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Req,
} from '@nestjs/common';
import { Request } from 'express';
@Controller('/api')
export class AppController {
  @Get()
  getRequest() {
    return 'Hello I am Jitendra Pardhi';
  }

  @Post()
  createTransaction(@Req() req: Request) {
    console.log({ req: req.body });
    return req.body;
  }

  @Patch()
  updateRequest(@Req() req: Request) {
    console.log({ req: req.body });
    return req.body;
  }

  @Get('/:id')
  fetchDetails(@Param() id: number) {
    return id;
  }

  @Delete('/:id')
  deleteRequest(@Param() id: number) {
    return id;
  }
}
