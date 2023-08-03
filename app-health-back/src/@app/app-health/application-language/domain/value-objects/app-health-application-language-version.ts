import { StringValueObject, ValidationRules } from '@aurorajs.dev/core';

export class AppHealthApplicationLanguageVersion extends StringValueObject
{
    public readonly type: string = 'ApplicationLanguageVersion';

    constructor(value: string, validationRules: ValidationRules = {})
    {
        super(value, Object.assign({
            name       : 'ApplicationLanguageVersion',
            nullable   : false,
            undefinable: false,
            maxLength  : 20,
        }, validationRules));
    }
}