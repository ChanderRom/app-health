import { AppHealthPaginateApllicationsHandler } from '@api/app-health/application';
import { Pagination } from '@api/graphql';
import { QueryStatement, Timezone } from '@aurorajs.dev/core';
import { Args, Query, Resolver } from '@nestjs/graphql';

@Resolver()
export class AppHealthPaginateApllicationsResolver
{
    constructor(
        private readonly handler: AppHealthPaginateApllicationsHandler,
    ) {}

    @Query('appHealthPaginateApllications')
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
