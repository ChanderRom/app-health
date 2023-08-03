import { AppHealthAddApllicationsContextEvent, AppHealthIApplicationRepository } from '@app/app-health/application';
import { CQMetadata, QueryStatement } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';
import { EventPublisher } from '@nestjs/cqrs';

@Injectable()
export class AppHealthDeleteApllicationsService
{
    constructor(
        private readonly publisher: EventPublisher,
        private readonly repository: AppHealthIApplicationRepository,
    ) {}

    async main(
        queryStatement?: QueryStatement,
        constraint?: QueryStatement,
        cQMetadata?: CQMetadata,
    ): Promise<void>
    {
        // get objects to delete
        const apllications = await this.repository.get({
            queryStatement,
            constraint,
            cQMetadata,
        });

        if (apllications.length === 0) return;

        await this.repository.delete({
            queryStatement,
            constraint,
            cQMetadata,
            deleteOptions: cQMetadata?.repositoryOptions,
        });

        // create AddApllicationsContextEvent to have object wrapper to add event publisher functionality
        // insert EventBus in object, to be able to apply and commit events
        const apllicationsRegistered = this.publisher.mergeObjectContext(
            new AppHealthAddApllicationsContextEvent(apllications),
        );

        apllicationsRegistered.deleted(); // apply event to model events
        apllicationsRegistered.commit(); // commit all events of model
    }
}