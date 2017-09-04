import "reflect-metadata";

import * as express from "express";
import * as bodyParser from "body-parser";
import { NestFactory } from "@nestjs/core";
import { Request, Response } from "express";

import { ApplicationModule } from "./modules/app/app.module";


const PORT = 3000;
const instance = express();
instance.use(bodyParser.json());

const app = NestFactory.create(ApplicationModule, instance);
app.listen(PORT, () => console.log(`Application is listening on port ${PORT}`));
