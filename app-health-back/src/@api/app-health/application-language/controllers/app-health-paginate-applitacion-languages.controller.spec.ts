import { AppHealthPaginateApplitacionLanguagesController, AppHealthPaginateApplitacionLanguagesHandler } from '@api/app-health/application-language';
import { appHealthMockApplicationLanguageData } from '@app/app-health/application-language';
import { Test, TestingModule } from '@nestjs/testing';

describe('AppHealthPaginateApplitacionLanguagesController', () =>
{
    let controller: AppHealthPaginateApplitacionLanguagesController;
    let handler: AppHealthPaginateApplitacionLanguagesHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            controllers: [
                AppHealthPaginateApplitacionLanguagesController,
            ],
            providers: [
                {
                    provide : AppHealthPaginateApplitacionLanguagesHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        controller = module.get<AppHealthPaginateApplitacionLanguagesController>(AppHealthPaginateApplitacionLanguagesController);
        handler = module.get<AppHealthPaginateApplitacionLanguagesHandler>(AppHealthPaginateApplitacionLanguagesHandler);
    });

    describe('main', () =>
    {
        test('AppHealthPaginateApplitacionLanguagesController should be defined', () =>
        {
            expect(controller).toBeDefined();
        });

        test('should return a appHealthMockApplicationLanguageData', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve({
                total: 5,
                count: 5,
                rows : appHealthMockApplicationLanguageData,
            })));
            expect(await controller.main()).toStrictEqual({
                total: 5,
                count: 5,
                rows : appHealthMockApplicationLanguageData,
            });
        });
    });
});
