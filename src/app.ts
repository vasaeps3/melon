import "reflect-metadata";

import * as express from "express";
import * as bodyParser from "body-parser";
import { NestFactory } from "@nestjs/core";
import { Request, Response } from "express";

import { sequelize } from "./db/db";
import { ApplicationModule } from "./domain/app.module";


const PORT = 3000;
const instance = express();
instance.use(bodyParser.json());

sequelize.sync({ force: false })
    .then(() => {
        console.log("Connect to BD");
    })
    .catch((error: Error) => {
        console.log(error.message);
    });

const app = NestFactory.create(ApplicationModule, instance);
app.listen(PORT, () => console.log(`Application is listening on port ${PORT}`));
