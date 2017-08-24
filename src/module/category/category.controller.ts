import { Response } from "express";
import { Controller, Get, Res, HttpStatus, Param } from "@nestjs/common";
import { CategoryService } from "./category.service";
import {CategoryAttributes, CategoryInstance} from "../../db/interfaces/category.interface";

@Controller("categories")
export class CategoryController {
    public constructor (
        private categoryService: CategoryService) { }

    @Get()
    public getAllCategories(@Res() res: Response) {
        this.categoryService.getAllCategories()
            .then((categories: Array<CategoryInstance>) => {
                res.status(HttpStatus.OK).json(categories);
            });
    }
    @Get("/:id")
    public getCategory(@Res() res: Response, @Param("id") id: number) {
        this.categoryService.getCategory(+id)
            .then((category) => res.status(HttpStatus.OK).json(category));
    }
}
