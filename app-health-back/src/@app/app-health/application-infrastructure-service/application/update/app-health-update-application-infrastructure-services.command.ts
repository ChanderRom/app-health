import { QueryStatement } from '@aurorajs.dev/core';
import { CQMetadata } from '@aurorajs.dev/core';

export class AppHealthUpdateApplicationInfrastructureServicesCommand
{
    constructor(
        public readonly payload: {
            id?: string;
            applicationId?: string;
            infrastructureServiceId?: string;
            avarageCostPerYear?: number;
            score?: number;
        },
        public readonly queryStatement?: QueryStatement,
        public readonly constraint?: QueryStatement,
        public readonly cQMetadata?: CQMetadata,
    ) {}
}