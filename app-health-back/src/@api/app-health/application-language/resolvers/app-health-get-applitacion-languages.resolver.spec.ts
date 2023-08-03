/* eslint-disable @typescript-eslint/no-unused-vars */
import { AppHealthGetApplitacionLanguagesHandler, AppHealthGetApplitacionLanguagesResolver } from '@api/app-health/application-language';
import { appHealthMockApplicationLanguageData } from '@app/app-health/application-language';
import { Test, TestingModule } from '@nestjs/testing';

describe('AppHealthGetApplitacionLanguagesResolver', () =>
{
    let resolver: AppHealthGetApplitacionLanguagesResolver;
    let handler: AppHealthGetApplitacionLanguagesHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                AppHealthGetApplitacionLanguagesResolver,
                {
                    provide : AppHealthGetApplitacionLanguagesHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        resolver = module.get<AppHealthGetApplitacionLanguagesResolver>(AppHealthGetApplitacionLanguagesResolver);
        handler = module.get<AppHealthGetApplitacionLanguagesHandler>(AppHealthGetApplitacionLanguagesHandler);
    });

    test('AppHealthGetApplitacionLanguagesResolver should be defined', () =>
    {
        expect(resolver).   toBeDefined();
    });

    describe('main', () =>
    {
        test('AppHealthGetApplitacionLanguagesResolver should be defined', () =>
        {
            expect(resolver).   toBeDefined();
        });

        test('should return a appHealthMockApplicationLanguageData', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(appHealthMockApplicationLanguageData)));
            expect(await resolver.main()).toBe(appHealthMockApplicationLanguageData);
        });
    });
});
