/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { AppHealthApplicationLanguageDto, AppHealthCreateApplicationLanguageDto, AppHealthCreateApplitacionLanguagesHandler } from '@api/app-health/application-language';
import { Auditing, AuditingMeta, Timezone } from '@aurorajs.dev/core';
import { Body, Controller, Post } from '@nestjs/common';
import { ApiBody, ApiCreatedResponse, ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('[app-health] application-language')
@Controller('app-health/applitacion-languages/create')
export class AppHealthCreateApplitacionLanguagesController
{
    constructor(
        private readonly handler: AppHealthCreateApplitacionLanguagesHandler,
    ) {}

    @Post()
    @ApiOperation({ summary: 'Create applitacion-languages in batch' })
    @ApiCreatedResponse({ description: 'The records has been created successfully.' , type: [AppHealthApplicationLanguageDto]})
    @ApiBody({ type: [AppHealthCreateApplicationLanguageDto]})
    async main(
        @Body() payload: AppHealthCreateApplicationLanguageDto[],
        @Timezone() timezone?: string,
    )
    {
        return await this.handler.main(
            payload,
            timezone,
        );
    }
}
