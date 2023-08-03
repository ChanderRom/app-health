/* eslint-disable @typescript-eslint/no-unused-vars */
import { Test, TestingModule } from '@nestjs/testing';

// custom items
import { appHealthMockApplicationLanguageData } from '@app/app-health/application-language/infrastructure/mock/app-health-mock-application-language.data';
import { AppHealthCreateApplitacionLanguagesCommandHandler } from './app-health-create-applitacion-languages.command-handler';
import { AppHealthCreateApplitacionLanguagesCommand } from './app-health-create-applitacion-languages.command';
import { AppHealthCreateApplitacionLanguagesService } from './app-health-create-applitacion-languages.service';

describe('appHealthCreateApplitacionLanguagesCommandHandler', () =>
{
    let commandHandler: AppHealthCreateApplitacionLanguagesCommandHandler;
    let service: AppHealthCreateApplitacionLanguagesService;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                AppHealthCreateApplitacionLanguagesCommandHandler,
                {
                    provide : AppHealthCreateApplitacionLanguagesService,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        commandHandler = module.get<AppHealthCreateApplitacionLanguagesCommandHandler>(AppHealthCreateApplitacionLanguagesCommandHandler);
        service = module.get<AppHealthCreateApplitacionLanguagesService>(AppHealthCreateApplitacionLanguagesService);
    });

    describe('main', () =>
    {
        test('AppHealthCreateApplitacionLanguagesCommandHandler should be defined', () =>
        {
            expect(commandHandler).toBeDefined();
        });

        test('should return AppHealthMockApplicationLanguageData createds', async () =>
        {
            expect(await commandHandler.execute(
                new AppHealthCreateApplitacionLanguagesCommand(
                    appHealthMockApplicationLanguageData,
                    { timezone: process.env.TZ },
                ),
            )).toBe(undefined);
        });
    });
});