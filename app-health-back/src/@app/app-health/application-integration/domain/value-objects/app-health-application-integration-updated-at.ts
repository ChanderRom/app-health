import { DataValueObject, TimestampValueObject, ValidationRules } from '@aurorajs.dev/core';

export class AppHealthApplicationIntegrationUpdatedAt extends TimestampValueObject
{
    public readonly type: string = 'ApplicationIntegrationUpdatedAt';

    constructor(value: string | DataValueObject, validationRules: ValidationRules = {}, data: DataValueObject = {})
    {
        super(value, Object.assign({
            name       : 'ApplicationIntegrationUpdatedAt',
            nullable   : true,
            undefinable: true,
        }, validationRules), data);
    }
}