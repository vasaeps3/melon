import { Instance } from "sequelize";

import { Category } from "./category.entity";


export interface CategoryInstance extends Instance<Category> {
    dataValues: Category;
}
