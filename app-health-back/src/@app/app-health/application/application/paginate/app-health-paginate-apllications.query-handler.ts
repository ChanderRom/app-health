import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { PaginationResponse } from '@aurorajs.dev/core';
import { AppHealthPaginateApllicationsQuery } from './app-health-paginate-apllications.query';
import { AppHealthPaginateApllicationsService } from './app-health-paginate-apllications.service';

@QueryHandler(AppHealthPaginateApllicationsQuery)
export class AppHealthPaginateApllicationsQueryHandler implements IQueryHandler<AppHealthPaginateApllicationsQuery>
{
    constructor(
        private readonly paginateApllicationsService: AppHealthPaginateApllicationsService,
    ) {}

    async execute(query: AppHealthPaginateApllicationsQuery): Promise<PaginationResponse>
    {
        const { total, count, rows } = await this.paginateApllicationsService.main(
            query.queryStatement,
            query.constraint,
            query.cQMetadata,
        );

        return new PaginationResponse(
            total,
            count,
            rows.map(item => item.toDTO()),
        );
    }
}