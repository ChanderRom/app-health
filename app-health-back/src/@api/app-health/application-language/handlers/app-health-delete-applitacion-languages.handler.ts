import { AppHealthApplicationLanguageDto } from '@api/app-health/application-language';
import { AppHealthApplicationLanguage } from '@api/graphql';
import { AppHealthDeleteApplitacionLanguagesCommand, AppHealthGetApplitacionLanguagesQuery } from '@app/app-health/application-language';
import { ICommandBus, IQueryBus, QueryStatement } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppHealthDeleteApplitacionLanguagesHandler
{
    constructor(
        private readonly commandBus: ICommandBus,
        private readonly queryBus: IQueryBus,
    ) {}

    async main(
        queryStatement?: QueryStatement,
        constraint?: QueryStatement,
        timezone?: string,
    ): Promise<AppHealthApplicationLanguage[] | AppHealthApplicationLanguageDto[]>
    {
        const applitacionLanguages = await this.queryBus.ask(new AppHealthGetApplitacionLanguagesQuery(
            queryStatement,
            constraint,
            {
                timezone,
            },
        ));

        await this.commandBus.dispatch(new AppHealthDeleteApplitacionLanguagesCommand(
            queryStatement,
            constraint,
            {
                timezone,
            },
        ));

        return applitacionLanguages;
    }
}