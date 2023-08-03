/* eslint-disable @typescript-eslint/no-unused-vars */
import { AppHealthUpdateApplitacionLanguagesHandler, AppHealthUpdateApplitacionLanguagesResolver } from '@api/app-health/application-language';
import { AppHealthUpdateApplitacionLanguagesInput } from '@api/graphql';
import { appHealthMockApplicationLanguageData } from '@app/app-health/application-language';
import { Test, TestingModule } from '@nestjs/testing';

describe('AppHealthUpdateApplitacionLanguagesResolver', () =>
{
    let resolver: AppHealthUpdateApplitacionLanguagesResolver;
    let handler: AppHealthUpdateApplitacionLanguagesHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                AppHealthUpdateApplitacionLanguagesResolver,
                {
                    provide : AppHealthUpdateApplitacionLanguagesHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        resolver = module.get<AppHealthUpdateApplitacionLanguagesResolver>(AppHealthUpdateApplitacionLanguagesResolver);
        handler = module.get<AppHealthUpdateApplitacionLanguagesHandler>(AppHealthUpdateApplitacionLanguagesHandler);
    });

    test('AppHealthUpdateApplitacionLanguagesResolver should be defined', () =>
    {
        expect(resolver).toBeDefined();
    });

    describe('main', () =>
    {
        test('AppHealthUpdateApplitacionLanguagesResolver should be defined', () =>
        {
            expect(resolver).toBeDefined();
        });

        test('should return a applitacionLanguages updated', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(appHealthMockApplicationLanguageData[0])));
            expect(await resolver.main(<AppHealthUpdateApplitacionLanguagesInput>appHealthMockApplicationLanguageData[0])).toBe(appHealthMockApplicationLanguageData[0]);
        });
    });
});
