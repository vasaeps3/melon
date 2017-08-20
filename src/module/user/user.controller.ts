import { Response } from "express";
import { Controller, Get, Res, HttpStatus } from "@nestjs/common";

import { UsersService } from "./user.service";


@Controller("users")
export class UsersController {

    public constructor(
        protected userService: UsersService) { }

    @Get()
    public getAllUsers( @Res() res: Response) {
        this.userService.getAllUsers()
            .then((users) => res.status(HttpStatus.OK).json(users));
    }

}
