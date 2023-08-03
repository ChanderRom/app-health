import { AppHealthApplicationResponse } from '@app/app-health/application';
import { AppHealthDatabaseResponse } from '@app/app-health/database';

export class AppHealthApplicationDatabaseResponse
{
    constructor(
        public readonly id: string,
        public readonly applicationId: string,
        public readonly databaseId: string,
        public readonly version: string,
        public readonly size: number,
        public readonly score: number,
        public readonly totalCollectionTables: number,
        public readonly totalFields: number,
        public readonly createdAt: string,
        public readonly updatedAt: string,
        public readonly deletedAt: string,
        public readonly application: AppHealthApplicationResponse,
        public readonly database: AppHealthDatabaseResponse,
    ) {}
}