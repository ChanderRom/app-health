/* eslint-disable @typescript-eslint/no-unused-vars */
import { AppHealthPaginateApllicationsHandler } from '@api/app-health/application';
import { appHealthMockApplicationData } from '@app/app-health/application';
import { IQueryBus } from '@aurorajs.dev/core';
import { Test, TestingModule } from '@nestjs/testing';

describe('AppHealthPaginateApllicationsHandler', () =>
{
    let handler: AppHealthPaginateApllicationsHandler;
    let queryBus: IQueryBus;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                AppHealthPaginateApllicationsHandler,
                {
                    provide : IQueryBus,
                    useValue: {
                        ask: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        handler = module.get<AppHealthPaginateApllicationsHandler>(AppHealthPaginateApllicationsHandler);
        queryBus = module.get<IQueryBus>(IQueryBus);
    });

    test('AppHealthPaginateApllicationsHandler should be defined', () =>
    {
        expect(handler).toBeDefined();
    });

    describe('main', () =>
    {
        test('AppHealthPaginateApllicationsHandler should be defined', () =>
        {
            expect(handler).toBeDefined();
        });

        test('should return a apllications', async () =>
        {
            jest.spyOn(queryBus, 'ask').mockImplementation(() => new Promise(resolve => resolve({
                total: appHealthMockApplicationData.length,
                count: appHealthMockApplicationData.length,
                rows : appHealthMockApplicationData,
            })));
            expect(
                await handler.main(
                    {},
                    {},
                ),
            )
                .toEqual({
                    total: appHealthMockApplicationData.length,
                    count: appHealthMockApplicationData.length,
                    rows : appHealthMockApplicationData,
                });
        });
    });
});