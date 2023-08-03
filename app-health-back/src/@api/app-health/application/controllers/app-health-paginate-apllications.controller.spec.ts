import { AppHealthPaginateApllicationsController, AppHealthPaginateApllicationsHandler } from '@api/app-health/application';
import { appHealthMockApplicationData } from '@app/app-health/application';
import { Test, TestingModule } from '@nestjs/testing';

describe('AppHealthPaginateApllicationsController', () =>
{
    let controller: AppHealthPaginateApllicationsController;
    let handler: AppHealthPaginateApllicationsHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            controllers: [
                AppHealthPaginateApllicationsController,
            ],
            providers: [
                {
                    provide : AppHealthPaginateApllicationsHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        controller = module.get<AppHealthPaginateApllicationsController>(AppHealthPaginateApllicationsController);
        handler = module.get<AppHealthPaginateApllicationsHandler>(AppHealthPaginateApllicationsHandler);
    });

    describe('main', () =>
    {
        test('AppHealthPaginateApllicationsController should be defined', () =>
        {
            expect(controller).toBeDefined();
        });

        test('should return a appHealthMockApplicationData', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve({
                total: 5,
                count: 5,
                rows : appHealthMockApplicationData,
            })));
            expect(await controller.main()).toStrictEqual({
                total: 5,
                count: 5,
                rows : appHealthMockApplicationData,
            });
        });
    });
});
