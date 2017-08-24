import {Instance} from "sequelize";

export interface CategoryAttributes {
    id: number;
    name: string;
    description: string;
}

export interface CategoryInstance extends Instance<CategoryAttributes> {
    dataValues: CategoryAttributes;
}
