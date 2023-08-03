import { AppHealthUpdateApplitacionLanguagesHandler } from '@api/app-health/application-language';
import { AppHealthApplicationLanguage, AppHealthUpdateApplitacionLanguagesInput } from '@api/graphql';
import { QueryStatement, Timezone } from '@aurorajs.dev/core';
import { Args, Mutation, Resolver } from '@nestjs/graphql';

@Resolver()
export class AppHealthUpdateApplitacionLanguagesResolver
{
    constructor(
        private readonly handler: AppHealthUpdateApplitacionLanguagesHandler,
    ) {}

    @Mutation('appHealthUpdateApplitacionLanguages')
    async main(
        @Args('payload') payload: AppHealthUpdateApplitacionLanguagesInput,
        @Args('query') queryStatement?: QueryStatement,
        @Args('constraint') constraint?: QueryStatement,
        @Timezone() timezone?: string,
    ): Promise<AppHealthApplicationLanguage>
    {
        return await this.handler.main(
            payload,
            queryStatement,
            constraint,
            timezone,
        );
    }
}