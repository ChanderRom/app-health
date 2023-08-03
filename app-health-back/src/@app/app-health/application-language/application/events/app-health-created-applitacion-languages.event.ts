import { AppHealthCreatedApplicationLanguageEvent } from './app-health-created-application-language.event';

export class AppHealthCreatedApplitacionLanguagesEvent
{
    constructor(
        public readonly applitacionLanguages: AppHealthCreatedApplicationLanguageEvent[],
    ) {}
}