import { AppHealthCreateApplitacionLanguagesHandler, AppHealthCreateApplitacionLanguagesResolver } from '@api/app-health/application-language';
import { AppHealthCreateApplicationLanguageInput } from '@api/graphql';
import { appHealthMockApplicationLanguageData } from '@app/app-health/application-language';
import { Test, TestingModule } from '@nestjs/testing';

describe('AppHealthCreateApplitacionLanguagesResolver', () =>
{
    let resolver: AppHealthCreateApplitacionLanguagesResolver;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                AppHealthCreateApplitacionLanguagesResolver,
                {
                    provide : AppHealthCreateApplitacionLanguagesHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        resolver = module.get<AppHealthCreateApplitacionLanguagesResolver>(AppHealthCreateApplitacionLanguagesResolver);
    });

    test('AppHealthCreateApplitacionLanguagesResolver should be defined', () =>
    {
        expect(resolver).toBeDefined();
    });

    describe('main', () =>
    {
        test('AppHealthCreateApplitacionLanguagesResolver should be defined', () =>
        {
            expect(resolver).toBeDefined();
        });

        test('should return an applitacionLanguages created', async () =>
        {
            expect(await resolver.main(<AppHealthCreateApplicationLanguageInput[]>appHealthMockApplicationLanguageData)).toBe(undefined);
        });
    });
});