import { AppHealthCreateApplitacionLanguagesHandler } from '@api/app-health/application-language';
import { appHealthMockApplicationLanguageData } from '@app/app-health/application-language';
import { ICommandBus } from '@aurorajs.dev/core';
import { Test, TestingModule } from '@nestjs/testing';

describe('AppHealthCreateApplitacionLanguagesHandler', () =>
{
    let handler: AppHealthCreateApplitacionLanguagesHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                AppHealthCreateApplitacionLanguagesHandler,
                {
                    provide : ICommandBus,
                    useValue: {
                        dispatch: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        handler = module.get<AppHealthCreateApplitacionLanguagesHandler>(AppHealthCreateApplitacionLanguagesHandler);
    });

    describe('main', () =>
    {
        test('AppHealthCreateApplitacionLanguagesHandler should be defined', () =>
        {
            expect(handler).toBeDefined();
        });

        test('should return an appHealthMockApplicationLanguageData created', async () =>
        {
            expect(await handler.main(appHealthMockApplicationLanguageData)).toBe(true);
        });
    });
});