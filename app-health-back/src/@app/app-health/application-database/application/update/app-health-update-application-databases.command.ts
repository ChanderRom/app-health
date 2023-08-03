import { QueryStatement } from '@aurorajs.dev/core';
import { CQMetadata } from '@aurorajs.dev/core';

export class AppHealthUpdateApplicationDatabasesCommand
{
    constructor(
        public readonly payload: {
            id?: string;
            applicationId?: string;
            databaseId?: string;
            applicationInfrastructureServiceId?: string;
            version?: string;
            size?: number;
            score?: number;
            totalCollectionTables?: number;
            totalFields?: number;
        },
        public readonly queryStatement?: QueryStatement,
        public readonly constraint?: QueryStatement,
        public readonly cQMetadata?: CQMetadata,
    ) {}
}