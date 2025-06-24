import { Body, Controller, Get, HttpCode, Post } from '@nestjs/common';
import { HrmService } from './hrm.service';

@Controller('hrm')
export class HrmController {
  constructor(private employeeServices: HrmService) {}
  @Get()
  getEmployeeDetails() {}

  @Post('/register-emp')
  @HttpCode(200)
  registerEmployee(@Body() body: any) {
    return this.employeeServices.employeeRegister(body);
  }
}
