import { AppHealthApplicationDatabase, AppHealthIApplicationDatabaseRepository } from '@app/app-health/application-database';
import {
    AppHealthApplicationDatabaseApplicationId,
    AppHealthApplicationDatabaseApplicationInfrastructureServiceId,
    AppHealthApplicationDatabaseCreatedAt,
    AppHealthApplicationDatabaseDatabaseId,
    AppHealthApplicationDatabaseDeletedAt,
    AppHealthApplicationDatabaseId,
    AppHealthApplicationDatabaseScore,
    AppHealthApplicationDatabaseSize,
    AppHealthApplicationDatabaseTotalCollectionTables,
    AppHealthApplicationDatabaseTotalFields,
    AppHealthApplicationDatabaseUpdatedAt,
    AppHealthApplicationDatabaseVersion,
} from '@app/app-health/application-database/domain/value-objects';
import { CQMetadata, Utils } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';
import { EventPublisher } from '@nestjs/cqrs';

@Injectable()
export class AppHealthUpsertApplicationDatabaseService
{
    constructor(
        private readonly publisher: EventPublisher,
        private readonly repository: AppHealthIApplicationDatabaseRepository,
    ) {}

    async main(
        payload: {
            id: AppHealthApplicationDatabaseId;
            applicationId: AppHealthApplicationDatabaseApplicationId;
            databaseId: AppHealthApplicationDatabaseDatabaseId;
            applicationInfrastructureServiceId: AppHealthApplicationDatabaseApplicationInfrastructureServiceId;
            version: AppHealthApplicationDatabaseVersion;
            size: AppHealthApplicationDatabaseSize;
            score: AppHealthApplicationDatabaseScore;
            totalCollectionTables: AppHealthApplicationDatabaseTotalCollectionTables;
            totalFields: AppHealthApplicationDatabaseTotalFields;
        },
        cQMetadata?: CQMetadata,
    ): Promise<void>
    {
        // upsert aggregate with factory pattern
        const applicationDatabase = AppHealthApplicationDatabase.register(
            payload.id,
            payload.applicationId,
            payload.databaseId,
            payload.applicationInfrastructureServiceId,
            payload.version,
            payload.size,
            payload.score,
            payload.totalCollectionTables,
            payload.totalFields,
            new AppHealthApplicationDatabaseCreatedAt({ currentTimestamp: true }),
            new AppHealthApplicationDatabaseUpdatedAt({ currentTimestamp: true }),
            null, // deletedAt
        );

        await this.repository
            .upsert(
                applicationDatabase,
                {
                    upsertOptions: cQMetadata?.repositoryOptions,
                },
            );

        // merge EventBus methods with object returned by the repository, to be able to apply and commit events
        const applicationDatabaseRegister = this.publisher.mergeObjectContext(
            applicationDatabase,
        );

        applicationDatabaseRegister.created(applicationDatabase); // apply event to model events
        applicationDatabaseRegister.commit(); // commit all events of model
    }
}