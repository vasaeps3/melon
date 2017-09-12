import { NotFoundException } from "../../exception/not-found-exception.ts/not-found.exception";


export class UserNotFoundException extends NotFoundException {

    public constructor() {
        super("User not found");
    }

}
