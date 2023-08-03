import { AppHealthDeleteApllicationsHandler } from '@api/app-health/application';
import { AppHealthApplication } from '@api/graphql';
import { Auditing, AuditingMeta, QueryStatement, Timezone } from '@aurorajs.dev/core';
import { Args, Mutation, Resolver } from '@nestjs/graphql';

@Resolver()
export class AppHealthDeleteApllicationsResolver
{
    constructor(
        private readonly handler: AppHealthDeleteApllicationsHandler,
    ) {}

    @Mutation('appHealthDeleteApllications')
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
