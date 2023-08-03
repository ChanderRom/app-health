import { AppHealthApplicationDto, AppHealthUpdateApllicationsDto } from '@api/app-health/application';
import { AppHealthApplication, AppHealthUpdateApllicationsInput } from '@api/graphql';
import { AppHealthGetApllicationsQuery, AppHealthUpdateApllicationsCommand } from '@app/app-health/application';
import { ICommandBus, IQueryBus, QueryStatement } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppHealthUpdateApllicationsHandler
{
    constructor(
        private readonly commandBus: ICommandBus,
        private readonly queryBus: IQueryBus,
    ) {}

    async main(
        payload: AppHealthUpdateApllicationsInput | AppHealthUpdateApllicationsDto,
        queryStatement?: QueryStatement,
        constraint?: QueryStatement,
        timezone?: string,
    ): Promise<AppHealthApplication | AppHealthApplicationDto>
    {
        await this.commandBus.dispatch(new AppHealthUpdateApllicationsCommand(
            payload,
            queryStatement,
            constraint,
            {
                timezone,
            },
        ));

        return await this.queryBus.ask(new AppHealthGetApllicationsQuery(
            queryStatement,
            constraint,
            {
                timezone,
            },
        ));
    }
}