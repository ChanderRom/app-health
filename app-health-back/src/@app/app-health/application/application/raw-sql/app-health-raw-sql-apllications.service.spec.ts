import { Test, TestingModule } from '@nestjs/testing';
import { EventPublisher, EventBus, CommandBus, UnhandledExceptionBus } from '@nestjs/cqrs';

// custom items
import { AppHealthRawSQLApllicationsService } from './app-health-raw-sql-apllications.service';
import { AppHealthIApplicationRepository } from '../../domain/app-health-application.repository';
import { AppHealthMockApplicationRepository } from '../../infrastructure/mock/app-health-mock-application.repository';

describe('AppHealthRawSQLApllicationsService ', () =>
{
    let service: AppHealthRawSQLApllicationsService ;
    let repository: AppHealthIApplicationRepository;
    let mockRepository: AppHealthMockApplicationRepository;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                CommandBus,
                EventBus,
                EventPublisher,
                UnhandledExceptionBus,
                AppHealthRawSQLApllicationsService ,
                AppHealthMockApplicationRepository,
                {
                    provide : AppHealthIApplicationRepository,
                    useValue: {
                        rawSQL: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        service         = module.get(AppHealthRawSQLApllicationsService );
        repository      = module.get(AppHealthIApplicationRepository);
        mockRepository  = module.get(AppHealthMockApplicationRepository);
    });

    describe('main', () =>
    {
        test('RawSQLApllicationsService should be defined', () =>
        {
            expect(service).toBeDefined();
        });

        test('should get apllications', async () =>
        {
            jest.spyOn(repository, 'rawSQL').mockImplementation(() => new Promise(resolve => resolve(mockRepository.collectionSource)));
            expect(await service.main()).toBe(mockRepository.collectionSource);
        });
    });
});