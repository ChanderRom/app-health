export class AppHealthCreatedApplicationAuthenticationEvent
{
    constructor(
        public readonly id: string,
        public readonly applicationId: string,
        public readonly authenticationInterfaceId: string,
        public readonly applicationInfrastructureServiceId: string,
        public readonly totalUsers: number,
        public readonly score: number,
        public readonly createdAt: string,
        public readonly updatedAt: string,
        public readonly deletedAt: string,
    ) {}
}