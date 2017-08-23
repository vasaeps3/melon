import { HttpException } from "@nestjs/core";
import { Component } from "@nestjs/common";

@Component()
export class CategoryService {
    private caregories = [
        { id: 10, name: "Melon"},
        { id: 20, name: "Apple"},
        { id: 30, name: "Orange"}
    ];

    public getAllCategories() {
        return Promise.resolve(this.caregories);
    }

    public getCategory(id: number) {
        const category = this.caregories.find(u => u.id === id);
        if (!category) {
            throw new HttpException("Category not found", 404);
        }
        return Promise.resolve(category);
    }
}
