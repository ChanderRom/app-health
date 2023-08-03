import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { AppHealthCreatedApllicationsEvent } from './app-health-created-apllications.event';

@EventsHandler(AppHealthCreatedApllicationsEvent)
export class AppHealthCreatedApllicationsEventHandler implements IEventHandler<AppHealthCreatedApllicationsEvent>
{
    handle(event: AppHealthCreatedApllicationsEvent): void
    {
        // console.log('CreatedApllicationsEvent: ', event);
    }
}