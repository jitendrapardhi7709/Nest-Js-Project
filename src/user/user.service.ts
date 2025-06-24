import { BadRequestException, Injectable } from '@nestjs/common';
import { Request } from 'express';
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

  async registerUser(body: any): Promise<any> {
    const {
      name,
      email,
      mobile,
      password,
      confirm_password: confirmPassword,
      roles,
    } = body;

    // ✅ Validate required fields
    if (!name || !email || !mobile || !password || !confirmPassword || !roles) {
      return {
        message: 'All fields are mandatory for user registration...!',
      };
    }

    // ✅ Validate password match
    if (password !== confirmPassword) {
      return {
        message:
          'Password and Confirm Password do not match. Please verify...!',
      };
    }

    // ✅ Check if user already exists
    const existingUser = await this.userRepository.findOne({
      where: { email },
    });

    if (existingUser) {
      throw new BadRequestException(
        'User already exists with the given email or mobile...!',
      );
    }

    // ✅ Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // ✅ Create and save the user
    const newUser = this.userRepository.create({
      name,
      email,
      mobile,
      roles,
      password: hashedPassword,
    });

    const savedUser = await this.userRepository.save(newUser);

    // ✅ Return success response
    return {
      message: 'User registered successfully.',
      user: savedUser,
    };
  }

  async loginUser(body: any): Promise<any> {
    const { email, password } = body;

    const findUsers = await this.userRepository.findOne({
      where: { email },
    });

    if (findUsers === null) {
      return {
        Message:
          'User is not found in our record, Please login with register email...!',
      };
    }
    const hash = findUsers.password;
    const isMatch = await bcrypt.compare(password, hash);

    if (isMatch === false) {
      return {
        Message: 'Password is invalid, Please login with valid password...!',
      };
    }

    console.log({ findUsers, isMatch });

    return { findUsers };
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
