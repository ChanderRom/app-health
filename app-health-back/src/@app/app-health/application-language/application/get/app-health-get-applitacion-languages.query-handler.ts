import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { AppHealthApplicationLanguageResponse } from '../../domain/app-health-application-language.response';
import { AppHealthApplicationLanguageMapper } from '../../domain/app-health-application-language.mapper';
import { AppHealthGetApplitacionLanguagesQuery } from './app-health-get-applitacion-languages.query';
import { AppHealthGetApplitacionLanguagesService } from './app-health-get-applitacion-languages.service';

@QueryHandler(AppHealthGetApplitacionLanguagesQuery)
export class AppHealthGetApplitacionLanguagesQueryHandler implements IQueryHandler<AppHealthGetApplitacionLanguagesQuery>
{
    private readonly mapper: AppHealthApplicationLanguageMapper = new AppHealthApplicationLanguageMapper();

    constructor(
        private readonly getApplitacionLanguagesService: AppHealthGetApplitacionLanguagesService,
    ) {}

    async execute(query: AppHealthGetApplitacionLanguagesQuery): Promise<AppHealthApplicationLanguageResponse[]>
    {
        return this.mapper.mapAggregatesToResponses(await this.getApplitacionLanguagesService.main(
            query.queryStatement,
            query.constraint,
            query.cQMetadata,
        ));
    }
}