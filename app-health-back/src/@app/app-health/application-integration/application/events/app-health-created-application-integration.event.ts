export class AppHealthCreatedApplicationIntegrationEvent
{
    constructor(
        public readonly id: string,
        public readonly name: string,
        public readonly description: string,
        public readonly sourceApplicationId: string,
        public readonly apiInterfaceTypeId: string,
        public readonly interfaceNumbers: number,
        public readonly modality: string,
        public readonly score: number,
        public readonly documentations: string,
        public readonly createdAt: string,
        public readonly updatedAt: string,
        public readonly deletedAt: string,
    ) {}
}