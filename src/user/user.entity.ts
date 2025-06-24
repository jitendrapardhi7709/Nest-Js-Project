// src/user/user.entity.ts
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ default: null })
  name: string;
  @Column({ default: null })
  email: string;
  @Column({ type: 'bigint', default: null })
  mobile: string;
  @Column({ default: null })
  password: string;
  @Column({ type: 'json', default: null })
  roles: string;
}
