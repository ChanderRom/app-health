import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { AppHealthApplicationLanguageResponse } from '../../domain/app-health-application-language.response';
import { AppHealthApplicationLanguageMapper } from '../../domain/app-health-application-language.mapper';
import { AppHealthRawSQLApplitacionLanguagesQuery } from './app-health-raw-sql-applitacion-languages.query';
import { AppHealthRawSQLApplitacionLanguagesService } from './app-health-raw-sql-applitacion-languages.service';

@QueryHandler(AppHealthRawSQLApplitacionLanguagesQuery)
export class AppHealthRawSQLApplitacionLanguagesQueryHandler implements IQueryHandler<AppHealthRawSQLApplitacionLanguagesQuery>
{
    private readonly mapper: AppHealthApplicationLanguageMapper = new AppHealthApplicationLanguageMapper();

    constructor(
        private readonly rawSQLApplitacionLanguagesService: AppHealthRawSQLApplitacionLanguagesService,
    ) {}

    async execute(query: AppHealthRawSQLApplitacionLanguagesQuery): Promise<AppHealthApplicationLanguageResponse[]>
    {
        return this.mapper.mapAggregatesToResponses(await this.rawSQLApplitacionLanguagesService.main(
            query.rawSQL,
            query.cQMetadata,
        ));
    }
}