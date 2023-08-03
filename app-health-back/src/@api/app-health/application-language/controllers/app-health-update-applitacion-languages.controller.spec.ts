import { AppHealthUpdateApplitacionLanguagesController, AppHealthUpdateApplitacionLanguagesHandler } from '@api/app-health/application-language';
import { appHealthMockApplicationLanguageData } from '@app/app-health/application-language';
import { Test, TestingModule } from '@nestjs/testing';

describe('AppHealthUpdateApplitacionLanguagesController', () =>
{
    let controller: AppHealthUpdateApplitacionLanguagesController;
    let handler: AppHealthUpdateApplitacionLanguagesHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            controllers: [
                AppHealthUpdateApplitacionLanguagesController,
            ],
            providers: [
                {
                    provide : AppHealthUpdateApplitacionLanguagesHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        controller = module.get<AppHealthUpdateApplitacionLanguagesController>(AppHealthUpdateApplitacionLanguagesController);
        handler = module.get<AppHealthUpdateApplitacionLanguagesHandler>(AppHealthUpdateApplitacionLanguagesHandler);
    });

    describe('main', () =>
    {
        test('AppHealthUpdateApplitacionLanguagesController should be defined', () =>
        {
            expect(controller).toBeDefined();
        });

        test('should return a applitacionLanguages updated', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(appHealthMockApplicationLanguageData[0])));
            expect(await controller.main(appHealthMockApplicationLanguageData[0])).toBe(appHealthMockApplicationLanguageData[0]);
        });
    });
});
