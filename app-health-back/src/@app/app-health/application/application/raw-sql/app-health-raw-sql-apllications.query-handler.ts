import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { AppHealthApplicationResponse } from '../../domain/app-health-application.response';
import { AppHealthApplicationMapper } from '../../domain/app-health-application.mapper';
import { AppHealthRawSQLApllicationsQuery } from './app-health-raw-sql-apllications.query';
import { AppHealthRawSQLApllicationsService } from './app-health-raw-sql-apllications.service';

@QueryHandler(AppHealthRawSQLApllicationsQuery)
export class AppHealthRawSQLApllicationsQueryHandler implements IQueryHandler<AppHealthRawSQLApllicationsQuery>
{
    private readonly mapper: AppHealthApplicationMapper = new AppHealthApplicationMapper();

    constructor(
        private readonly rawSQLApllicationsService: AppHealthRawSQLApllicationsService,
    ) {}

    async execute(query: AppHealthRawSQLApllicationsQuery): Promise<AppHealthApplicationResponse[]>
    {
        return this.mapper.mapAggregatesToResponses(await this.rawSQLApllicationsService.main(
            query.rawSQL,
            query.cQMetadata,
        ));
    }
}