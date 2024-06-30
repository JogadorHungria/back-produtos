import { Injectable } from '@nestjs/common';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from '@prisma/client';
import { CreateUserDto } from './dto/create-user.dto';
import { prisma } from 'src/database/PrismaServiceDataBase';

@Injectable()
export class UserService {


  
  async create( data: CreateUserDto) {

    const {name, password, userType} = data

     const user = await prisma.user.create({
      data:{ name, password, userType}
     })
    
    return user;
    
  }


  async findAll() {

    return await prisma.user.findMany();
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return updateUserDto
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
