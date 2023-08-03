import { SmallintValueObject, ValidationRules } from '@aurorajs.dev/core';

export class AppHealthAuthenticationInterfaceCodeQualityScore extends SmallintValueObject
{
    public readonly type: string = 'AuthenticationInterfaceCodeQualityScore';

    constructor(value: number, validationRules: ValidationRules = {})
    {
        super(value, Object.assign({
            name       : 'AuthenticationInterfaceCodeQualityScore',
            nullable   : false,
            undefinable: false,
            maxLength  : 6,
            unsigned   : true,
        }, validationRules));
    }
}