import { AppHealthCreateApplitacionLanguagesController, AppHealthCreateApplitacionLanguagesHandler } from '@api/app-health/application-language';
import { appHealthMockApplicationLanguageData } from '@app/app-health/application-language';
import { Test, TestingModule } from '@nestjs/testing';

describe('AppHealthCreateApplitacionLanguagesController', () =>
{
    let controller: AppHealthCreateApplitacionLanguagesController;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [
                AppHealthCreateApplitacionLanguagesController,
            ],
            providers: [
                {
                    provide : AppHealthCreateApplitacionLanguagesHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        controller = module.get<AppHealthCreateApplitacionLanguagesController>(AppHealthCreateApplitacionLanguagesController);
    });

    describe('main', () =>
    {
        test('AppHealthCreateApplitacionLanguagesController should be defined', () =>
        {
            expect(controller).toBeDefined();
        });

        test('should return an appHealthMockApplicationLanguageData created', async () =>
        {
            expect(
                await controller.main(
                    appHealthMockApplicationLanguageData,
                ),
            )
                .toBe(undefined);
        });
    });
});