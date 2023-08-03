import { AppHealthDeleteApllicationsController, AppHealthDeleteApllicationsHandler } from '@api/app-health/application';
import { appHealthMockApplicationData } from '@app/app-health/application';
import { Test, TestingModule } from '@nestjs/testing';

describe('AppHealthDeleteApllicationsController', () =>
{
    let controller: AppHealthDeleteApllicationsController;
    let handler: AppHealthDeleteApllicationsHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            controllers: [
                AppHealthDeleteApllicationsController,
            ],
            providers: [
                {
                    provide : AppHealthDeleteApllicationsHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        controller = module.get<AppHealthDeleteApllicationsController>(AppHealthDeleteApllicationsController);
        handler = module.get<AppHealthDeleteApllicationsHandler>(AppHealthDeleteApllicationsHandler);
    });

    describe('main', () =>
    {
        test('AppHealthDeleteApllicationsController should be defined', () =>
        {
            expect(controller).toBeDefined();
        });

        test('should return an appHealthMockApplicationData deleted', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(appHealthMockApplicationData)));
            expect(await controller.main()).toBe(appHealthMockApplicationData);
        });
    });
});
