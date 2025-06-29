import {
  IsDateString,
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsNumberString,
  IsString,
} from 'class-validator';

export class RegisterEmployeeDto {
  @IsNotEmpty()
  @IsString()
  emp_id: string;
  @IsString()
  @IsNotEmpty()
  emp_name: string;
  @IsEmail()
  @IsNotEmpty()
  emp_email: string;
  @IsNotEmpty()
  @IsNumberString()
  emp_mobile: string;
  @IsNotEmpty()
  @IsDateString()
  emp_dob: string;
  @IsNotEmpty()
  @IsString()
  emp_designation: string;
  @IsNotEmpty()
  @IsString()
  emp_department: string;
  @IsNotEmpty()
  @IsDateString()
  emp_doj: string;
  @IsNotEmpty()
  @IsNumberString()
  emp_salary: string;
  @IsNotEmpty()
  @IsString()
  emp_manager: string;
  @IsNotEmpty()
  @IsString()
  emp_status: string;
}
