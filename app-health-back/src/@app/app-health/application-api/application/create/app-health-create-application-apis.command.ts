import { CQMetadata } from '@aurorajs.dev/core';

export class  AppHealthCreateApplicationApisCommand
{
    constructor(
        public readonly payload: {
            id: string;
            applicationId: string;
            apiInterfaceTypeId: string;
            score: number;
            documentations?: string;
            requestsPerDay: number;
        } [],
        public readonly cQMetadata?: CQMetadata,
    ) {}
}