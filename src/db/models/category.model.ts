import * as SequelizeStatic from "sequelize";
import {DataTypes, Sequelize} from "sequelize";
import {CategoryAttributes, CategoryInstance} from "../interfaces/category.interface";

export default function(sequelize: Sequelize, dataTypes: DataTypes): SequelizeStatic.Model<CategoryInstance, CategoryAttributes> {
    let Category = sequelize.define<CategoryInstance, CategoryAttributes>("category", {
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
    return Category;
}
