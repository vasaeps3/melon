import * as fs from "fs";
import * as path from "path";
import * as SequelizeStatic from "sequelize";
import { Sequelize } from "sequelize";

import { dbConfig } from "./config";
import { CategoryModel } from "../domain/categories/category.model";


export interface Db {
    category: CategoryModel;
}

class Database {
    private _basename: string;
    private _models: Db;
    private _sequelize: Sequelize;

    constructor() {
        let config = dbConfig.getDatabaseConfig();
        this._sequelize = new SequelizeStatic(config.database, config.username, config.password, config.config);
        this._models = ({} as any);

        let dir = path.join(__dirname, "..", "domain");
        fs.readdirSync(dir).filter((modelDir: string) => {
            return !~modelDir.indexOf(".js");
        }).forEach((modelDir: string) => {
            modelDir = path.join(dir, modelDir);
            fs.readdirSync(modelDir).filter((file: string) => {
                return file.endsWith("model.js");
            }).forEach((file: string) => {
                file = path.join(modelDir, file);
                let model = this._sequelize.import(file);
                this._models[(model as any).name] = model;
            });
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

const database = new Database();
export const sequelize = database.getSequelize();
export const models = database.getModels();
