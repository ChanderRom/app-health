/* eslint-disable @typescript-eslint/no-unused-vars */
import { AppHealthDeleteApllicationsHandler, AppHealthDeleteApllicationsResolver } from '@api/app-health/application';
import { appHealthMockApplicationData } from '@app/app-health/application';
import { Test, TestingModule } from '@nestjs/testing';

describe('AppHealthDeleteApllicationsResolver', () =>
{
    let resolver: AppHealthDeleteApllicationsResolver;
    let handler: AppHealthDeleteApllicationsHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                AppHealthDeleteApllicationsResolver,
                {
                    provide : AppHealthDeleteApllicationsHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        resolver = module.get<AppHealthDeleteApllicationsResolver>(AppHealthDeleteApllicationsResolver);
        handler = module.get<AppHealthDeleteApllicationsHandler>(AppHealthDeleteApllicationsHandler);
    });

    test('AppHealthDeleteApllicationsResolver should be defined', () =>
    {
        expect(resolver).toBeDefined();
    });

    describe('main', () =>
    {
        test('AppHealthDeleteApllicationsResolver should be defined', () =>
        {
            expect(resolver).toBeDefined();
        });

        test('should return an appHealthMockApplicationData deleted', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(appHealthMockApplicationData)));
            expect(await resolver.main()).toBe(appHealthMockApplicationData);
        });
    });
});
