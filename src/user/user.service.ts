import { BadRequestException, Injectable } from '@nestjs/common';
import { Request } from 'express';
import { JsonWebKey } from 'crypto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  get() {
    return { name: 'JITENDRA PARDHI', mobile: 8487542542 };
  }

  async register(body: any): Promise<any> {
    const name = body.name;
    const email = body.email;
    const mobile = body.mobile;
    const password = body.password;
    const confirmPassword = body.confirm_password;
    const roles = body.roles;
    
    if (!name || !email || !mobile || !password || !confirmPassword || !roles) {
      return {
        Message: 'All given fields are madatory for register the User..!',
      };
    }

    // Validate the password and confirmPassword

    if (confirmPassword !== password) {
      return {
        Message:
          'Password and Confirm Password is not match, Please check and reverify the password..!',
      };
    }

    const existingUser = await this.userRepository.findOne({
      where: [{ email }, { mobile }],
    });

    console.log({ existingUser });

    if (existingUser) {
      throw new BadRequestException(
        'User already exists with given email or mobile.',
      );
    }

    const hashedPassword = await bcrypt.hash(body.password, 10); // ✅ Await the promise

    const newUser = await this.userRepository.create({
      name,
      email,
      mobile,
      roles,
      password: hashedPassword, // ✅ Now it's a string
    });

    const savedUser = await this.userRepository.save(newUser);

    return {
      message: 'User registered successfully.',
      user: savedUser,
    };
  }

  update(req: Request, param: any) {
    return { Message: req.body, param };
  }

  getData(param: any) {
    return param;
  }

  delete(id: any) {
    return id;
  }
}
