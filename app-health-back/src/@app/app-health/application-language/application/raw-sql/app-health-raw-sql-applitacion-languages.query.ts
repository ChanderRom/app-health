import { CQMetadata } from '@aurorajs.dev/core';

export class AppHealthRawSQLApplitacionLanguagesQuery
{
    constructor(
        public readonly rawSQL?: string,
        public readonly cQMetadata?: CQMetadata,
    ) {}
}