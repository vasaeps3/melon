import * as Bluebird from "bluebird";
import { HttpException } from "@nestjs/core";
import { Component } from "@nestjs/common";
import { Transaction } from "sequelize";

import { models, sequelize } from "../../db/db";
import { CategoryInstance } from "./category.instance";
import { Category } from "./category.entity";


@Component()
export class CategoryService {

    public getAll(): Bluebird<CategoryInstance[]> {
        return models.category.findAll();
    }

    public getById(id: number): Bluebird<CategoryInstance> {
        return models.category.findById(id);
    }

    public create(category: Category): Bluebird<CategoryInstance> {
        return models.category.create(category);
    }
}
