/* eslint-disable @typescript-eslint/no-unused-vars */
import { Test, TestingModule } from '@nestjs/testing';
import { EventPublisher, EventBus, CommandBus, UnhandledExceptionBus } from '@nestjs/cqrs';

// custom items
import { appHealthMockApplicationDatabaseData } from '@app/app-health/application-database/infrastructure/mock/app-health-mock-application-database.data';
import { AppHealthUpdateApplicationDatabaseByIdService } from './app-health-update-application-database-by-id.service';
import {
    AppHealthApplicationDatabaseId,
    AppHealthApplicationDatabaseApplicationId,
    AppHealthApplicationDatabaseDatabaseId,
    AppHealthApplicationDatabaseVersion,
    AppHealthApplicationDatabaseSize,
    AppHealthApplicationDatabaseScore,
    AppHealthApplicationDatabaseTotalCollectionTables,
    AppHealthApplicationDatabaseTotalFields,
    AppHealthApplicationDatabaseCreatedAt,
    AppHealthApplicationDatabaseUpdatedAt,
    AppHealthApplicationDatabaseDeletedAt,
} from '../../domain/value-objects';
import { AppHealthIApplicationDatabaseRepository } from '../../domain/app-health-application-database.repository';
import { AppHealthMockApplicationDatabaseRepository } from '../../infrastructure/mock/app-health-mock-application-database.repository';

describe('AppHealthUpdateApplicationDatabaseByIdService', () =>
{
    let service: AppHealthUpdateApplicationDatabaseByIdService;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                CommandBus,
                EventBus,
                EventPublisher,
                UnhandledExceptionBus,
                AppHealthUpdateApplicationDatabaseByIdService,
                AppHealthMockApplicationDatabaseRepository,
                {
                    provide : AppHealthIApplicationDatabaseRepository,
                    useValue: {
                        updateById: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        service = module.get(AppHealthUpdateApplicationDatabaseByIdService);
    });

    describe('main', () =>
    {
        test('AppHealthUpdateApplicationDatabaseByIdService should be defined', () =>
        {
            expect(service).toBeDefined();
        });

        test('should update a applicationDatabase and emit event', async () =>
        {
            expect(
                await service.main(
                    {
                        id: new AppHealthApplicationDatabaseId(appHealthMockApplicationDatabaseData[0].id),
                        applicationId: new AppHealthApplicationDatabaseApplicationId(appHealthMockApplicationDatabaseData[0].applicationId),
                        databaseId: new AppHealthApplicationDatabaseDatabaseId(appHealthMockApplicationDatabaseData[0].databaseId),
                        version: new AppHealthApplicationDatabaseVersion(appHealthMockApplicationDatabaseData[0].version),
                        size: new AppHealthApplicationDatabaseSize(appHealthMockApplicationDatabaseData[0].size),
                        score: new AppHealthApplicationDatabaseScore(appHealthMockApplicationDatabaseData[0].score),
                        totalCollectionTables: new AppHealthApplicationDatabaseTotalCollectionTables(appHealthMockApplicationDatabaseData[0].totalCollectionTables),
                        totalFields: new AppHealthApplicationDatabaseTotalFields(appHealthMockApplicationDatabaseData[0].totalFields),
                    },
                    {},
                ),
            ).toBe(undefined);
        });
    });
});