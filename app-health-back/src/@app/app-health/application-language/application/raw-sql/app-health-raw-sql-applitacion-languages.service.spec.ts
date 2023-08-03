import { Test, TestingModule } from '@nestjs/testing';
import { EventPublisher, EventBus, CommandBus, UnhandledExceptionBus } from '@nestjs/cqrs';

// custom items
import { AppHealthRawSQLApplitacionLanguagesService } from './app-health-raw-sql-applitacion-languages.service';
import { AppHealthIApplicationLanguageRepository } from '../../domain/app-health-application-language.repository';
import { AppHealthMockApplicationLanguageRepository } from '../../infrastructure/mock/app-health-mock-application-language.repository';

describe('AppHealthRawSQLApplitacionLanguagesService ', () =>
{
    let service: AppHealthRawSQLApplitacionLanguagesService ;
    let repository: AppHealthIApplicationLanguageRepository;
    let mockRepository: AppHealthMockApplicationLanguageRepository;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                CommandBus,
                EventBus,
                EventPublisher,
                UnhandledExceptionBus,
                AppHealthRawSQLApplitacionLanguagesService ,
                AppHealthMockApplicationLanguageRepository,
                {
                    provide : AppHealthIApplicationLanguageRepository,
                    useValue: {
                        rawSQL: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        service         = module.get(AppHealthRawSQLApplitacionLanguagesService );
        repository      = module.get(AppHealthIApplicationLanguageRepository);
        mockRepository  = module.get(AppHealthMockApplicationLanguageRepository);
    });

    describe('main', () =>
    {
        test('RawSQLApplitacionLanguagesService should be defined', () =>
        {
            expect(service).toBeDefined();
        });

        test('should get applitacionLanguages', async () =>
        {
            jest.spyOn(repository, 'rawSQL').mockImplementation(() => new Promise(resolve => resolve(mockRepository.collectionSource)));
            expect(await service.main()).toBe(mockRepository.collectionSource);
        });
    });
});