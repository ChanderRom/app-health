/* eslint-disable @typescript-eslint/no-unused-vars */
import { AppHealthPaginateApllicationsHandler, AppHealthPaginateApllicationsResolver } from '@api/app-health/application';
import { appHealthMockApplicationData } from '@app/app-health/application';
import { Test, TestingModule } from '@nestjs/testing';

describe('AppHealthPaginateApllicationsResolver', () =>
{
    let resolver: AppHealthPaginateApllicationsResolver;
    let handler: AppHealthPaginateApllicationsHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                AppHealthPaginateApllicationsResolver,
                {
                    provide : AppHealthPaginateApllicationsHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        resolver = module.get<AppHealthPaginateApllicationsResolver>(AppHealthPaginateApllicationsResolver);
        handler = module.get<AppHealthPaginateApllicationsHandler>(AppHealthPaginateApllicationsHandler);
    });

    test('AppHealthPaginateApllicationsResolver should be defined', () =>
    {
        expect(resolver).toBeDefined();
    });

    describe('main', () =>
    {
        test('AppHealthPaginateApllicationsResolver should be defined', () =>
        {
            expect(resolver).toBeDefined();
        });

        test('should return a appHealthMockApplicationData', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve({
                total: 5,
                count: 5,
                rows : appHealthMockApplicationData,
            })));
            expect(await resolver.main()).toStrictEqual({
                total: 5,
                count: 5,
                rows : appHealthMockApplicationData,
            });
        });
    });
});
