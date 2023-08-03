import { IMapper, LiteralObject, MapperOptions, CQMetadata } from '@aurorajs.dev/core';
import { AppHealthApplicationApi } from './app-health-application-api.aggregate';
import { AppHealthApplicationApiResponse } from './app-health-application-api.response';
import {
    AppHealthApplicationApiId,
    AppHealthApplicationApiApplicationId,
    AppHealthApplicationApiApiInterfaceTypeId,
    AppHealthApplicationApiScore,
    AppHealthApplicationApiDocumentations,
    AppHealthApplicationApiRequestsPerDay,
    AppHealthApplicationApiCreatedAt,
    AppHealthApplicationApiUpdatedAt,
    AppHealthApplicationApiDeletedAt,
} from './value-objects';
import { AppHealthApplicationMapper } from '@app/app-health/application';
import { AppHealthApiInterfaceTypeMapper } from '@app/app-health/api-interface-type';

export class AppHealthApplicationApiMapper implements IMapper
{
    constructor(
        public options: MapperOptions = { eagerLoading: true },
    ) {}

    /**
     * Map object to aggregate
     * @param applicationApi
     */
    mapModelToAggregate(applicationApi: LiteralObject, cQMetadata?: CQMetadata): AppHealthApplicationApi
    {
        if (!applicationApi) return;

        return this.makeAggregate(applicationApi, cQMetadata);
    }

    /**
     * Map array of objects to array aggregates
     * @param applicationApis
     */
    mapModelsToAggregates(applicationApis: LiteralObject[], cQMetadata?: CQMetadata): AppHealthApplicationApi[]
    {
        if (!Array.isArray(applicationApis)) return;

        return applicationApis.map(applicationApi => this.makeAggregate(applicationApi, cQMetadata));
    }

    /**
     * Map aggregate to response
     * @param applicationApi
     */
    mapAggregateToResponse(applicationApi: AppHealthApplicationApi): AppHealthApplicationApiResponse
    {
        return this.makeResponse(applicationApi);
    }

    /**
     * Map array of aggregates to array responses
     * @param applicationApis
     */
    mapAggregatesToResponses(applicationApis: AppHealthApplicationApi[]): AppHealthApplicationApiResponse[]
    {
        if (!Array.isArray(applicationApis)) return;

        return applicationApis.map(applicationApi => this.makeResponse(applicationApi));
    }

    private makeAggregate(applicationApi: LiteralObject, cQMetadata?: CQMetadata): AppHealthApplicationApi
    {
        return AppHealthApplicationApi.register(
            new AppHealthApplicationApiId(applicationApi.id, { undefinable: true }),
            new AppHealthApplicationApiApplicationId(applicationApi.applicationId, { undefinable: true }),
            new AppHealthApplicationApiApiInterfaceTypeId(applicationApi.apiInterfaceTypeId, { undefinable: true }),
            new AppHealthApplicationApiScore(applicationApi.score, { undefinable: true }),
            new AppHealthApplicationApiDocumentations(applicationApi.documentations, { undefinable: true }),
            new AppHealthApplicationApiRequestsPerDay(applicationApi.requestsPerDay, { undefinable: true }),
            new AppHealthApplicationApiCreatedAt(applicationApi.createdAt, { undefinable: true }, { addTimezone: cQMetadata?.timezone }),
            new AppHealthApplicationApiUpdatedAt(applicationApi.updatedAt, { undefinable: true }, { addTimezone: cQMetadata?.timezone }),
            new AppHealthApplicationApiDeletedAt(applicationApi.deletedAt, { undefinable: true }, { addTimezone: cQMetadata?.timezone }),
            this.options.eagerLoading ? new AppHealthApplicationMapper({ eagerLoading: true }).mapModelToAggregate(applicationApi.application, cQMetadata) : undefined,
            this.options.eagerLoading ? new AppHealthApiInterfaceTypeMapper({ eagerLoading: true }).mapModelToAggregate(applicationApi.apiInterface, cQMetadata) : undefined,
        );
    }

    private makeResponse(applicationApi: AppHealthApplicationApi): AppHealthApplicationApiResponse
    {
        if (!applicationApi) return;

        return new AppHealthApplicationApiResponse(
            applicationApi.id.value,
            applicationApi.applicationId.value,
            applicationApi.apiInterfaceTypeId.value,
            applicationApi.score.value,
            applicationApi.documentations.value,
            applicationApi.requestsPerDay.value,
            applicationApi.createdAt.value,
            applicationApi.updatedAt.value,
            applicationApi.deletedAt.value,
            this.options.eagerLoading ? new AppHealthApplicationMapper({ eagerLoading: true }).mapAggregateToResponse(applicationApi.application) : undefined,
            this.options.eagerLoading ? new AppHealthApiInterfaceTypeMapper({ eagerLoading: true }).mapAggregateToResponse(applicationApi.apiInterface) : undefined,
        );
    }
}