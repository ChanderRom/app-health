import { IntValueObject, ValidationRules } from '@aurorajs.dev/core';

export class AppHealthApplicationDatabaseTotalCollectionTables extends IntValueObject
{
    public readonly type: string = 'ApplicationDatabaseTotalCollectionTables';

    constructor(value: number, validationRules: ValidationRules = {})
    {
        super(value, Object.assign({
            name       : 'ApplicationDatabaseTotalCollectionTables',
            nullable   : false,
            undefinable: false,
            maxLength  : 10,
            unsigned   : true,
        }, validationRules));
    }
}