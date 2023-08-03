import { AppHealthDeletedApplicationLanguageEvent } from './app-health-deleted-application-language.event';

export class AppHealthDeletedApplitacionLanguagesEvent
{
    constructor(
        public readonly applitacionLanguages: AppHealthDeletedApplicationLanguageEvent[],
    ) {}
}