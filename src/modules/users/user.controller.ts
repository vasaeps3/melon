import { Response, Request } from "express";
import { Body, Controller, Get, HttpStatus, Param, Post, Req, Res } from "@nestjs/common";

import { User } from './user.entity';
import { UserService } from "./user.service";


@Controller("users")
export class UserController {

    public constructor(
        protected userService: UserService) {
    }

    @Get()
    public getAll( @Res() res: Response) {
        this.userService.getAll()
            .then((users: User[]) => {
                res.status(HttpStatus.OK).json(users);
            });
    }

    @Get("/:id")
    public getById( @Res() res: Response, @Param("id") id: string) {
        this.userService.getById(+id)
            .then((user) => res.status(HttpStatus.OK).json(user));
    }

    @Post()
    public create( @Res() res: Response, @Body() user: User) {
        console.log(user);
        this.userService.add(user)
            .then((createdUsers) => res.status(HttpStatus.OK).json(createdUsers));
    }

}
