/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { AppHealthApplicationDto, AppHealthCreateApllicationsHandler, AppHealthCreateApplicationDto } from '@api/app-health/application';
import { Auditing, AuditingMeta, Timezone } from '@aurorajs.dev/core';
import { Body, Controller, Post } from '@nestjs/common';
import { ApiBody, ApiCreatedResponse, ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('[app-health] application')
@Controller('app-health/apllications/create')
export class AppHealthCreateApllicationsController
{
    constructor(
        private readonly handler: AppHealthCreateApllicationsHandler,
    ) {}

    @Post()
    @ApiOperation({ summary: 'Create apllications in batch' })
    @ApiCreatedResponse({ description: 'The records has been created successfully.' , type: [AppHealthApplicationDto]})
    @ApiBody({ type: [AppHealthCreateApplicationDto]})
    async main(
        @Body() payload: AppHealthCreateApplicationDto[],
        @Timezone() timezone?: string,
    )
    {
        return await this.handler.main(
            payload,
            timezone,
        );
    }
}
