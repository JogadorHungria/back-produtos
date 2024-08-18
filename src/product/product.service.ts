import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { prisma } from 'src/database/PrismaServiceDataBase';

@Injectable()
export class ProductService {

  async create( createProductDto: CreateProductDto) {

     const product = await prisma.product.create({
      data:{ ...createProductDto}
     })
    
    return product;
    
  }



  findAll() {
    return `This action returns all product`;
  }

  findOne(id: number) {
    return `This action returns a #${id} product`;
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    return `This action updates a #${id} product`;
  }

  remove(id: number) {
    return `This action removes a #${id} product`;
  }
}
