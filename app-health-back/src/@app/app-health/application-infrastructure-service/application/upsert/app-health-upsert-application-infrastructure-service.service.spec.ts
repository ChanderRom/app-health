/* eslint-disable @typescript-eslint/no-unused-vars */
import { Test, TestingModule } from '@nestjs/testing';
import { EventPublisher, EventBus, CommandBus, UnhandledExceptionBus } from '@nestjs/cqrs';

// custom items
import { appHealthMockApplicationInfrastructureServiceData } from '@app/app-health/application-infrastructure-service/infrastructure/mock/app-health-mock-application-infrastructure-service.data';
import { AppHealthUpsertApplicationInfrastructureServiceService } from './app-health-upsert-application-infrastructure-service.service';
import {
    AppHealthApplicationInfrastructureServiceId,
    AppHealthApplicationInfrastructureServiceApplicationId,
    AppHealthApplicationInfrastructureServiceInfrastructureServiceId,
    AppHealthApplicationInfrastructureServiceAvarageCostPerYear,
    AppHealthApplicationInfrastructureServiceScore,
    AppHealthApplicationInfrastructureServiceCreatedAt,
    AppHealthApplicationInfrastructureServiceUpdatedAt,
    AppHealthApplicationInfrastructureServiceDeletedAt,
} from '../../domain/value-objects';
import { AppHealthIApplicationInfrastructureServiceRepository } from '../../domain/app-health-application-infrastructure-service.repository';
import { AppHealthMockApplicationInfrastructureServiceRepository } from '../../infrastructure/mock/app-health-mock-application-infrastructure-service.repository';

describe('AppHealthUpsertApplicationInfrastructureServiceService', () =>

{
    let service: AppHealthUpsertApplicationInfrastructureServiceService;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                CommandBus,
                EventBus,
                EventPublisher,
                UnhandledExceptionBus,
                AppHealthUpsertApplicationInfrastructureServiceService,
                AppHealthMockApplicationInfrastructureServiceRepository,
                {
                    provide : AppHealthIApplicationInfrastructureServiceRepository,
                    useValue: {
                        upsert: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        service = module.get(AppHealthUpsertApplicationInfrastructureServiceService);
    });

    describe('main', () =>
    {
        test('AppHealthUpsertApplicationInfrastructureServiceService should be defined', () =>
        {
            expect(service).toBeDefined();
        });

        test('should upsert a applicationInfrastructureService and emit event', async () =>
        {
            expect(
                await service.main(
                    {
                        id: new AppHealthApplicationInfrastructureServiceId(appHealthMockApplicationInfrastructureServiceData[0].id),
                        applicationId: new AppHealthApplicationInfrastructureServiceApplicationId(appHealthMockApplicationInfrastructureServiceData[0].applicationId),
                        infrastructureServiceId: new AppHealthApplicationInfrastructureServiceInfrastructureServiceId(appHealthMockApplicationInfrastructureServiceData[0].infrastructureServiceId),
                        avarageCostPerYear: new AppHealthApplicationInfrastructureServiceAvarageCostPerYear(appHealthMockApplicationInfrastructureServiceData[0].avarageCostPerYear),
                        score: new AppHealthApplicationInfrastructureServiceScore(appHealthMockApplicationInfrastructureServiceData[0].score),
                    },
                ),
            )
                .toBe(undefined);
        });
    });
});