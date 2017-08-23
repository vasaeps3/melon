import "reflect-metadata";

import * as express from "express";
import { NestFactory } from "@nestjs/core";
import { Request, Response } from "express";

import { ApplicationModule } from "./module/app.module";


const PORT = 3000;
const instance = express();
const app = NestFactory.create(ApplicationModule, instance);
app.listen(PORT, () => console.log(`Application is listening on port ${PORT}`));
