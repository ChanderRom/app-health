import { ColumnConfig, ColumnDataType } from '@aurora';

export const applicationInfrastructureServiceColumnsConfig: ColumnConfig[] = [
    {
        type       : ColumnDataType.STRING,
        field      : 'applicationId',
        sort       : 'applicationId',
        translation: 'appHealth.ApplicationId',
    },
    {
        type       : ColumnDataType.STRING,
        field      : 'infrastructureServiceId',
        sort       : 'infrastructureServiceId',
        translation: 'appHealth.InfrastructureServiceId',
    },
    {
        type       : ColumnDataType.NUMBER,
        field      : 'avarageCostPerYear',
        sort       : 'avarageCostPerYear',
        translation: 'appHealth.AvarageCostPerYear',
    },
    {
        type       : ColumnDataType.NUMBER,
        field      : 'score',
        sort       : 'score',
        translation: 'appHealth.Score',
    },
];