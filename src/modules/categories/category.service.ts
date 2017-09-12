import { Component } from "@nestjs/common";
import { Repository } from "typeorm";

import { Service } from "../database/service.interface";
import { Category } from "./category.entity";
import { DatabaseService } from "../database/database.service";


@Component()
export class CategoryService implements Service<Category> {

    constructor(private databaseService: DatabaseService) {
    }

    private get repository(): Promise<Repository<Category>> {
        return this.databaseService.getRepository(Category);
    }

    public async add(category: Category): Promise<Category> {
        return (await this.repository).persist(category);
    }

    public async addAll(categories: Category[]): Promise<Category[]> {
        return (await this.repository).persist(categories);
    }

    public async getAll(): Promise<Category[]> {
        return (await this.repository).find();
    }

    public async getById(id: number): Promise<Category> {
        return (await this.repository).findOneById(id);
    }

    public async update(category: Category): Promise<Category> {
        return (await this.repository).persist(category);
    }

    public async remove(category: Category): Promise<Category> {
        return (await this.repository).remove(category);
    }
}
