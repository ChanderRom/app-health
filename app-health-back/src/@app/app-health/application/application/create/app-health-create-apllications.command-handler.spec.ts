/* eslint-disable @typescript-eslint/no-unused-vars */
import { Test, TestingModule } from '@nestjs/testing';

// custom items
import { appHealthMockApplicationData } from '@app/app-health/application/infrastructure/mock/app-health-mock-application.data';
import { AppHealthCreateApllicationsCommandHandler } from './app-health-create-apllications.command-handler';
import { AppHealthCreateApllicationsCommand } from './app-health-create-apllications.command';
import { AppHealthCreateApllicationsService } from './app-health-create-apllications.service';

describe('appHealthCreateApllicationsCommandHandler', () =>
{
    let commandHandler: AppHealthCreateApllicationsCommandHandler;
    let service: AppHealthCreateApllicationsService;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                AppHealthCreateApllicationsCommandHandler,
                {
                    provide : AppHealthCreateApllicationsService,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        commandHandler = module.get<AppHealthCreateApllicationsCommandHandler>(AppHealthCreateApllicationsCommandHandler);
        service = module.get<AppHealthCreateApllicationsService>(AppHealthCreateApllicationsService);
    });

    describe('main', () =>
    {
        test('AppHealthCreateApllicationsCommandHandler should be defined', () =>
        {
            expect(commandHandler).toBeDefined();
        });

        test('should return AppHealthMockApplicationData createds', async () =>
        {
            expect(await commandHandler.execute(
                new AppHealthCreateApllicationsCommand(
                    appHealthMockApplicationData,
                    { timezone: process.env.TZ },
                ),
            )).toBe(undefined);
        });
    });
});