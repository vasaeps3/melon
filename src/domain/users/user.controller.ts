import { Response } from "express";
import { Controller, Get, Post, Res, HttpStatus, Param, Body } from "@nestjs/common";

import { UserService } from "./user.service";


@Controller("users")
export class UserController {

    public constructor(
        protected userService: UserService) {
    }

    @Get()
    public getAllUsers( @Res() res: Response) {
        this.userService.getAllUsers()
            .then((users) => res.status(HttpStatus.OK).json(users));
    }

    @Get("/:id")
    public getUser( @Res() res: Response, @Param("id") id: number) {
        this.userService.getUser(+id)
            .then((user) => res.status(HttpStatus.OK).json(user));
    }

    @Post()
    public addUser( @Res() res, @Body("user") user) {
        this.userService.addUser(user)
            .then((msg) => res.status(HttpStatus.CREATED).json(msg));
    }

}
