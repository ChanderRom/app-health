import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { AppHealthUpdatedApplitacionLanguagesEvent } from './app-health-updated-applitacion-languages.event';

@EventsHandler(AppHealthUpdatedApplitacionLanguagesEvent)
export class AppHealthUpdatedApplitacionLanguagesEventHandler implements IEventHandler<AppHealthUpdatedApplitacionLanguagesEvent>
{
    handle(event: AppHealthUpdatedApplitacionLanguagesEvent): void
    {
        // console.log('AppHealthUpdatedApplitacionLanguagesEvent: ', event);
    }
}