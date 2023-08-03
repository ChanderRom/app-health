/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { AppHealthApplicationDto, AppHealthUpdateApllicationsDto, AppHealthUpdateApllicationsHandler } from '@api/app-health/application';
import { QueryStatement, Timezone } from '@aurorajs.dev/core';
import { Body, Controller, Put } from '@nestjs/common';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('[app-health] application')
@Controller('app-health/apllications/update')
export class AppHealthUpdateApllicationsController
{
    constructor(
        private readonly handler: AppHealthUpdateApllicationsHandler,
    ) {}

    @Put()
    @ApiOperation({ summary: 'Update apllications' })
    @ApiOkResponse({ description: 'The record has been successfully updated.', type: AppHealthApplicationDto })
    async main(
        @Body() payload: AppHealthUpdateApllicationsDto,
        @Body('query') queryStatement?: QueryStatement,
        @Body('constraint') constraint?: QueryStatement,
        @Timezone() timezone?: string,
    )
    {
        return await this.handler.main(
            payload,
            queryStatement,
            constraint,
            timezone,
        );
    }
}