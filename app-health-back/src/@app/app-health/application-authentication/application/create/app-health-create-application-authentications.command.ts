import { CQMetadata } from '@aurorajs.dev/core';

export class  AppHealthCreateApplicationAuthenticationsCommand
{
    constructor(
        public readonly payload: {
            id: string;
            applicationId: string;
            authenticationInterfaceId: string;
            totalUsers: number;
            score: number;
        } [],
        public readonly cQMetadata?: CQMetadata,
    ) {}
}