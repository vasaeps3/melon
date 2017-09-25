import { HttpStatus } from "@nestjs/common";
import { HttpException } from "@nestjs/core";


export class ForbiddenException extends HttpException {
    constructor(message: string) {
        super(message, HttpStatus.FORBIDDEN);
    }
}
