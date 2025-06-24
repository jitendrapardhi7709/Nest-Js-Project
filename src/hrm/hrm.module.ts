import { Module } from '@nestjs/common';
import { HrmService } from './hrm.service';
import { HrmController } from './hrm.controller';
import { Employee } from './hrm.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Employee])],
  controllers: [HrmController],
  providers: [HrmService],
})
export class HrmModule {}
