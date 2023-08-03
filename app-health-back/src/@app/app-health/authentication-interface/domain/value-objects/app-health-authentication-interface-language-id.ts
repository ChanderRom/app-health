import { DataValueObject, UuidValueObject, ValidationRules } from '@aurorajs.dev/core';

export class AppHealthAuthenticationInterfaceLanguageId extends UuidValueObject
{
    public readonly type: string = 'AuthenticationInterfaceLanguageId';

    constructor(value: string, validationRules: ValidationRules = {}, data: DataValueObject = {})
    {
        super(value, Object.assign({
            name       : 'AuthenticationInterfaceLanguageId',
            nullable   : false,
            undefinable: false,
            length     : 36,
        }, validationRules), data);
    }
}