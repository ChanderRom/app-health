/* eslint-disable key-spacing */
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { AppHealthCreateApllicationsCommand } from './app-health-create-apllications.command';
import { AppHealthCreateApllicationsService } from './app-health-create-apllications.service';
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

@CommandHandler(AppHealthCreateApllicationsCommand)
export class AppHealthCreateApllicationsCommandHandler implements ICommandHandler<AppHealthCreateApllicationsCommand>
{
    constructor(
        private readonly createApllicationsService: AppHealthCreateApllicationsService,
    ) {}

    async execute(command: AppHealthCreateApllicationsCommand): Promise<void>
    {
        // call to use case and implements ValueObjects
        await this.createApllicationsService.main(
            command.payload
                .map(application =>
                {
                    return {
                        id: new AppHealthApplicationId(application.id),
                        technicalSolutionId: new AppHealthApplicationTechnicalSolutionId(application.technicalSolutionId),
                        name: new AppHealthApplicationName(application.name),
                        description: new AppHealthApplicationDescription(application.description),
                        businessImpact: new AppHealthApplicationBusinessImpact(application.businessImpact),
                        type: new AppHealthApplicationType(application.type),
                        releaseDate: new AppHealthApplicationReleaseDate(application.releaseDate),
                        architectureDiagram: new AppHealthApplicationArchitectureDiagram(application.architectureDiagram),
                        hasTenants: new AppHealthApplicationHasTenants(application.hasTenants),
                        hasLicensing: new AppHealthApplicationHasLicensing(application.hasLicensing),
                        costLicensesPerYear: new AppHealthApplicationCostLicensesPerYear(application.costLicensesPerYear),
                        requestsPerDay: new AppHealthApplicationRequestsPerDay(application.requestsPerDay),
                    };
                }),
            command.cQMetadata,
        );
    }
}