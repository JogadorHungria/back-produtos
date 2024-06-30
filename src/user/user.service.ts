import { Injectable, NotFoundException } from '@nestjs/common';
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

  async findOne(id: number) {
    const user = await prisma.user.findUnique({
      where: {
        id,
      }
    })

    if(!user){
      throw new NotFoundException(`Usuário com ID ${id} não encontrado`);
    }

    return user
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return updateUserDto
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
