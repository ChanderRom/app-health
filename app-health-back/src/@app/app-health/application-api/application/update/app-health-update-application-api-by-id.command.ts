import { QueryStatement } from '@aurorajs.dev/core';
import { CQMetadata } from '@aurorajs.dev/core';

export class AppHealthUpdateApplicationApiByIdCommand
{
    constructor(
        public readonly payload: {
            id: string;
            applicationId?: string;
            apiInterfaceTypeId?: string;
            score?: number;
            documentations?: string;
            requestsPerDay?: number;
        },
        public readonly constraint?: QueryStatement,
        public readonly cQMetadata?: CQMetadata,
    ) {}
}