import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { AppHealthApplicationResponse } from '../../domain/app-health-application.response';
import { AppHealthApplicationMapper } from '../../domain/app-health-application.mapper';
import { AppHealthGetApllicationsQuery } from './app-health-get-apllications.query';
import { AppHealthGetApllicationsService } from './app-health-get-apllications.service';

@QueryHandler(AppHealthGetApllicationsQuery)
export class AppHealthGetApllicationsQueryHandler implements IQueryHandler<AppHealthGetApllicationsQuery>
{
    private readonly mapper: AppHealthApplicationMapper = new AppHealthApplicationMapper();

    constructor(
        private readonly getApllicationsService: AppHealthGetApllicationsService,
    ) {}

    async execute(query: AppHealthGetApllicationsQuery): Promise<AppHealthApplicationResponse[]>
    {
        return this.mapper.mapAggregatesToResponses(await this.getApllicationsService.main(
            query.queryStatement,
            query.constraint,
            query.cQMetadata,
        ));
    }
}