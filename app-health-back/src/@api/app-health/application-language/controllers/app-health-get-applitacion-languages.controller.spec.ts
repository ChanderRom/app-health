import { AppHealthGetApplitacionLanguagesController, AppHealthGetApplitacionLanguagesHandler } from '@api/app-health/application-language';
import { appHealthMockApplicationLanguageData } from '@app/app-health/application-language';
import { Test, TestingModule } from '@nestjs/testing';

describe('AppHealthGetApplitacionLanguagesController', () =>
{
    let controller: AppHealthGetApplitacionLanguagesController;
    let handler: AppHealthGetApplitacionLanguagesHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            controllers: [
                AppHealthGetApplitacionLanguagesController,
            ],
            providers: [
                {
                    provide : AppHealthGetApplitacionLanguagesHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        controller = module.get<AppHealthGetApplitacionLanguagesController>(AppHealthGetApplitacionLanguagesController);
        handler = module.get<AppHealthGetApplitacionLanguagesHandler>(AppHealthGetApplitacionLanguagesHandler);
    });

    describe('main', () =>
    {
        test('AppHealthGetApplitacionLanguagesController should be defined', () =>
        {
            expect(controller).toBeDefined();
        });

        test('should return a appHealthMockApplicationLanguageData', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(appHealthMockApplicationLanguageData)));
            expect(await controller.main()).toBe(appHealthMockApplicationLanguageData);
        });
    });
});
