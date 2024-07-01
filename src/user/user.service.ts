import { Injectable, NotFoundException } from '@nestjs/common';
import { UpdateUserDto } from './dto/update-user.dto';
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

  async update(id: number, updateUserDto: UpdateUserDto) {

    await prisma.user.update({

      where: {id},
      data: updateUserDto

    })

    return updateUserDto
  }

  async remove(id: number) {

    try {

      const user = await prisma.user.delete({
        where: {
          id,
        },
      });

      return user;

    } catch (error) {

      if (error.code === 'P2025') { 
        throw new NotFoundException(`Usuário com ID ${id} não encontrado`);
      }
      throw error;

    }
  }

  
  }

