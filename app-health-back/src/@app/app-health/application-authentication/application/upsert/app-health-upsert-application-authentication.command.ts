import { CQMetadata } from '@aurorajs.dev/core';

export class AppHealthUpsertApplicationAuthenticationCommand
{
    constructor(
        public readonly payload: {
            id: string;
            applicationId?: string;
            authenticationInterfaceId?: string;
            totalUsers?: number;
            score?: number;
        },
        public readonly cQMetadata?: CQMetadata,
    ) {}
}