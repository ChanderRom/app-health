import { AppHealthUpdatedApplicationEvent } from './app-health-updated-application.event';

export class AppHealthUpdatedApllicationsEvent
{
    constructor(
        public readonly apllications: AppHealthUpdatedApplicationEvent[],
    ) {}
}