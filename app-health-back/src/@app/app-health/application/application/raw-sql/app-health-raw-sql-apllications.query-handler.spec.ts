import { Test, TestingModule } from '@nestjs/testing';

// custom items
import { AppHealthMockApplicationRepository } from '@app/app-health/application/infrastructure/mock/app-health-mock-application.repository';
import { AppHealthIApplicationRepository } from '@app/app-health/application/domain/app-health-application.repository';
import { AppHealthApplicationMapper } from '@app/app-health/application/domain/app-health-application.mapper';
import { AppHealthRawSQLApllicationsQueryHandler } from './app-health-raw-sql-apllications.query-handler';
import { AppHealthRawSQLApllicationsQuery } from './app-health-raw-sql-apllications.query';
import { AppHealthRawSQLApllicationsService } from './app-health-raw-sql-apllications.service';

describe('RawSQLApllicationsQueryHandler', () =>
{
    let queryHandler: AppHealthRawSQLApllicationsQueryHandler;
    let service: AppHealthRawSQLApllicationsService;
    let repository: AppHealthMockApplicationRepository;
    let mapper: AppHealthApplicationMapper;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                AppHealthRawSQLApllicationsQueryHandler,
                {
                    provide : AppHealthIApplicationRepository,
                    useClass: AppHealthMockApplicationRepository,
                },
                {
                    provide : AppHealthRawSQLApllicationsService,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        queryHandler = module.get<AppHealthRawSQLApllicationsQueryHandler>(AppHealthRawSQLApllicationsQueryHandler);
        service = module.get<AppHealthRawSQLApllicationsService>(AppHealthRawSQLApllicationsService);
        repository = <AppHealthMockApplicationRepository>module.get<AppHealthIApplicationRepository>(AppHealthIApplicationRepository);
        mapper = new AppHealthApplicationMapper();
    });

    describe('main', () =>
    {
        test('AppHealthRawSQLApllicationsQueryHandler should be defined', () =>
        {
            expect(queryHandler).toBeDefined();
        });

        test('should return an apllications founded', async () =>
        {
            jest.spyOn(service, 'main').mockImplementation(() => new Promise(resolve => resolve(repository.collectionSource)));
            expect(await queryHandler.execute(
                new AppHealthRawSQLApllicationsQuery(),
            )).toStrictEqual(mapper.mapAggregatesToResponses(repository.collectionSource));
        });
    });
});