import { AppHealthCreateApllicationsHandler } from '@api/app-health/application';
import { AppHealthCreateApplicationInput } from '@api/graphql';
import { Auditing, AuditingMeta, Timezone } from '@aurorajs.dev/core';
import { Args, Mutation, Resolver } from '@nestjs/graphql';

@Resolver()
export class AppHealthCreateApllicationsResolver
{
    constructor(
        private readonly handler: AppHealthCreateApllicationsHandler,
    ) {}

    @Mutation('appHealthCreateApllications')
    async main(
        @Args('payload') payload: AppHealthCreateApplicationInput[],
        @Timezone() timezone?: string,
    ): Promise<boolean>
    {
        return await this.handler.main(
            payload,
            timezone,
        );
    }
}
