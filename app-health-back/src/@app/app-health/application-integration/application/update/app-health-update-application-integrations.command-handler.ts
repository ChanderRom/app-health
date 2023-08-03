/* eslint-disable key-spacing */
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { AppHealthUpdateApplicationIntegrationsCommand } from './app-health-update-application-integrations.command';
import { AppHealthUpdateApplicationIntegrationsService } from './app-health-update-application-integrations.service';
import {
    AppHealthApplicationIntegrationId,
    AppHealthApplicationIntegrationName,
    AppHealthApplicationIntegrationDescription,
    AppHealthApplicationIntegrationSourceApplicationId,
    AppHealthApplicationIntegrationApiInterfaceTypeId,
    AppHealthApplicationIntegrationInterfaceNumbers,
    AppHealthApplicationIntegrationModality,
    AppHealthApplicationIntegrationScore,
    AppHealthApplicationIntegrationDocumentations,
    AppHealthApplicationIntegrationCreatedAt,
    AppHealthApplicationIntegrationUpdatedAt,
    AppHealthApplicationIntegrationDeletedAt,
} from '../../domain/value-objects';

@CommandHandler(AppHealthUpdateApplicationIntegrationsCommand)
export class AppHealthUpdateApplicationIntegrationsCommandHandler implements ICommandHandler<AppHealthUpdateApplicationIntegrationsCommand>
{
    constructor(
        private readonly updateApplicationIntegrationsService: AppHealthUpdateApplicationIntegrationsService,
    ) {}

    async execute(command: AppHealthUpdateApplicationIntegrationsCommand): Promise<void>
    {
        // call to use case and implements ValueObjects
        await this.updateApplicationIntegrationsService.main(
            {
                id: new AppHealthApplicationIntegrationId(command.payload.id, { undefinable: true }),
                name: new AppHealthApplicationIntegrationName(command.payload.name, { undefinable: true }),
                description: new AppHealthApplicationIntegrationDescription(command.payload.description),
                sourceApplicationId: new AppHealthApplicationIntegrationSourceApplicationId(command.payload.sourceApplicationId, { undefinable: true }),
                apiInterfaceTypeId: new AppHealthApplicationIntegrationApiInterfaceTypeId(command.payload.apiInterfaceTypeId, { undefinable: true }),
                interfaceNumbers: new AppHealthApplicationIntegrationInterfaceNumbers(command.payload.interfaceNumbers, { undefinable: true }),
                modality: new AppHealthApplicationIntegrationModality(command.payload.modality, { undefinable: true }),
                score: new AppHealthApplicationIntegrationScore(command.payload.score, { undefinable: true }),
                documentations: new AppHealthApplicationIntegrationDocumentations(command.payload.documentations),
            },
            command.queryStatement,
            command.constraint,
            command.cQMetadata,
        );
    }
}