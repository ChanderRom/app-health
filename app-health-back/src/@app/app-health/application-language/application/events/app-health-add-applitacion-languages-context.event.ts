import { AggregateRoot } from '@nestjs/cqrs';
import { AppHealthApplicationLanguage } from '../../domain/app-health-application-language.aggregate';
import { AppHealthCreatedApplicationLanguageEvent } from './app-health-created-application-language.event';
import { AppHealthCreatedApplitacionLanguagesEvent } from './app-health-created-applitacion-languages.event';
import { AppHealthUpdatedApplicationLanguageEvent } from './app-health-updated-application-language.event';
import { AppHealthUpdatedApplitacionLanguagesEvent } from './app-health-updated-applitacion-languages.event';
import { AppHealthDeletedApplicationLanguageEvent } from './app-health-deleted-application-language.event';
import { AppHealthDeletedApplitacionLanguagesEvent } from './app-health-deleted-applitacion-languages.event';

export class AppHealthAddApplitacionLanguagesContextEvent extends AggregateRoot
{
    constructor(
        public readonly aggregateRoots: AppHealthApplicationLanguage[] = [],
    )
    {
        super();
    }

    *[Symbol.iterator]()
    {
        for (const aggregateRoot of this.aggregateRoots) yield aggregateRoot;
    }

    created(): void
    {
        this.apply(
            new AppHealthCreatedApplitacionLanguagesEvent(
                this.aggregateRoots.map(applicationLanguage =>
                    new AppHealthCreatedApplicationLanguageEvent(
                        applicationLanguage.id.value,
                        applicationLanguage.applicationId.value,
                        applicationLanguage.languageId.value,
                        applicationLanguage.version.value,
                        applicationLanguage.score.value,
                        applicationLanguage.codeQualityScore.value,
                        applicationLanguage.createdAt?.value,
                        applicationLanguage.updatedAt?.value,
                        applicationLanguage.deletedAt?.value,
                    ),
                ),
            ),
        );
    }

    updated(): void
    {
        this.apply(
            new AppHealthUpdatedApplitacionLanguagesEvent(
                this.aggregateRoots.map(applicationLanguage =>
                    new AppHealthUpdatedApplicationLanguageEvent(
                        applicationLanguage.id.value,
                        applicationLanguage.applicationId.value,
                        applicationLanguage.languageId.value,
                        applicationLanguage.version.value,
                        applicationLanguage.score.value,
                        applicationLanguage.codeQualityScore.value,
                        applicationLanguage.createdAt?.value,
                        applicationLanguage.updatedAt?.value,
                        applicationLanguage.deletedAt?.value,
                    ),
                ),
            ),
        );
    }

    deleted(): void
    {
        this.apply(
            new AppHealthDeletedApplitacionLanguagesEvent(
                this.aggregateRoots.map(applicationLanguage =>
                    new AppHealthDeletedApplicationLanguageEvent(
                        applicationLanguage.id.value,
                        applicationLanguage.applicationId.value,
                        applicationLanguage.languageId.value,
                        applicationLanguage.version.value,
                        applicationLanguage.score.value,
                        applicationLanguage.codeQualityScore.value,
                        applicationLanguage.createdAt?.value,
                        applicationLanguage.updatedAt?.value,
                        applicationLanguage.deletedAt?.value,
                    ),
                ),
            ),
        );
    }
}