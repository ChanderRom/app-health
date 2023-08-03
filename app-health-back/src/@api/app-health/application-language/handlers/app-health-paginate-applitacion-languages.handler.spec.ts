/* eslint-disable @typescript-eslint/no-unused-vars */
import { AppHealthPaginateApplitacionLanguagesHandler } from '@api/app-health/application-language';
import { appHealthMockApplicationLanguageData } from '@app/app-health/application-language';
import { IQueryBus } from '@aurorajs.dev/core';
import { Test, TestingModule } from '@nestjs/testing';

describe('AppHealthPaginateApplitacionLanguagesHandler', () =>
{
    let handler: AppHealthPaginateApplitacionLanguagesHandler;
    let queryBus: IQueryBus;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                AppHealthPaginateApplitacionLanguagesHandler,
                {
                    provide : IQueryBus,
                    useValue: {
                        ask: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        handler = module.get<AppHealthPaginateApplitacionLanguagesHandler>(AppHealthPaginateApplitacionLanguagesHandler);
        queryBus = module.get<IQueryBus>(IQueryBus);
    });

    test('AppHealthPaginateApplitacionLanguagesHandler should be defined', () =>
    {
        expect(handler).toBeDefined();
    });

    describe('main', () =>
    {
        test('AppHealthPaginateApplitacionLanguagesHandler should be defined', () =>
        {
            expect(handler).toBeDefined();
        });

        test('should return a applitacionLanguages', async () =>
        {
            jest.spyOn(queryBus, 'ask').mockImplementation(() => new Promise(resolve => resolve({
                total: appHealthMockApplicationLanguageData.length,
                count: appHealthMockApplicationLanguageData.length,
                rows : appHealthMockApplicationLanguageData,
            })));
            expect(
                await handler.main(
                    {},
                    {},
                ),
            )
                .toEqual({
                    total: appHealthMockApplicationLanguageData.length,
                    count: appHealthMockApplicationLanguageData.length,
                    rows : appHealthMockApplicationLanguageData,
                });
        });
    });
});