/* eslint-disable @typescript-eslint/no-unused-vars */
import { AppHealthUpdateApllicationsHandler, AppHealthUpdateApllicationsResolver } from '@api/app-health/application';
import { AppHealthUpdateApllicationsInput } from '@api/graphql';
import { appHealthMockApplicationData } from '@app/app-health/application';
import { Test, TestingModule } from '@nestjs/testing';

describe('AppHealthUpdateApllicationsResolver', () =>
{
    let resolver: AppHealthUpdateApllicationsResolver;
    let handler: AppHealthUpdateApllicationsHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                AppHealthUpdateApllicationsResolver,
                {
                    provide : AppHealthUpdateApllicationsHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        resolver = module.get<AppHealthUpdateApllicationsResolver>(AppHealthUpdateApllicationsResolver);
        handler = module.get<AppHealthUpdateApllicationsHandler>(AppHealthUpdateApllicationsHandler);
    });

    test('AppHealthUpdateApllicationsResolver should be defined', () =>
    {
        expect(resolver).toBeDefined();
    });

    describe('main', () =>
    {
        test('AppHealthUpdateApllicationsResolver should be defined', () =>
        {
            expect(resolver).toBeDefined();
        });

        test('should return a apllications updated', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(appHealthMockApplicationData[0])));
            expect(await resolver.main(<AppHealthUpdateApllicationsInput>appHealthMockApplicationData[0])).toBe(appHealthMockApplicationData[0]);
        });
    });
});
