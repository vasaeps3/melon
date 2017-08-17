import { HttpMethod } from "../http/http-method";
import { DecoratorFactory } from "./base";


const API_METHOD_METADATA_KEY = "api-method-options";
const DEFAULT_API_METHOD_OPTIONS: ApiMethodOptions = {
    url: "",
    method: HttpMethod.POST
};

export interface ApiMethodOptions {
    url?: string;
    method?: HttpMethod;
}

export const ApiMethod = DecoratorFactory.createMethodDecorator<ApiMethodOptions>(API_METHOD_METADATA_KEY, DEFAULT_API_METHOD_OPTIONS);
