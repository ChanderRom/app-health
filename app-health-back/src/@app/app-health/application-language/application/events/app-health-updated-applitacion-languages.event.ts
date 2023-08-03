import { AppHealthUpdatedApplicationLanguageEvent } from './app-health-updated-application-language.event';

export class AppHealthUpdatedApplitacionLanguagesEvent
{
    constructor(
        public readonly applitacionLanguages: AppHealthUpdatedApplicationLanguageEvent[],
    ) {}
}