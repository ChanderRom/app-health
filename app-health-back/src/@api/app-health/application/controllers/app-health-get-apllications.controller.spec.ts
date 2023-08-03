import { AppHealthGetApllicationsController, AppHealthGetApllicationsHandler } from '@api/app-health/application';
import { appHealthMockApplicationData } from '@app/app-health/application';
import { Test, TestingModule } from '@nestjs/testing';

describe('AppHealthGetApllicationsController', () =>
{
    let controller: AppHealthGetApllicationsController;
    let handler: AppHealthGetApllicationsHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            controllers: [
                AppHealthGetApllicationsController,
            ],
            providers: [
                {
                    provide : AppHealthGetApllicationsHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        controller = module.get<AppHealthGetApllicationsController>(AppHealthGetApllicationsController);
        handler = module.get<AppHealthGetApllicationsHandler>(AppHealthGetApllicationsHandler);
    });

    describe('main', () =>
    {
        test('AppHealthGetApllicationsController should be defined', () =>
        {
            expect(controller).toBeDefined();
        });

        test('should return a appHealthMockApplicationData', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(appHealthMockApplicationData)));
            expect(await controller.main()).toBe(appHealthMockApplicationData);
        });
    });
});
