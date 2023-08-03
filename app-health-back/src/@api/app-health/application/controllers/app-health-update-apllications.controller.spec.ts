import { AppHealthUpdateApllicationsController, AppHealthUpdateApllicationsHandler } from '@api/app-health/application';
import { appHealthMockApplicationData } from '@app/app-health/application';
import { Test, TestingModule } from '@nestjs/testing';

describe('AppHealthUpdateApllicationsController', () =>
{
    let controller: AppHealthUpdateApllicationsController;
    let handler: AppHealthUpdateApllicationsHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            controllers: [
                AppHealthUpdateApllicationsController,
            ],
            providers: [
                {
                    provide : AppHealthUpdateApllicationsHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        controller = module.get<AppHealthUpdateApllicationsController>(AppHealthUpdateApllicationsController);
        handler = module.get<AppHealthUpdateApllicationsHandler>(AppHealthUpdateApllicationsHandler);
    });

    describe('main', () =>
    {
        test('AppHealthUpdateApllicationsController should be defined', () =>
        {
            expect(controller).toBeDefined();
        });

        test('should return a apllications updated', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(appHealthMockApplicationData[0])));
            expect(await controller.main(appHealthMockApplicationData[0])).toBe(appHealthMockApplicationData[0]);
        });
    });
});
