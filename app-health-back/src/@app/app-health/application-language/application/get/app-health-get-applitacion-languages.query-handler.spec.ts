import { Test, TestingModule } from '@nestjs/testing';

// custom items
import { AppHealthGetApplitacionLanguagesQueryHandler } from './app-health-get-applitacion-languages.query-handler';
import { AppHealthMockApplicationLanguageRepository } from '@app/app-health/application-language/infrastructure/mock/app-health-mock-application-language.repository';
import { AppHealthIApplicationLanguageRepository } from '@app/app-health/application-language/domain/app-health-application-language.repository';
import { AppHealthApplicationLanguageMapper } from '@app/app-health/application-language/domain/app-health-application-language.mapper';
import { AppHealthGetApplitacionLanguagesQuery } from './app-health-get-applitacion-languages.query';
import { AppHealthGetApplitacionLanguagesService } from './app-health-get-applitacion-languages.service';

describe('GetApplitacionLanguagesQueryHandler', () =>
{
    let queryHandler: AppHealthGetApplitacionLanguagesQueryHandler;
    let service: AppHealthGetApplitacionLanguagesService;
    let repository: AppHealthMockApplicationLanguageRepository;
    let mapper: AppHealthApplicationLanguageMapper;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                AppHealthGetApplitacionLanguagesQueryHandler,
                {
                    provide : AppHealthIApplicationLanguageRepository,
                    useClass: AppHealthMockApplicationLanguageRepository,
                },
                {
                    provide : AppHealthGetApplitacionLanguagesService,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        queryHandler = module.get<AppHealthGetApplitacionLanguagesQueryHandler>(AppHealthGetApplitacionLanguagesQueryHandler);
        service = module.get<AppHealthGetApplitacionLanguagesService>(AppHealthGetApplitacionLanguagesService);
        repository = <AppHealthMockApplicationLanguageRepository>module.get<AppHealthIApplicationLanguageRepository>(AppHealthIApplicationLanguageRepository);
        mapper = new AppHealthApplicationLanguageMapper();
    });

    describe('main', () =>
    {
        test('AppHealthGetApplitacionLanguagesQueryHandler should be defined', () =>
        {
            expect(queryHandler).toBeDefined();
        });

        test('should return an applitacionLanguages founded', async () =>
        {
            jest.spyOn(service, 'main').mockImplementation(() => new Promise(resolve => resolve(repository.collectionSource)));
            expect(await queryHandler.execute(
                new AppHealthGetApplitacionLanguagesQuery(),
            )).toStrictEqual(mapper.mapAggregatesToResponses(repository.collectionSource));
        });
    });
});