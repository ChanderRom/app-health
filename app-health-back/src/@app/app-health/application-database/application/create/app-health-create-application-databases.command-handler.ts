/* eslint-disable key-spacing */
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { AppHealthCreateApplicationDatabasesCommand } from './app-health-create-application-databases.command';
import { AppHealthCreateApplicationDatabasesService } from './app-health-create-application-databases.service';
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
} from '../../domain/value-objects';

@CommandHandler(AppHealthCreateApplicationDatabasesCommand)
export class AppHealthCreateApplicationDatabasesCommandHandler implements ICommandHandler<AppHealthCreateApplicationDatabasesCommand>
{
    constructor(
        private readonly createApplicationDatabasesService: AppHealthCreateApplicationDatabasesService,
    ) {}

    async execute(command: AppHealthCreateApplicationDatabasesCommand): Promise<void>
    {
        // call to use case and implements ValueObjects
        await this.createApplicationDatabasesService.main(
            command.payload
                .map(applicationDatabase =>
                {
                    return {
                        id: new AppHealthApplicationDatabaseId(applicationDatabase.id),
                        applicationId: new AppHealthApplicationDatabaseApplicationId(applicationDatabase.applicationId),
                        databaseId: new AppHealthApplicationDatabaseDatabaseId(applicationDatabase.databaseId),
                        applicationInfrastructureServiceId: new AppHealthApplicationDatabaseApplicationInfrastructureServiceId(applicationDatabase.applicationInfrastructureServiceId),
                        version: new AppHealthApplicationDatabaseVersion(applicationDatabase.version),
                        size: new AppHealthApplicationDatabaseSize(applicationDatabase.size),
                        score: new AppHealthApplicationDatabaseScore(applicationDatabase.score),
                        totalCollectionTables: new AppHealthApplicationDatabaseTotalCollectionTables(applicationDatabase.totalCollectionTables),
                        totalFields: new AppHealthApplicationDatabaseTotalFields(applicationDatabase.totalFields),
                    };
                }),
            command.cQMetadata,
        );
    }
}