import { AppHealthDeletedApplicationEvent } from './app-health-deleted-application.event';

export class AppHealthDeletedApllicationsEvent
{
    constructor(
        public readonly apllications: AppHealthDeletedApplicationEvent[],
    ) {}
}