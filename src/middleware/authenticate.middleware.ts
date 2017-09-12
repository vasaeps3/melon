import * as passport from "passport";
import { Response } from "express";
import { HttpException } from "@nestjs/core";
import { HttpStatus, Middleware, NestMiddleware, Next } from "@nestjs/common";
import { ExtractJwt, StrategyOptions, Strategy as JwtStrategy } from "passport-jwt";

import { AuthService } from "../modules/auth/auth.service";
import { InsufficientPrivilegesException } from "../exception/forbidden-exception/insufficient-privileges.exception";

@Middleware()
export class AuthenticateMiddleware implements NestMiddleware {

    public constructor(protected authService: AuthService) { }

    public resolve(roles: string[]): (req, res, next) => void {
        return async (req, res: Response, next) => {

            let token = req["token"];
            let userId = token.user; // test token = { user: 1 }

            let userRoles = await this.authService.getRolesByUserId(userId);
            console.log("-------AuthenticateMiddleware LOG START---------");
            console.log(userRoles);
            console.log("-------AuthenticateMiddleware LOG END-----------");

            // if (userId % 2) {
            //     let userRoles = ["user"];
            //     throw new InsufficientPrivilegesException({ userRoles, requiredRoles: roles });
            // }

            next();
        };
    }
}
