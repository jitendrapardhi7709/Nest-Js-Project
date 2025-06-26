import { Body, Controller, Get, HttpCode, Post } from '@nestjs/common';
import { HrmService } from './hrm.service';
import { RegisterEmployeeDto } from './dto /register-emp.dto';

@Controller('hrm')
export class HrmController {
  constructor(private employeeServices: HrmService) {}
  @Get()
  getEmployeeDetails() {}

  @Post('/register-emp')
  @HttpCode(200)
  registerEmployee(@Body() body: RegisterEmployeeDto) {
    return this.employeeServices.employeeRegister(body);
  }
}
