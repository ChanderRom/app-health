import { AppHealthCreateApllicationsHandler, AppHealthCreateApllicationsResolver } from '@api/app-health/application';
import { AppHealthCreateApplicationInput } from '@api/graphql';
import { appHealthMockApplicationData } from '@app/app-health/application';
import { Test, TestingModule } from '@nestjs/testing';

describe('AppHealthCreateApllicationsResolver', () =>
{
    let resolver: AppHealthCreateApllicationsResolver;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                AppHealthCreateApllicationsResolver,
                {
                    provide : AppHealthCreateApllicationsHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        resolver = module.get<AppHealthCreateApllicationsResolver>(AppHealthCreateApllicationsResolver);
    });

    test('AppHealthCreateApllicationsResolver should be defined', () =>
    {
        expect(resolver).toBeDefined();
    });

    describe('main', () =>
    {
        test('AppHealthCreateApllicationsResolver should be defined', () =>
        {
            expect(resolver).toBeDefined();
        });

        test('should return an apllications created', async () =>
        {
            expect(await resolver.main(<AppHealthCreateApplicationInput[]>appHealthMockApplicationData)).toBe(undefined);
        });
    });
});