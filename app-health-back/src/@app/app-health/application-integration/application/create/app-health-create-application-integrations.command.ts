import { CQMetadata } from '@aurorajs.dev/core';

export class  AppHealthCreateApplicationIntegrationsCommand
{
    constructor(
        public readonly payload: {
            id: string;
            name: string;
            description?: string;
            sourceApplicationId: string;
            apiInterfaceTypeId: string;
            interfaceNumbers: number;
            modality: string;
            score: number;
            documentations?: string;
        } [],
        public readonly cQMetadata?: CQMetadata,
    ) {}
}