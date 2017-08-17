import "reflect-metadata";

import * as express from "express";
import { Request, Response } from "express";

import { AppRouter } from "./core/routing/app-router";
import { ApiMethod } from "./core/decorator/api-method";
import { Controller } from "./core/decorator/controller";
import { UserController } from "./controller/user-controller";


const PORT = 3088;
const app = express();
const appRouter = new AppRouter(app);
appRouter.setupControllers([UserController]);

app.get("/", function (req: Request, res: Response) {
  res.send("Hello World!");
});

app.listen(PORT, function () {
  console.log(`Server listening on port ${PORT}!`);
});
