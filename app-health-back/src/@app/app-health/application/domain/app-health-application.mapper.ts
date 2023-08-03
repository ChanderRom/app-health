import { IMapper, LiteralObject, MapperOptions, CQMetadata } from '@aurorajs.dev/core';
import { AppHealthApplication } from './app-health-application.aggregate';
import { AppHealthApplicationResponse } from './app-health-application.response';
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
} from './value-objects';

export class AppHealthApplicationMapper implements IMapper
{
    constructor(
        public options: MapperOptions = { eagerLoading: true },
    ) {}

    /**
     * Map object to aggregate
     * @param application
     */
    mapModelToAggregate(application: LiteralObject, cQMetadata?: CQMetadata): AppHealthApplication
    {
        if (!application) return;

        return this.makeAggregate(application, cQMetadata);
    }

    /**
     * Map array of objects to array aggregates
     * @param apllications
     */
    mapModelsToAggregates(apllications: LiteralObject[], cQMetadata?: CQMetadata): AppHealthApplication[]
    {
        if (!Array.isArray(apllications)) return;

        return apllications.map(application => this.makeAggregate(application, cQMetadata));
    }

    /**
     * Map aggregate to response
     * @param application
     */
    mapAggregateToResponse(application: AppHealthApplication): AppHealthApplicationResponse
    {
        return this.makeResponse(application);
    }

    /**
     * Map array of aggregates to array responses
     * @param apllications
     */
    mapAggregatesToResponses(apllications: AppHealthApplication[]): AppHealthApplicationResponse[]
    {
        if (!Array.isArray(apllications)) return;

        return apllications.map(application => this.makeResponse(application));
    }

    private makeAggregate(application: LiteralObject, cQMetadata?: CQMetadata): AppHealthApplication
    {
        return AppHealthApplication.register(
            new AppHealthApplicationId(application.id, { undefinable: true }),
            new AppHealthApplicationTechnicalSolutionId(application.technicalSolutionId, { undefinable: true }),
            new AppHealthApplicationName(application.name, { undefinable: true }),
            new AppHealthApplicationDescription(application.description, { undefinable: true }),
            new AppHealthApplicationBusinessImpact(application.businessImpact, { undefinable: true }),
            new AppHealthApplicationType(application.type, { undefinable: true }),
            new AppHealthApplicationReleaseDate(application.releaseDate, { undefinable: true }),
            new AppHealthApplicationArchitectureDiagram(application.architectureDiagram, { undefinable: true }),
            new AppHealthApplicationHasTenants(application.hasTenants, { undefinable: true }),
            new AppHealthApplicationHasLicensing(application.hasLicensing, { undefinable: true }),
            new AppHealthApplicationCostLicensesPerYear(application.costLicensesPerYear, { undefinable: true }),
            new AppHealthApplicationRequestsPerDay(application.requestsPerDay, { undefinable: true }),
            new AppHealthApplicationCreatedAt(application.createdAt, { undefinable: true }, { addTimezone: cQMetadata?.timezone }),
            new AppHealthApplicationUpdatedAt(application.updatedAt, { undefinable: true }, { addTimezone: cQMetadata?.timezone }),
            new AppHealthApplicationDeletedAt(application.deletedAt, { undefinable: true }, { addTimezone: cQMetadata?.timezone }),
        );
    }

    private makeResponse(application: AppHealthApplication): AppHealthApplicationResponse
    {
        if (!application) return;

        return new AppHealthApplicationResponse(
            application.id.value,
            application.technicalSolutionId.value,
            application.name.value,
            application.description.value,
            application.businessImpact.value,
            application.type.value,
            application.releaseDate.value,
            application.architectureDiagram.value,
            application.hasTenants.value,
            application.hasLicensing.value,
            application.costLicensesPerYear.value,
            application.requestsPerDay.value,
            application.createdAt.value,
            application.updatedAt.value,
            application.deletedAt.value,
        );
    }
}