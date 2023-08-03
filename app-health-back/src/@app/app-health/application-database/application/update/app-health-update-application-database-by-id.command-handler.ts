/* eslint-disable key-spacing */
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { AppHealthUpdateApplicationDatabaseByIdCommand } from './app-health-update-application-database-by-id.command';
import { AppHealthUpdateApplicationDatabaseByIdService } from './app-health-update-application-database-by-id.service';
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

@CommandHandler(AppHealthUpdateApplicationDatabaseByIdCommand)
export class AppHealthUpdateApplicationDatabaseByIdCommandHandler implements ICommandHandler<AppHealthUpdateApplicationDatabaseByIdCommand>
{
    constructor(
        private readonly updateApplicationDatabaseByIdService: AppHealthUpdateApplicationDatabaseByIdService,
    ) {}

    async execute(command: AppHealthUpdateApplicationDatabaseByIdCommand): Promise<void>
    {
        // call to use case and implements ValueObjects
        await this.updateApplicationDatabaseByIdService.main(
            {
                id: new AppHealthApplicationDatabaseId(command.payload.id),
                applicationId: new AppHealthApplicationDatabaseApplicationId(command.payload.applicationId, { undefinable: true }),
                databaseId: new AppHealthApplicationDatabaseDatabaseId(command.payload.databaseId, { undefinable: true }),
                applicationInfrastructureServiceId: new AppHealthApplicationDatabaseApplicationInfrastructureServiceId(command.payload.applicationInfrastructureServiceId, { undefinable: true }),
                version: new AppHealthApplicationDatabaseVersion(command.payload.version, { undefinable: true }),
                size: new AppHealthApplicationDatabaseSize(command.payload.size, { undefinable: true }),
                score: new AppHealthApplicationDatabaseScore(command.payload.score, { undefinable: true }),
                totalCollectionTables: new AppHealthApplicationDatabaseTotalCollectionTables(command.payload.totalCollectionTables, { undefinable: true }),
                totalFields: new AppHealthApplicationDatabaseTotalFields(command.payload.totalFields, { undefinable: true }),
            },
            command.constraint,
            command.cQMetadata,
        );
    }
}