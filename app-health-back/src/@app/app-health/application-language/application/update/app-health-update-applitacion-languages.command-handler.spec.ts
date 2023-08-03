import { Test, TestingModule } from '@nestjs/testing';

// custom items
import { appHealthMockApplicationLanguageData } from '@app/app-health/application-language/infrastructure/mock/app-health-mock-application-language.data';
import { AppHealthUpdateApplitacionLanguagesCommandHandler } from './app-health-update-applitacion-languages.command-handler';
import { AppHealthUpdateApplitacionLanguagesCommand } from './app-health-update-applitacion-languages.command';
import { AppHealthUpdateApplitacionLanguagesService } from './app-health-update-applitacion-languages.service';

describe('AppHealthUpdateApplitacionLanguagesCommandHandler', () =>
{
    let commandHandler: AppHealthUpdateApplitacionLanguagesCommandHandler;
    let service: AppHealthUpdateApplitacionLanguagesService;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                AppHealthUpdateApplitacionLanguagesCommandHandler,
                {
                    provide : AppHealthUpdateApplitacionLanguagesService,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        commandHandler = module.get<AppHealthUpdateApplitacionLanguagesCommandHandler>(AppHealthUpdateApplitacionLanguagesCommandHandler);
        service = module.get<AppHealthUpdateApplitacionLanguagesService>(AppHealthUpdateApplitacionLanguagesService);
    });

    describe('main', () =>
    {
        test('UpdateApplitacionLanguagesCommandHandler should be defined', () =>
        {
            expect(commandHandler).toBeDefined();
        });

        test('should return an applitacionLanguages updated', async () =>
        {
            expect(await commandHandler.execute(
                new AppHealthUpdateApplitacionLanguagesCommand(
                    {
                        id: appHealthMockApplicationLanguageData[0].id,
                        applicationId: appHealthMockApplicationLanguageData[0].applicationId,
                        languageId: appHealthMockApplicationLanguageData[0].languageId,
                        version: appHealthMockApplicationLanguageData[0].version,
                        score: appHealthMockApplicationLanguageData[0].score,
                        codeQualityScore: appHealthMockApplicationLanguageData[0].codeQualityScore,
                    },
                    {},
                    {},
                    { timezone: process.env.TZ },
                ),
            )).toBe(undefined);
        });
    });
});