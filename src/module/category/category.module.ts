import { Module } from "@nestjs/common";
import { CategoryController } from "./category.controller";
import { CategoryService } from "./category.service";

@Module({
    controllers: [CategoryController],
    components: [CategoryService],
})

export class CategoryModule { }
