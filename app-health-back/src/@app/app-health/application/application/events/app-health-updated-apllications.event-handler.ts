import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { AppHealthUpdatedApllicationsEvent } from './app-health-updated-apllications.event';

@EventsHandler(AppHealthUpdatedApllicationsEvent)
export class AppHealthUpdatedApllicationsEventHandler implements IEventHandler<AppHealthUpdatedApllicationsEvent>
{
    handle(event: AppHealthUpdatedApllicationsEvent): void
    {
        // console.log('AppHealthUpdatedApllicationsEvent: ', event);
    }
}