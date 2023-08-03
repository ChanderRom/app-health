import { AppHealthCreateApplicationDto } from '@api/app-health/application';
import { AppHealthCreateApplicationInput } from '@api/graphql';
import { AppHealthCreateApllicationsCommand } from '@app/app-health/application';
import { ICommandBus } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppHealthCreateApllicationsHandler
{
    constructor(
        private readonly commandBus: ICommandBus,
    ) {}

    async main(
        payload: AppHealthCreateApplicationInput[] | AppHealthCreateApplicationDto[],
        timezone?: string,
    ): Promise<boolean>
    {
        await this.commandBus.dispatch(new AppHealthCreateApllicationsCommand(
            payload,
            {
                timezone,
            },
        ));

        return true;
    }
}