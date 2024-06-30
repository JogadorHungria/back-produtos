import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class UpdateUserDto {

    @IsString()
    @IsNotEmpty()
    readonly name: string;
  
    @IsString()
    @IsNotEmpty()
    readonly password: string;
  
    @IsString()
    @IsNotEmpty()
    readonly email: string;
  
    @IsString()
    @IsNotEmpty()
    readonly userType: string;

}
