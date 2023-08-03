import { AppHealthAddApplitacionLanguagesContextEvent, AppHealthIApplicationLanguageRepository } from '@app/app-health/application-language';
import { CQMetadata, QueryStatement } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';
import { EventPublisher } from '@nestjs/cqrs';

@Injectable()
export class AppHealthDeleteApplitacionLanguagesService
{
    constructor(
        private readonly publisher: EventPublisher,
        private readonly repository: AppHealthIApplicationLanguageRepository,
    ) {}

    async main(
        queryStatement?: QueryStatement,
        constraint?: QueryStatement,
        cQMetadata?: CQMetadata,
    ): Promise<void>
    {
        // get objects to delete
        const applitacionLanguages = await this.repository.get({
            queryStatement,
            constraint,
            cQMetadata,
        });

        if (applitacionLanguages.length === 0) return;

        await this.repository.delete({
            queryStatement,
            constraint,
            cQMetadata,
            deleteOptions: cQMetadata?.repositoryOptions,
        });

        // create AddApplitacionLanguagesContextEvent to have object wrapper to add event publisher functionality
        // insert EventBus in object, to be able to apply and commit events
        const applitacionLanguagesRegistered = this.publisher.mergeObjectContext(
            new AppHealthAddApplitacionLanguagesContextEvent(applitacionLanguages),
        );

        applitacionLanguagesRegistered.deleted(); // apply event to model events
        applitacionLanguagesRegistered.commit(); // commit all events of model
    }
}