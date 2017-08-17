import { Constructor } from "../util/types";


function createClassDecorator<T>(key, defaults) {
    let decorator: any = (options: T) => {
        return function (target: Object): void {
            let finalOptions: T = Object.assign({}, defaults, options);

            Reflect.defineMetadata(key, finalOptions, target);
        };
    };

    decorator.getMetadata = (objectType: Constructor) => {
        return Reflect.getMetadata(key, objectType);
    };

    return decorator;
}

function createMethodDecorator<T>(key, defaults) {
    let decorator: any = (options: T) => {
        return function (target: Object, propertyKey: string, descriptor: TypedPropertyDescriptor<any>): void {
            let finalOptions: T = Object.assign({}, defaults, options);

            Reflect.defineMetadata(key, finalOptions, target, propertyKey);
        };
    };

    decorator.getMetadata = (target: Constructor, propertyKey: keyof T) => {
        return Reflect.getMetadata(key, target.prototype, propertyKey);
    };

    return decorator;
}

export const DecoratorFactory = {
    createClassDecorator,
    createMethodDecorator
};
