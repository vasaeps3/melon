import { dbConfig } from "./config";
import * as fs from "fs";
import * as path from "path";
import * as SequelizeStatic from "sequelize";

import {CategoryAttributes, CategoryInstance} from "./interfaces/category.interface";
import { Sequelize } from "sequelize";

export interface SequelizeModels {
    Category: SequelizeStatic.Model<CategoryInstance, CategoryAttributes>;
}

class DataBase {
    private _basename: string;
    private _models: SequelizeModels;
    private _sequelize: Sequelize;

    constructor() {
        let config = dbConfig.getDatabaseConfig();
        this._sequelize = new SequelizeStatic(config.database, config.username, config.password, config);

        this._models = ({} as any);

        let dir = path.join(__dirname, "models");
        fs.readdirSync(dir).forEach(file => {
            const modelDir = path.join(dir, file);
            let model = this._sequelize.import(modelDir);
            this._models[(model as any).name] = model;
        });

        Object.keys(this._models).forEach((modelName: string) => {
            if (typeof this._models[modelName].associate === "function") {
                this._models[modelName].associate(this._models);
            }
        });
    }
    public getModels() {
        return this._models;
    }
    public getSequelize() {
        return this._sequelize;
    }
}

const database = new DataBase();
export const sequelize = database.getSequelize();
export const models = database.getModels();
