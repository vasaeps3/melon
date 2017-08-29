import * as SequelizeStatic from "sequelize";
import { DataTypes, Sequelize, Model } from "sequelize";

import { CategoryInstance } from "./category.instance";
import { Category } from "./category.entity";


export interface CategoryModel extends SequelizeStatic.Model<CategoryInstance, Category> {
}

export default function (sequelize: Sequelize, dataTypes: DataTypes): CategoryModel {
    return sequelize.define<CategoryInstance, Category>("category", {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: dataTypes.STRING,
            allowNull: false
        },
        description: {
            type: dataTypes.TEXT,
            allowNull: true
        }
    });
}
