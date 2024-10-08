import { IsNumber, IsOptional, IsString } from "class-validator";

export class CreateProductDto {

    @IsString()
    name: string;

    @IsNumber()
    price: number;

    @IsString()
    description: string;

    @IsNumber()
    quantity: number;
    
    @IsOptional()
    @IsString()
    img: string;
}
