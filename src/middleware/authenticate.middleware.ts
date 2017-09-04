import { InsufficientPrivilegesException } from "../exception/forbidden-exception/insufficient-privileges.exception";
import * as passport from "passport";
import { Response } from "express";
import { HttpException } from "@nestjs/core";
import { HttpStatus, Middleware, NestMiddleware, Next } from "@nestjs/common";
import { ExtractJwt, StrategyOptions, Strategy as JwtStrategy } from "passport-jwt";


@Middleware()
export class AuthenticateMiddleware implements NestMiddleware {
    public resolve(roles: string[]): (req, res, next) => void {
        return (req, res: Response, next) => {
            // all authenticate logic should be here
            // Stub example
            let token = req["token"];
            let userId = token.userId;

            if (userId % 2) {
                let userRoles = ["user"];
                throw new InsufficientPrivilegesException({ userRoles, requiredRoles: roles });
            }

            next();
        };
    }
}
