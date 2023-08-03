import { AppHealthApplicationLanguageDto, AppHealthUpdateApplitacionLanguagesDto } from '@api/app-health/application-language';
import { AppHealthApplicationLanguage, AppHealthUpdateApplitacionLanguagesInput } from '@api/graphql';
import { AppHealthGetApplitacionLanguagesQuery, AppHealthUpdateApplitacionLanguagesCommand } from '@app/app-health/application-language';
import { ICommandBus, IQueryBus, QueryStatement } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppHealthUpdateApplitacionLanguagesHandler
{
    constructor(
        private readonly commandBus: ICommandBus,
        private readonly queryBus: IQueryBus,
    ) {}

    async main(
        payload: AppHealthUpdateApplitacionLanguagesInput | AppHealthUpdateApplitacionLanguagesDto,
        queryStatement?: QueryStatement,
        constraint?: QueryStatement,
        timezone?: string,
    ): Promise<AppHealthApplicationLanguage | AppHealthApplicationLanguageDto>
    {
        await this.commandBus.dispatch(new AppHealthUpdateApplitacionLanguagesCommand(
            payload,
            queryStatement,
            constraint,
            {
                timezone,
            },
        ));

        return await this.queryBus.ask(new AppHealthGetApplitacionLanguagesQuery(
            queryStatement,
            constraint,
            {
                timezone,
            },
        ));
    }
}