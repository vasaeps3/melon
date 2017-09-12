import { Response, Request } from "express";
import { Body, Controller, Get, HttpStatus, Param, Post, Req, Res } from "@nestjs/common";

import { User } from "./user.entity";
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
        this.userService.add(user)
            .then((createdUsers) => {
                return res.status(HttpStatus.OK).json(createdUsers);
            });
    }

    @Get("/:id/roles")
    public async getRolesByUserId( @Param("id") id: string, @Res() res: Response) {
        let userRoles = await this.userService.getRolesByUserId(+id);
        res.status(HttpStatus.OK).json(userRoles);
    }

}
