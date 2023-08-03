/* eslint-disable @typescript-eslint/no-unused-vars */
import { AppHealthGetApllicationsHandler, AppHealthGetApllicationsResolver } from '@api/app-health/application';
import { appHealthMockApplicationData } from '@app/app-health/application';
import { Test, TestingModule } from '@nestjs/testing';

describe('AppHealthGetApllicationsResolver', () =>
{
    let resolver: AppHealthGetApllicationsResolver;
    let handler: AppHealthGetApllicationsHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                AppHealthGetApllicationsResolver,
                {
                    provide : AppHealthGetApllicationsHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        resolver = module.get<AppHealthGetApllicationsResolver>(AppHealthGetApllicationsResolver);
        handler = module.get<AppHealthGetApllicationsHandler>(AppHealthGetApllicationsHandler);
    });

    test('AppHealthGetApllicationsResolver should be defined', () =>
    {
        expect(resolver).   toBeDefined();
    });

    describe('main', () =>
    {
        test('AppHealthGetApllicationsResolver should be defined', () =>
        {
            expect(resolver).   toBeDefined();
        });

        test('should return a appHealthMockApplicationData', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(appHealthMockApplicationData)));
            expect(await resolver.main()).toBe(appHealthMockApplicationData);
        });
    });
});
