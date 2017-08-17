import { DecoratorFactory } from "./base";


const CONTROLLER_METADATA_KEY = "controller-options";
const DEFAULT_CONTROLLER_OPTIONS: ControllerOptions = {
    baseUrl: ""
};

export interface ControllerOptions {
    baseUrl?: string;
}

export const Controller = DecoratorFactory.createClassDecorator<ControllerOptions>(CONTROLLER_METADATA_KEY, DEFAULT_CONTROLLER_OPTIONS);
