import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { AppHealthDeletedApllicationsEvent } from './app-health-deleted-apllications.event';

@EventsHandler(AppHealthDeletedApllicationsEvent)
export class AppHealthDeletedApllicationsEventHandler implements IEventHandler<AppHealthDeletedApllicationsEvent>
{
    handle(event: AppHealthDeletedApllicationsEvent): void
    {
        // console.log('DeletedApllicationsEvent: ', event);
    }
}