import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { AppHealthCreatedApplitacionLanguagesEvent } from './app-health-created-applitacion-languages.event';

@EventsHandler(AppHealthCreatedApplitacionLanguagesEvent)
export class AppHealthCreatedApplitacionLanguagesEventHandler implements IEventHandler<AppHealthCreatedApplitacionLanguagesEvent>
{
    handle(event: AppHealthCreatedApplitacionLanguagesEvent): void
    {
        // console.log('CreatedApplitacionLanguagesEvent: ', event);
    }
}