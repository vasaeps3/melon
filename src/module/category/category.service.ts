import { Error } from "tslint/lib/error";
import { HttpException } from "@nestjs/core";
import { Component } from "@nestjs/common";

import {models, sequelize} from "../../db/db";
import {CategoryAttributes, CategoryInstance } from "../../db/interfaces/category.interface";
import {Transaction} from "sequelize";

@Component()
export class CategoryService {
    private caregories = [
        { id: 10, name: "Melon"},
        { id: 20, name: "Apple"},
        { id: 30, name: "Orange"}
    ];

    public getAllCategories(): Promise<Array<CategoryInstance>> {
        console.log(models);
        console.log(2222);

        let promise = new Promise<Array<CategoryInstance>>((resolve: Function, reject: Function) => {
            sequelize.transaction((t: Transaction) => {
                return models.Category.findAll().then((products: Array<CategoryInstance>) => {
                    console.log(1111);
                    resolve(products);
                });
                // return models.Category.findAll({attributes: ['id']}).then((category: Array<CategoryInstance>) => {
                //     // if (category){
                //     //     console.log(category);
                //     // } else {
                //     //     console.log("Category not found!");
                //     // }
                //     resolve(category);
                // }).catch((error: Error) => {
                //     reject(error);
                // });
            });
        });
        return promise;
    }

    public getCategory(id: number) {
        const category = this.caregories.find(u => u.id === id);
        if (!category) {
            throw new HttpException("Category not found", 404);
        }
        return Promise.resolve(category);
    }
}
