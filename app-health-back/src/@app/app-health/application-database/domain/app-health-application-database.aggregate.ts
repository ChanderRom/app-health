/* eslint-disable key-spacing */
import { AggregateRoot } from '@nestjs/cqrs';
import { LiteralObject, Utils } from '@aurorajs.dev/core';
import {
    AppHealthApplicationDatabaseId,
    AppHealthApplicationDatabaseApplicationId,
    AppHealthApplicationDatabaseDatabaseId,
    AppHealthApplicationDatabaseApplicationInfrastructureServiceId,
    AppHealthApplicationDatabaseVersion,
    AppHealthApplicationDatabaseSize,
    AppHealthApplicationDatabaseScore,
    AppHealthApplicationDatabaseTotalCollectionTables,
    AppHealthApplicationDatabaseTotalFields,
    AppHealthApplicationDatabaseCreatedAt,
    AppHealthApplicationDatabaseUpdatedAt,
    AppHealthApplicationDatabaseDeletedAt,
} from './value-objects';
import { AppHealthCreatedApplicationDatabaseEvent } from '../application/events/app-health-created-application-database.event';
import { AppHealthUpdatedApplicationDatabaseEvent } from '../application/events/app-health-updated-application-database.event';
import { AppHealthDeletedApplicationDatabaseEvent } from '../application/events/app-health-deleted-application-database.event';
import { AppHealthApplication } from '@app/app-health/application';
import { AppHealthDatabase } from '@app/app-health/database';
import { AppHealthApplicationInfrastructureService } from '@app/app-health/application-infrastructure-service';

export class AppHealthApplicationDatabase extends AggregateRoot
{
    id: AppHealthApplicationDatabaseId;
    applicationId: AppHealthApplicationDatabaseApplicationId;
    databaseId: AppHealthApplicationDatabaseDatabaseId;
    applicationInfrastructureServiceId: AppHealthApplicationDatabaseApplicationInfrastructureServiceId;
    version: AppHealthApplicationDatabaseVersion;
    size: AppHealthApplicationDatabaseSize;
    score: AppHealthApplicationDatabaseScore;
    totalCollectionTables: AppHealthApplicationDatabaseTotalCollectionTables;
    totalFields: AppHealthApplicationDatabaseTotalFields;
    createdAt: AppHealthApplicationDatabaseCreatedAt;
    updatedAt: AppHealthApplicationDatabaseUpdatedAt;
    deletedAt: AppHealthApplicationDatabaseDeletedAt;

    // eager relationship
    application: AppHealthApplication;
    database: AppHealthDatabase;
    applicationInfrastructureService: AppHealthApplicationInfrastructureService;

    constructor(
        id: AppHealthApplicationDatabaseId,
        applicationId: AppHealthApplicationDatabaseApplicationId,
        databaseId: AppHealthApplicationDatabaseDatabaseId,
        applicationInfrastructureServiceId: AppHealthApplicationDatabaseApplicationInfrastructureServiceId,
        version: AppHealthApplicationDatabaseVersion,
        size: AppHealthApplicationDatabaseSize,
        score: AppHealthApplicationDatabaseScore,
        totalCollectionTables: AppHealthApplicationDatabaseTotalCollectionTables,
        totalFields: AppHealthApplicationDatabaseTotalFields,
        createdAt: AppHealthApplicationDatabaseCreatedAt,
        updatedAt: AppHealthApplicationDatabaseUpdatedAt,
        deletedAt: AppHealthApplicationDatabaseDeletedAt,

        application?: AppHealthApplication,
        database?: AppHealthDatabase,
        applicationInfrastructureService?: AppHealthApplicationInfrastructureService,
    )
    {
        super();
        this.id = id;
        this.applicationId = applicationId;
        this.databaseId = databaseId;
        this.applicationInfrastructureServiceId = applicationInfrastructureServiceId;
        this.version = version;
        this.size = size;
        this.score = score;
        this.totalCollectionTables = totalCollectionTables;
        this.totalFields = totalFields;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
        this.deletedAt = deletedAt;

        // eager relationship
        this.application = application;
        this.database = database;
        this.applicationInfrastructureService = applicationInfrastructureService;
    }

    static register (
        id: AppHealthApplicationDatabaseId,
        applicationId: AppHealthApplicationDatabaseApplicationId,
        databaseId: AppHealthApplicationDatabaseDatabaseId,
        applicationInfrastructureServiceId: AppHealthApplicationDatabaseApplicationInfrastructureServiceId,
        version: AppHealthApplicationDatabaseVersion,
        size: AppHealthApplicationDatabaseSize,
        score: AppHealthApplicationDatabaseScore,
        totalCollectionTables: AppHealthApplicationDatabaseTotalCollectionTables,
        totalFields: AppHealthApplicationDatabaseTotalFields,
        createdAt: AppHealthApplicationDatabaseCreatedAt,
        updatedAt: AppHealthApplicationDatabaseUpdatedAt,
        deletedAt: AppHealthApplicationDatabaseDeletedAt,

        application?: AppHealthApplication,
        database?: AppHealthDatabase,
        applicationInfrastructureService?: AppHealthApplicationInfrastructureService,
    ): AppHealthApplicationDatabase
    {
        return new AppHealthApplicationDatabase(
            id,
            applicationId,
            databaseId,
            applicationInfrastructureServiceId,
            version,
            size,
            score,
            totalCollectionTables,
            totalFields,
            createdAt,
            updatedAt,
            deletedAt,

            application,
            database,
            applicationInfrastructureService,
        );
    }

    created(applicationDatabase: AppHealthApplicationDatabase): void
    {
        this.apply(
            new AppHealthCreatedApplicationDatabaseEvent(
                applicationDatabase.id.value,
                applicationDatabase.applicationId.value,
                applicationDatabase.databaseId.value,
                applicationDatabase.applicationInfrastructureServiceId.value,
                applicationDatabase.version.value,
                applicationDatabase.size.value,
                applicationDatabase.score.value,
                applicationDatabase.totalCollectionTables.value,
                applicationDatabase.totalFields.value,
                applicationDatabase.createdAt?.value,
                applicationDatabase.updatedAt?.value,
                applicationDatabase.deletedAt?.value,
            ),
        );
    }

    updated(applicationDatabase: AppHealthApplicationDatabase): void
    {
        this.apply(
            new AppHealthUpdatedApplicationDatabaseEvent(
                applicationDatabase.id?.value,
                applicationDatabase.applicationId?.value,
                applicationDatabase.databaseId?.value,
                applicationDatabase.applicationInfrastructureServiceId?.value,
                applicationDatabase.version?.value,
                applicationDatabase.size?.value,
                applicationDatabase.score?.value,
                applicationDatabase.totalCollectionTables?.value,
                applicationDatabase.totalFields?.value,
                applicationDatabase.createdAt?.value,
                applicationDatabase.updatedAt?.value,
                applicationDatabase.deletedAt?.value,
            ),
        );
    }

    deleted(applicationDatabase: AppHealthApplicationDatabase): void
    {
        this.apply(
            new AppHealthDeletedApplicationDatabaseEvent(
                applicationDatabase.id.value,
                applicationDatabase.applicationId.value,
                applicationDatabase.databaseId.value,
                applicationDatabase.applicationInfrastructureServiceId.value,
                applicationDatabase.version.value,
                applicationDatabase.size.value,
                applicationDatabase.score.value,
                applicationDatabase.totalCollectionTables.value,
                applicationDatabase.totalFields.value,
                applicationDatabase.createdAt?.value,
                applicationDatabase.updatedAt?.value,
                applicationDatabase.deletedAt?.value,
            ),
        );
    }

    toDTO(): LiteralObject
    {
        return {
            id: this.id.value,
            applicationId: this.applicationId.value,
            databaseId: this.databaseId.value,
            applicationInfrastructureServiceId: this.applicationInfrastructureServiceId.value,
            version: this.version.value,
            size: this.size.value,
            score: this.score.value,
            totalCollectionTables: this.totalCollectionTables.value,
            totalFields: this.totalFields.value,
            createdAt: this.createdAt?.value,
            updatedAt: this.updatedAt?.value,
            deletedAt: this.deletedAt?.value,

            // eager relationship
            application: this.application?.toDTO(),
            database: this.database?.toDTO(),
            applicationInfrastructureService: this.applicationInfrastructureService?.toDTO(),
        };
    }

    // function called to get data for repository side effect methods
    toRepository(): LiteralObject
    {
        return {
            id: this.id.value,
            applicationId: this.applicationId.value,
            databaseId: this.databaseId.value,
            applicationInfrastructureServiceId: this.applicationInfrastructureServiceId.value,
            version: this.version.value,
            size: this.size.value,
            score: this.score.value,
            totalCollectionTables: this.totalCollectionTables.value,
            totalFields: this.totalFields.value,
            createdAt: this.createdAt?.value,
            updatedAt: this.updatedAt?.value,
            deletedAt: this.deletedAt?.value,

            // eager relationship
            application: this.application?.toDTO(),
            database: this.database?.toDTO(),
            applicationInfrastructureService: this.applicationInfrastructureService?.toDTO(),
        };
    }
}
