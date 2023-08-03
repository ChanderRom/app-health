/* eslint-disable @typescript-eslint/no-unused-vars */
import { AppHealthPaginateApplitacionLanguagesHandler, AppHealthPaginateApplitacionLanguagesResolver } from '@api/app-health/application-language';
import { appHealthMockApplicationLanguageData } from '@app/app-health/application-language';
import { Test, TestingModule } from '@nestjs/testing';

describe('AppHealthPaginateApplitacionLanguagesResolver', () =>
{
    let resolver: AppHealthPaginateApplitacionLanguagesResolver;
    let handler: AppHealthPaginateApplitacionLanguagesHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                AppHealthPaginateApplitacionLanguagesResolver,
                {
                    provide : AppHealthPaginateApplitacionLanguagesHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        resolver = module.get<AppHealthPaginateApplitacionLanguagesResolver>(AppHealthPaginateApplitacionLanguagesResolver);
        handler = module.get<AppHealthPaginateApplitacionLanguagesHandler>(AppHealthPaginateApplitacionLanguagesHandler);
    });

    test('AppHealthPaginateApplitacionLanguagesResolver should be defined', () =>
    {
        expect(resolver).toBeDefined();
    });

    describe('main', () =>
    {
        test('AppHealthPaginateApplitacionLanguagesResolver should be defined', () =>
        {
            expect(resolver).toBeDefined();
        });

        test('should return a appHealthMockApplicationLanguageData', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve({
                total: 5,
                count: 5,
                rows : appHealthMockApplicationLanguageData,
            })));
            expect(await resolver.main()).toStrictEqual({
                total: 5,
                count: 5,
                rows : appHealthMockApplicationLanguageData,
            });
        });
    });
});
