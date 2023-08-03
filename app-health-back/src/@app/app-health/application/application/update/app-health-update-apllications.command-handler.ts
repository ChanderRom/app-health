/* eslint-disable key-spacing */
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { AppHealthUpdateApllicationsCommand } from './app-health-update-apllications.command';
import { AppHealthUpdateApllicationsService } from './app-health-update-apllications.service';
import {
    AppHealthApplicationId,
    AppHealthApplicationTechnicalSolutionId,
    AppHealthApplicationName,
    AppHealthApplicationDescription,
    AppHealthApplicationBusinessImpact,
    AppHealthApplicationType,
    AppHealthApplicationReleaseDate,
    AppHealthApplicationArchitectureDiagram,
    AppHealthApplicationHasTenants,
    AppHealthApplicationHasLicensing,
    AppHealthApplicationCostLicensesPerYear,
    AppHealthApplicationRequestsPerDay,
    AppHealthApplicationCreatedAt,
    AppHealthApplicationUpdatedAt,
    AppHealthApplicationDeletedAt,
} from '../../domain/value-objects';

@CommandHandler(AppHealthUpdateApllicationsCommand)
export class AppHealthUpdateApllicationsCommandHandler implements ICommandHandler<AppHealthUpdateApllicationsCommand>
{
    constructor(
        private readonly updateApllicationsService: AppHealthUpdateApllicationsService,
    ) {}

    async execute(command: AppHealthUpdateApllicationsCommand): Promise<void>
    {
        // call to use case and implements ValueObjects
        await this.updateApllicationsService.main(
            {
                id: new AppHealthApplicationId(command.payload.id, { undefinable: true }),
                technicalSolutionId: new AppHealthApplicationTechnicalSolutionId(command.payload.technicalSolutionId, { undefinable: true }),
                name: new AppHealthApplicationName(command.payload.name, { undefinable: true }),
                description: new AppHealthApplicationDescription(command.payload.description),
                businessImpact: new AppHealthApplicationBusinessImpact(command.payload.businessImpact),
                type: new AppHealthApplicationType(command.payload.type, { undefinable: true }),
                releaseDate: new AppHealthApplicationReleaseDate(command.payload.releaseDate, { undefinable: true }),
                architectureDiagram: new AppHealthApplicationArchitectureDiagram(command.payload.architectureDiagram, { undefinable: true }),
                hasTenants: new AppHealthApplicationHasTenants(command.payload.hasTenants, { undefinable: true }),
                hasLicensing: new AppHealthApplicationHasLicensing(command.payload.hasLicensing, { undefinable: true }),
                costLicensesPerYear: new AppHealthApplicationCostLicensesPerYear(command.payload.costLicensesPerYear, { undefinable: true }),
                requestsPerDay: new AppHealthApplicationRequestsPerDay(command.payload.requestsPerDay, { undefinable: true }),
            },
            command.queryStatement,
            command.constraint,
            command.cQMetadata,
        );
    }
}