import { AppHealthCreateApplicationLanguageDto } from '@api/app-health/application-language';
import { AppHealthCreateApplicationLanguageInput } from '@api/graphql';
import { AppHealthCreateApplitacionLanguagesCommand } from '@app/app-health/application-language';
import { ICommandBus } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppHealthCreateApplitacionLanguagesHandler
{
    constructor(
        private readonly commandBus: ICommandBus,
    ) {}

    async main(
        payload: AppHealthCreateApplicationLanguageInput[] | AppHealthCreateApplicationLanguageDto[],
        timezone?: string,
    ): Promise<boolean>
    {
        await this.commandBus.dispatch(new AppHealthCreateApplitacionLanguagesCommand(
            payload,
            {
                timezone,
            },
        ));

        return true;
    }
}