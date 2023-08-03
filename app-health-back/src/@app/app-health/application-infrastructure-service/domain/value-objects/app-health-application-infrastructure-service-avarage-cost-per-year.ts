import { IntValueObject, ValidationRules } from '@aurorajs.dev/core';

export class AppHealthApplicationInfrastructureServiceAvarageCostPerYear extends IntValueObject
{
    public readonly type: string = 'ApplicationInfrastructureServiceAvarageCostPerYear';

    constructor(value: number, validationRules: ValidationRules = {})
    {
        super(value, Object.assign({
            name       : 'ApplicationInfrastructureServiceAvarageCostPerYear',
            nullable   : false,
            undefinable: false,
            maxLength  : 10,
            unsigned   : true,
        }, validationRules));
    }
}