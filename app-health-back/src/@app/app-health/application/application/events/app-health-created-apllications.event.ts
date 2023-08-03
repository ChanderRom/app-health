import { AppHealthCreatedApplicationEvent } from './app-health-created-application.event';

export class AppHealthCreatedApllicationsEvent
{
    constructor(
        public readonly apllications: AppHealthCreatedApplicationEvent[],
    ) {}
}