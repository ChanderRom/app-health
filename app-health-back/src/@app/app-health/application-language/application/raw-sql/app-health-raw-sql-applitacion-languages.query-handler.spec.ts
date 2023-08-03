import { Test, TestingModule } from '@nestjs/testing';

// custom items
import { AppHealthMockApplicationLanguageRepository } from '@app/app-health/application-language/infrastructure/mock/app-health-mock-application-language.repository';
import { AppHealthIApplicationLanguageRepository } from '@app/app-health/application-language/domain/app-health-application-language.repository';
import { AppHealthApplicationLanguageMapper } from '@app/app-health/application-language/domain/app-health-application-language.mapper';
import { AppHealthRawSQLApplitacionLanguagesQueryHandler } from './app-health-raw-sql-applitacion-languages.query-handler';
import { AppHealthRawSQLApplitacionLanguagesQuery } from './app-health-raw-sql-applitacion-languages.query';
import { AppHealthRawSQLApplitacionLanguagesService } from './app-health-raw-sql-applitacion-languages.service';

describe('RawSQLApplitacionLanguagesQueryHandler', () =>
{
    let queryHandler: AppHealthRawSQLApplitacionLanguagesQueryHandler;
    let service: AppHealthRawSQLApplitacionLanguagesService;
    let repository: AppHealthMockApplicationLanguageRepository;
    let mapper: AppHealthApplicationLanguageMapper;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                AppHealthRawSQLApplitacionLanguagesQueryHandler,
                {
                    provide : AppHealthIApplicationLanguageRepository,
                    useClass: AppHealthMockApplicationLanguageRepository,
                },
                {
                    provide : AppHealthRawSQLApplitacionLanguagesService,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        queryHandler = module.get<AppHealthRawSQLApplitacionLanguagesQueryHandler>(AppHealthRawSQLApplitacionLanguagesQueryHandler);
        service = module.get<AppHealthRawSQLApplitacionLanguagesService>(AppHealthRawSQLApplitacionLanguagesService);
        repository = <AppHealthMockApplicationLanguageRepository>module.get<AppHealthIApplicationLanguageRepository>(AppHealthIApplicationLanguageRepository);
        mapper = new AppHealthApplicationLanguageMapper();
    });

    describe('main', () =>
    {
        test('AppHealthRawSQLApplitacionLanguagesQueryHandler should be defined', () =>
        {
            expect(queryHandler).toBeDefined();
        });

        test('should return an applitacionLanguages founded', async () =>
        {
            jest.spyOn(service, 'main').mockImplementation(() => new Promise(resolve => resolve(repository.collectionSource)));
            expect(await queryHandler.execute(
                new AppHealthRawSQLApplitacionLanguagesQuery(),
            )).toStrictEqual(mapper.mapAggregatesToResponses(repository.collectionSource));
        });
    });
});