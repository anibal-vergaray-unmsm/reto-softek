import { translateSwapiFields } from 'src/utils/translate.util';

export const Translate = (): MethodDecorator => {
  return (
    _target: any,
    _propertyKey: string | symbol,
    descriptor: PropertyDescriptor,
  ) => {
    const originalMethod = descriptor.value;

    descriptor.value = async function (...args: any[]) {
      const response = await originalMethod.apply(this, args);
      return translateSwapiFields(response);
    };

    return descriptor;
  };
};
