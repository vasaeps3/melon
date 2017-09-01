import * as passport from "passport";
import { Middleware, NestMiddleware, Next } from "@nestjs/common";
import { ExtractJwt, StrategyOptions, Strategy as JwtStrategy } from "passport-jwt";

let users = [
    { id: 0, username: "test", password: "test" }
];
let opts: StrategyOptions = {
    jwtFromRequest: ExtractJwt.fromHeader("X-Auth"),
    secretOrKey: "secret42"
};

console.log("Hello from FILE");

passport.use(new JwtStrategy(opts, function (jwtpayload, done) {
    console.log("Hello from VERIFY");
    done(null, users[0]);
}));

@Middleware()
export class AuthMiddleware implements NestMiddleware {
    // public resolve(): (req, res, next) => void {
    //     console.log("Hello from RESOLVE");
    //     passport.authenticate("jwt");
    // }
    public resolve(): (req, res, next) => void {
        return passport.authenticate("jwt");
        // return (req, res, next) => {
        //     console.log("Request from ...AuthMiddleware");
        //     next();
    }
}
