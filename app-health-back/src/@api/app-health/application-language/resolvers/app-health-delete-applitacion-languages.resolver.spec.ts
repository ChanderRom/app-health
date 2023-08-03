/* eslint-disable @typescript-eslint/no-unused-vars */
import { AppHealthDeleteApplitacionLanguagesHandler, AppHealthDeleteApplitacionLanguagesResolver } from '@api/app-health/application-language';
import { appHealthMockApplicationLanguageData } from '@app/app-health/application-language';
import { Test, TestingModule } from '@nestjs/testing';

describe('AppHealthDeleteApplitacionLanguagesResolver', () =>
{
    let resolver: AppHealthDeleteApplitacionLanguagesResolver;
    let handler: AppHealthDeleteApplitacionLanguagesHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                AppHealthDeleteApplitacionLanguagesResolver,
                {
                    provide : AppHealthDeleteApplitacionLanguagesHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        resolver = module.get<AppHealthDeleteApplitacionLanguagesResolver>(AppHealthDeleteApplitacionLanguagesResolver);
        handler = module.get<AppHealthDeleteApplitacionLanguagesHandler>(AppHealthDeleteApplitacionLanguagesHandler);
    });

    test('AppHealthDeleteApplitacionLanguagesResolver should be defined', () =>
    {
        expect(resolver).toBeDefined();
    });

    describe('main', () =>
    {
        test('AppHealthDeleteApplitacionLanguagesResolver should be defined', () =>
        {
            expect(resolver).toBeDefined();
        });

        test('should return an appHealthMockApplicationLanguageData deleted', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(appHealthMockApplicationLanguageData)));
            expect(await resolver.main()).toBe(appHealthMockApplicationLanguageData);
        });
    });
});
