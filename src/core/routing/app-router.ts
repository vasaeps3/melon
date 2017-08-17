import * as _ from "lodash";
import { Express, Router } from "express";

import { Constructor } from "../util/types";
import { ApiMethod, ApiMethodOptions } from "../decorator/api-method";
import { Controller, ControllerOptions } from "../decorator/controller";


export class AppRouter {

    public constructor(private app: Express) {

    }

    public setupControllers(controllerTypes: Constructor[]) {
        _.each(controllerTypes, controllerType => {
            let router = Router();
            let controllerOptions: ControllerOptions = Controller.getMetadata(controllerType);
            let controller = new controllerType();

            console.warn(`${controllerType.name}`);

            for (let methodName of Object.getOwnPropertyNames(controllerType.prototype)) {
                let apiMethodOptions: ApiMethodOptions = ApiMethod.getMetadata(controllerType, methodName);

                if (!apiMethodOptions) {
                    continue;
                }

                let path: string = controllerOptions.baseUrl + apiMethodOptions.url;
                console.warn(` - ${_.upperCase(apiMethodOptions.method)} ${path} (${methodName})`);

                router[apiMethodOptions.method](path, controller[methodName].bind(controller));
            }

            this.app.use(router);
        });
    }

}
