import { AppHealthCreateApllicationsController, AppHealthCreateApllicationsHandler } from '@api/app-health/application';
import { appHealthMockApplicationData } from '@app/app-health/application';
import { Test, TestingModule } from '@nestjs/testing';

describe('AppHealthCreateApllicationsController', () =>
{
    let controller: AppHealthCreateApllicationsController;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [
                AppHealthCreateApllicationsController,
            ],
            providers: [
                {
                    provide : AppHealthCreateApllicationsHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        controller = module.get<AppHealthCreateApllicationsController>(AppHealthCreateApllicationsController);
    });

    describe('main', () =>
    {
        test('AppHealthCreateApllicationsController should be defined', () =>
        {
            expect(controller).toBeDefined();
        });

        test('should return an appHealthMockApplicationData created', async () =>
        {
            expect(
                await controller.main(
                    appHealthMockApplicationData,
                ),
            )
                .toBe(undefined);
        });
    });
});