/* eslint-disable indent */
import { ApiProperty } from '@nestjs/swagger';

export class AppHealthUpdateApplicationDatabasesDto
{
    @ApiProperty({
        type       : String,
        description: 'id [input here api field description]',
    })
    id?: string;

    @ApiProperty({
        type       : String,
        description: 'applicationId [input here api field description]',
        example    : '209e8dce-ce93-5b3d-a4f3-06ce49207393',
    })
    applicationId?: string;

    @ApiProperty({
        type       : String,
        description: 'databaseId [input here api field description]',
        example    : '7e284ed5-bd06-51e2-b1ad-5cca2ea7a198',
    })
    databaseId?: string;

    @ApiProperty({
        type       : String,
        description: 'version [input here api field description]',
    })
    version?: string;

    @ApiProperty({
        type       : Number,
        description: 'size [input here api field description]',
    })
    size?: number;

    @ApiProperty({
        type       : Number,
        description: 'score [input here api field description]',
    })
    score?: number;

    @ApiProperty({
        type       : Number,
        description: 'totalCollectionTables [input here api field description]',
    })
    totalCollectionTables?: number;

    @ApiProperty({
        type       : Number,
        description: 'totalFields [input here api field description]',
    })
    totalFields?: number;

}
