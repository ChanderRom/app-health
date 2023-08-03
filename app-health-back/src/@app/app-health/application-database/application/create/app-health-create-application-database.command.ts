import { CQMetadata } from '@aurorajs.dev/core';

export class AppHealthCreateApplicationDatabaseCommand
{
    constructor(
        public readonly payload: {
            id: string;
            applicationId: string;
            databaseId: string;
            applicationInfrastructureServiceId: string;
            version: string;
            size: number;
            score: number;
            totalCollectionTables: number;
            totalFields: number;
        },
        public readonly cQMetadata?: CQMetadata,
    ) {}
}