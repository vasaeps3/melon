import * as passport from "passport";
import { Middleware, NestMiddleware, Next } from "@nestjs/common";
import { ExtractJwt, StrategyOptions, Strategy as JwtStrategy } from "passport-jwt";


let users = [
    { id: 0, username: "test", password: "test" }
];
let opts: StrategyOptions = {
    jwtFromRequest: ExtractJwt.fromHeader("x-auth"),
    secretOrKey: "secret42",
};

passport.use(new JwtStrategy(opts, function (jwtpayload, done) {
    done(null, users[0]);
}));

@Middleware()
export class AuthMiddleware implements NestMiddleware {
    public resolve(): (req, res, next) => void {
        return passport.authenticate("jwt", { assignProperty: "token" });
    }
}
