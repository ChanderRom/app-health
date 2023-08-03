import { AppHealthApplicationDatabase, AppHealthIApplicationDatabaseRepository } from '@app/app-health/application-database';
import {
    AppHealthApplicationDatabaseApplicationId,
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
import { CQMetadata, QueryStatement } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';
import { EventPublisher } from '@nestjs/cqrs';

@Injectable()
export class AppHealthUpdateApplicationDatabaseByIdService
{
    constructor(
        private readonly publisher: EventPublisher,
        private readonly repository: AppHealthIApplicationDatabaseRepository,
    ) {}

    async main(
        payload: {
            id: AppHealthApplicationDatabaseId;
            applicationId?: AppHealthApplicationDatabaseApplicationId;
            databaseId?: AppHealthApplicationDatabaseDatabaseId;
            version?: AppHealthApplicationDatabaseVersion;
            size?: AppHealthApplicationDatabaseSize;
            score?: AppHealthApplicationDatabaseScore;
            totalCollectionTables?: AppHealthApplicationDatabaseTotalCollectionTables;
            totalFields?: AppHealthApplicationDatabaseTotalFields;
        },
        constraint?: QueryStatement,
        cQMetadata?: CQMetadata,
    ): Promise<void>
    {
        // create aggregate with factory pattern
        const applicationDatabase = AppHealthApplicationDatabase.register(
            payload.id,
            payload.applicationId,
            payload.databaseId,
            payload.version,
            payload.size,
            payload.score,
            payload.totalCollectionTables,
            payload.totalFields,
            null, // createdAt
            new AppHealthApplicationDatabaseUpdatedAt({ currentTimestamp: true }),
            null, // deletedAt
        );

        // update by id
        await this.repository.updateById(
            applicationDatabase,
            {
                constraint,
                cQMetadata,
                updateByIdOptions: cQMetadata?.repositoryOptions,
            },
        );

        // merge EventBus methods with object returned by the repository, to be able to apply and commit events
        const applicationDatabaseRegister = this.publisher.mergeObjectContext(
            applicationDatabase,
        );

        applicationDatabaseRegister.updated(applicationDatabase); // apply event to model events
        applicationDatabaseRegister.commit(); // commit all events of model
    }
}