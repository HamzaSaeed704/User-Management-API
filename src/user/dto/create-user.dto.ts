// src/user/dto/create-user.dto.ts
import { IsEmail, IsNotEmpty, IsOptional, IsUrl } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  name: string;

  @IsEmail()
  email: string;

  @IsOptional()
  bio?: string;

  @IsOptional()
  @IsUrl()
  profileImage?: string;
}
