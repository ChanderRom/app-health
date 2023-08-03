import { AppHealthPaginateApplitacionLanguagesHandler } from '@api/app-health/application-language';
import { Pagination } from '@api/graphql';
import { QueryStatement, Timezone } from '@aurorajs.dev/core';
import { Args, Query, Resolver } from '@nestjs/graphql';

@Resolver()
export class AppHealthPaginateApplitacionLanguagesResolver
{
    constructor(
        private readonly handler: AppHealthPaginateApplitacionLanguagesHandler,
    ) {}

    @Query('appHealthPaginateApplitacionLanguages')
    async main(
        @Args('query') queryStatement?: QueryStatement,
        @Args('constraint') constraint?: QueryStatement,
        @Timezone() timezone?: string,
    ): Promise<Pagination>
    {
        return await this.handler.main(
            queryStatement,
            constraint,
            timezone,
        );
    }
}
