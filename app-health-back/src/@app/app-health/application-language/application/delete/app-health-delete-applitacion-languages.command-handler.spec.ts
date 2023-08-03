import { Test, TestingModule } from '@nestjs/testing';

// custom items
import { AppHealthDeleteApplitacionLanguagesCommandHandler } from './app-health-delete-applitacion-languages.command-handler';
import { AppHealthDeleteApplitacionLanguagesCommand } from './app-health-delete-applitacion-languages.command';
import { AppHealthDeleteApplitacionLanguagesService } from './app-health-delete-applitacion-languages.service';

describe('AppHealthDeleteApplitacionLanguagesCommandHandler', () =>
{
    let commandHandler: AppHealthDeleteApplitacionLanguagesCommandHandler;
    let service: AppHealthDeleteApplitacionLanguagesService;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                AppHealthDeleteApplitacionLanguagesCommandHandler,
                {
                    provide : AppHealthDeleteApplitacionLanguagesService,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        commandHandler = module.get<AppHealthDeleteApplitacionLanguagesCommandHandler>(AppHealthDeleteApplitacionLanguagesCommandHandler);
        service = module.get<AppHealthDeleteApplitacionLanguagesService>(AppHealthDeleteApplitacionLanguagesService);
    });

    describe('main', () =>
    {
        test('AppHealthDeleteApplitacionLanguagesCommandHandler should be defined', () =>
        {
            expect(commandHandler).toBeDefined();
        });

        test('should return void', async () =>
        {
            expect(await commandHandler.execute(
                new AppHealthDeleteApplitacionLanguagesCommand(),
            )).toBe(undefined);
        });
    });
});