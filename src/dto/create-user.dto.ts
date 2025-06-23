import { IsArray, IsEmail,   IsMobilePhone,   IsString, IsStrongPassword} from 'class-validator';

export class CreateUserDto {
  @IsString()
  name: string;
  @IsEmail()
  email: string;
  @IsMobilePhone()
  mobile: number;
  @IsStrongPassword()
  password: string;
  @IsStrongPassword()
  confirm_password: string;
  @IsArray()
  roles:Array<any>;
}
