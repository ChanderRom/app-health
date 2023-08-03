import { AppHealthUpdateApllicationsHandler } from '@api/app-health/application';
import { AppHealthApplication, AppHealthUpdateApllicationsInput } from '@api/graphql';
import { QueryStatement, Timezone } from '@aurorajs.dev/core';
import { Args, Mutation, Resolver } from '@nestjs/graphql';

@Resolver()
export class AppHealthUpdateApllicationsResolver
{
    constructor(
        private readonly handler: AppHealthUpdateApllicationsHandler,
    ) {}

    @Mutation('appHealthUpdateApllications')
    async main(
        @Args('payload') payload: AppHealthUpdateApllicationsInput,
        @Args('query') queryStatement?: QueryStatement,
        @Args('constraint') constraint?: QueryStatement,
        @Timezone() timezone?: string,
    ): Promise<AppHealthApplication>
    {
        return await this.handler.main(
            payload,
            queryStatement,
            constraint,
            timezone,
        );
    }
}