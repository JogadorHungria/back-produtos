import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { prisma } from 'src/database/PrismaServiceDataBase';
import { ExceptionsHandler } from '@nestjs/core/exceptions/exceptions-handler';

@Injectable()
export class ProductService {

  async create( createProductDto: CreateProductDto) {

     const product = await prisma.product.create({
      data:{ ...createProductDto}
     })
    
    return product;
    
  }

  async findAll() {

    return await prisma.product.findMany({orderBy: {id: "asc"}})

  }

  async findOne(id: number) {
    return await prisma.product.findUnique({
      where :{
        id:id
      }
    });
  }

  async update(id: number, updateProductDto: UpdateProductDto) {

    const product =  await prisma.product.update({

      where: {id},
      data: updateProductDto

    })

    return product
  }

  async remove(id: number) {


   const product = await this.findOne(id)

   if(!product){

    throw new NotFoundException(`Product with ID ${id} not found`);

   }else{

    await prisma.product.delete({

      where:{
        id:id
      }

    });

    return

   }
  }
}
