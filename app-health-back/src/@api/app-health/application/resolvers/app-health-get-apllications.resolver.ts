import { AppHealthGetApllicationsHandler } from '@api/app-health/application';
import { AppHealthApplication } from '@api/graphql';
import { QueryStatement, Timezone } from '@aurorajs.dev/core';
import { Args, Query, Resolver } from '@nestjs/graphql';

@Resolver()
export class AppHealthGetApllicationsResolver
{
    constructor(
        private readonly handler: AppHealthGetApllicationsHandler,
    ) {}

    @Query('appHealthGetApllications')
    async main(
        @Args('query') queryStatement?: QueryStatement,
        @Args('constraint') constraint?: QueryStatement,
        @Timezone() timezone?: string,
    ): Promise<AppHealthApplication[]>
    {
        return await this.handler.main(
            queryStatement,
            constraint,
            timezone,
        );
    }
}
