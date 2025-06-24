import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
@Entity('hrm_employees')
export class Employee {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ default: null })
  emp_id: string;
  @Column({ default: null })
  emp_name: string;
  @Column({ default: null })
  emp_email: string;
  @Column({ default: null, type: 'bigint' })
  emp_mobile: number;
  @Column({ default: null, type: 'date' })
  emp_dob: string;
  @Column({ default: null })
  emp_designation: string;
  @Column({ default: null })
  emp_department: string;
  @Column({ default: null, type: 'date' })
  emp_doj: string;
  @Column({ default: null })
  emp_salary: number;
  @Column({ default: null })
  emp_manager: string;
  @Column({ default: null })
  emp_status: string;
}
