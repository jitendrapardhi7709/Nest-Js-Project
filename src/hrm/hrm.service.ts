import { Injectable } from '@nestjs/common';
import { Employee } from './hrm.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class HrmService {
  constructor(
    @InjectRepository(Employee)
    private readonly employeeRepository: Repository<Employee>,
  ) {}

  async employeeRegister(body: any): Promise<any> {
    const {
      emp_id,
      emp_name,
      emp_mobile,
      emp_dob,
      emp_designation,
      emp_department,
      emp_doj,
      emp_salary,
      emp_manager,
      emp_status,
      emp_email,
    } = body;

    if (
      !emp_id ||
      !emp_name ||
      !emp_mobile ||
      !emp_dob ||
      !emp_designation ||
      !emp_department ||
      !emp_doj ||
      !emp_salary ||
      !emp_manager ||
      !emp_status ||
      !emp_email
    ) {
      return {
        Message:
          'All employee details in this form are mandatory. Please fill in all fields.',
      };
    }

    const findEmployee = await this.employeeRepository.findOne({
      where: [{ emp_name }, { emp_email }],
    });

    if (findEmployee !== null) {
      return { Message: 'Employee is already registered in the HRM...!' };
    }

    const createEmpDetails = await this.employeeRepository.create({
      emp_id,
      emp_name,
      emp_mobile,
      emp_dob,
      emp_designation,
      emp_department,
      emp_doj,
      emp_salary,
      emp_manager,
      emp_status,
      emp_email,
    });

    const insertEmpDetails =
      await this.employeeRepository.save(createEmpDetails);

    if (insertEmpDetails) {
      console.log({ insertEmpDetails });
      return { Message: 'Successfully registered the employee...' };
    }
  }
}
