// user.module.ts
import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.entity';
import { HrmModule } from 'src/hrm/hrm.module';

@Module({
  imports: [TypeOrmModule.forFeature([User]), HrmModule],
  controllers: [UserController],
  providers: [UserService],
  exports: [UserService], // export if used elsewhere
})
export class UserModule {}
