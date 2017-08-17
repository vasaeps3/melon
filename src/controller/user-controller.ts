import { Request, Response, NextFunction } from "express";

import { ApiMethod } from "../core/decorator/api-method";
import { Controller } from "../core/decorator/controller";
import { HttpMethod } from "../core/http/http-method";


@Controller({
    baseUrl: "/users"
})
export class UserController {

    @ApiMethod({
        method: HttpMethod.GET
    })
    public getAll(req: Request, res: Response, next: NextFunction) {
        return res.send("bla-bla");
    }

}
