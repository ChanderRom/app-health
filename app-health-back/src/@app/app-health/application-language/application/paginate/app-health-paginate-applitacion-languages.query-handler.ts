import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { PaginationResponse } from '@aurorajs.dev/core';
import { AppHealthPaginateApplitacionLanguagesQuery } from './app-health-paginate-applitacion-languages.query';
import { AppHealthPaginateApplitacionLanguagesService } from './app-health-paginate-applitacion-languages.service';

@QueryHandler(AppHealthPaginateApplitacionLanguagesQuery)
export class AppHealthPaginateApplitacionLanguagesQueryHandler implements IQueryHandler<AppHealthPaginateApplitacionLanguagesQuery>
{
    constructor(
        private readonly paginateApplitacionLanguagesService: AppHealthPaginateApplitacionLanguagesService,
    ) {}

    async execute(query: AppHealthPaginateApplitacionLanguagesQuery): Promise<PaginationResponse>
    {
        const { total, count, rows } = await this.paginateApplitacionLanguagesService.main(
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