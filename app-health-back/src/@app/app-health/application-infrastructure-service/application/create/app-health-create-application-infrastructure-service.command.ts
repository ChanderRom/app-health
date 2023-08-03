import { CQMetadata } from '@aurorajs.dev/core';

export class AppHealthCreateApplicationInfrastructureServiceCommand
{
    constructor(
        public readonly payload: {
            id: string;
            applicationId: string;
            infrastructureServiceId: string;
            avarageCostPerYear: number;
            score: number;
        },
        public readonly cQMetadata?: CQMetadata,
    ) {}
}