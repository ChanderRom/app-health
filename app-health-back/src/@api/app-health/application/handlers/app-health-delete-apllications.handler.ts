import { AppHealthApplicationDto } from '@api/app-health/application';
import { AppHealthApplication } from '@api/graphql';
import { AppHealthDeleteApllicationsCommand, AppHealthGetApllicationsQuery } from '@app/app-health/application';
import { ICommandBus, IQueryBus, QueryStatement } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppHealthDeleteApllicationsHandler
{
    constructor(
        private readonly commandBus: ICommandBus,
        private readonly queryBus: IQueryBus,
    ) {}

    async main(
        queryStatement?: QueryStatement,
        constraint?: QueryStatement,
        timezone?: string,
    ): Promise<AppHealthApplication[] | AppHealthApplicationDto[]>
    {
        const apllications = await this.queryBus.ask(new AppHealthGetApllicationsQuery(
            queryStatement,
            constraint,
            {
                timezone,
            },
        ));

        await this.commandBus.dispatch(new AppHealthDeleteApllicationsCommand(
            queryStatement,
            constraint,
            {
                timezone,
            },
        ));

        return apllications;
    }
}