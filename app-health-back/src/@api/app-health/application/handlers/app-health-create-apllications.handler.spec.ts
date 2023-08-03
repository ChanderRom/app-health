import { AppHealthCreateApllicationsHandler } from '@api/app-health/application';
import { appHealthMockApplicationData } from '@app/app-health/application';
import { ICommandBus } from '@aurorajs.dev/core';
import { Test, TestingModule } from '@nestjs/testing';

describe('AppHealthCreateApllicationsHandler', () =>
{
    let handler: AppHealthCreateApllicationsHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                AppHealthCreateApllicationsHandler,
                {
                    provide : ICommandBus,
                    useValue: {
                        dispatch: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        handler = module.get<AppHealthCreateApllicationsHandler>(AppHealthCreateApllicationsHandler);
    });

    describe('main', () =>
    {
        test('AppHealthCreateApllicationsHandler should be defined', () =>
        {
            expect(handler).toBeDefined();
        });

        test('should return an appHealthMockApplicationData created', async () =>
        {
            expect(await handler.main(appHealthMockApplicationData)).toBe(true);
        });
    });
});