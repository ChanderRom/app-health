import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { AppHealthDeletedApplitacionLanguagesEvent } from './app-health-deleted-applitacion-languages.event';

@EventsHandler(AppHealthDeletedApplitacionLanguagesEvent)
export class AppHealthDeletedApplitacionLanguagesEventHandler implements IEventHandler<AppHealthDeletedApplitacionLanguagesEvent>
{
    handle(event: AppHealthDeletedApplitacionLanguagesEvent): void
    {
        // console.log('DeletedApplitacionLanguagesEvent: ', event);
    }
}