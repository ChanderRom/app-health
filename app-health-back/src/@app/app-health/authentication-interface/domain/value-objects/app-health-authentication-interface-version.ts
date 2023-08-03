import { StringValueObject, ValidationRules } from '@aurorajs.dev/core';

export class AppHealthAuthenticationInterfaceVersion extends StringValueObject
{
    public readonly type: string = 'AuthenticationInterfaceVersion';

    constructor(value: string, validationRules: ValidationRules = {})
    {
        super(value, Object.assign({
            name       : 'AuthenticationInterfaceVersion',
            nullable   : false,
            undefinable: false,
            maxLength  : 20,
        }, validationRules));
    }
}