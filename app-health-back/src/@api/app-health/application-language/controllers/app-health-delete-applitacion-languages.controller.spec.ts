import { AppHealthDeleteApplitacionLanguagesController, AppHealthDeleteApplitacionLanguagesHandler } from '@api/app-health/application-language';
import { appHealthMockApplicationLanguageData } from '@app/app-health/application-language';
import { Test, TestingModule } from '@nestjs/testing';

describe('AppHealthDeleteApplitacionLanguagesController', () =>
{
    let controller: AppHealthDeleteApplitacionLanguagesController;
    let handler: AppHealthDeleteApplitacionLanguagesHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            controllers: [
                AppHealthDeleteApplitacionLanguagesController,
            ],
            providers: [
                {
                    provide : AppHealthDeleteApplitacionLanguagesHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        controller = module.get<AppHealthDeleteApplitacionLanguagesController>(AppHealthDeleteApplitacionLanguagesController);
        handler = module.get<AppHealthDeleteApplitacionLanguagesHandler>(AppHealthDeleteApplitacionLanguagesHandler);
    });

    describe('main', () =>
    {
        test('AppHealthDeleteApplitacionLanguagesController should be defined', () =>
        {
            expect(controller).toBeDefined();
        });

        test('should return an appHealthMockApplicationLanguageData deleted', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(appHealthMockApplicationLanguageData)));
            expect(await controller.main()).toBe(appHealthMockApplicationLanguageData);
        });
    });
});
