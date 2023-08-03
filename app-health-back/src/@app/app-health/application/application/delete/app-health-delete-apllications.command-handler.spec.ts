import { Test, TestingModule } from '@nestjs/testing';

// custom items
import { AppHealthDeleteApllicationsCommandHandler } from './app-health-delete-apllications.command-handler';
import { AppHealthDeleteApllicationsCommand } from './app-health-delete-apllications.command';
import { AppHealthDeleteApllicationsService } from './app-health-delete-apllications.service';

describe('AppHealthDeleteApllicationsCommandHandler', () =>
{
    let commandHandler: AppHealthDeleteApllicationsCommandHandler;
    let service: AppHealthDeleteApllicationsService;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                AppHealthDeleteApllicationsCommandHandler,
                {
                    provide : AppHealthDeleteApllicationsService,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        commandHandler = module.get<AppHealthDeleteApllicationsCommandHandler>(AppHealthDeleteApllicationsCommandHandler);
        service = module.get<AppHealthDeleteApllicationsService>(AppHealthDeleteApllicationsService);
    });

    describe('main', () =>
    {
        test('AppHealthDeleteApllicationsCommandHandler should be defined', () =>
        {
            expect(commandHandler).toBeDefined();
        });

        test('should return void', async () =>
        {
            expect(await commandHandler.execute(
                new AppHealthDeleteApllicationsCommand(),
            )).toBe(undefined);
        });
    });
});