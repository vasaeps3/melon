import { ForbiddenException } from "./forbidden.exception";


export class InsufficientPrivilegesException extends ForbiddenException {
    constructor({ userRoles, requiredRoles }: { userRoles: string[], requiredRoles: string[] }) {
        super(`Insufficient privileges. Needed [${requiredRoles}], but user has [${userRoles}].`);
    }
}
