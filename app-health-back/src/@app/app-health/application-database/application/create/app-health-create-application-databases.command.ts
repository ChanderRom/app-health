import { CQMetadata } from '@aurorajs.dev/core';

export class  AppHealthCreateApplicationDatabasesCommand
{
    constructor(
        public readonly payload: {
            id: string;
            applicationId: string;
            databaseId: string;
            version: string;
            size: number;
            score: number;
            totalCollectionTables: number;
            totalFields: number;
        } [],
        public readonly cQMetadata?: CQMetadata,
    ) {}
}