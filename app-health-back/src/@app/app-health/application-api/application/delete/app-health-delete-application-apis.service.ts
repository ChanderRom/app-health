import { AppHealthAddApplicationApisContextEvent, AppHealthIApplicationApiRepository } from '@app/app-health/application-api';
import { CQMetadata, QueryStatement } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';
import { EventPublisher } from '@nestjs/cqrs';

@Injectable()
export class AppHealthDeleteApplicationApisService
{
    constructor(
        private readonly publisher: EventPublisher,
        private readonly repository: AppHealthIApplicationApiRepository,
    ) {}

    async main(
        queryStatement?: QueryStatement,
        constraint?: QueryStatement,
        cQMetadata?: CQMetadata,
    ): Promise<void>
    {
        // get objects to delete
        const applicationApis = await this.repository.get({
            queryStatement,
            constraint,
            cQMetadata,
        });

        if (applicationApis.length === 0) return;

        await this.repository.delete({
            queryStatement,
            constraint,
            cQMetadata,
            deleteOptions: cQMetadata?.repositoryOptions,
        });

        // create AddApplicationApisContextEvent to have object wrapper to add event publisher functionality
        // insert EventBus in object, to be able to apply and commit events
        const applicationApisRegistered = this.publisher.mergeObjectContext(
            new AppHealthAddApplicationApisContextEvent(applicationApis),
        );

        applicationApisRegistered.deleted(); // apply event to model events
        applicationApisRegistered.commit(); // commit all events of model
    }
}