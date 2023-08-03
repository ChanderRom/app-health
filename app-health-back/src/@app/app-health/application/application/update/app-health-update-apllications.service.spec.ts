/* eslint-disable @typescript-eslint/no-unused-vars */
import { Test, TestingModule } from '@nestjs/testing';
import { EventPublisher, EventBus, CommandBus, UnhandledExceptionBus } from '@nestjs/cqrs';

// custom items
import { appHealthMockApplicationData } from '@app/app-health/application/infrastructure/mock/app-health-mock-application.data';
import { AppHealthUpdateApllicationsService } from './app-health-update-apllications.service';
import {
    AppHealthApplicationId,
    AppHealthApplicationTechnicalSolutionId,
    AppHealthApplicationName,
    AppHealthApplicationDescription,
    AppHealthApplicationBusinessImpact,
    AppHealthApplicationType,
    AppHealthApplicationReleaseDate,
    AppHealthApplicationArchitectureDiagram,
    AppHealthApplicationHasTenants,
    AppHealthApplicationHasLicensing,
    AppHealthApplicationCostLicensesPerYear,
    AppHealthApplicationRequestsPerDay,
    AppHealthApplicationCreatedAt,
    AppHealthApplicationUpdatedAt,
    AppHealthApplicationDeletedAt,
} from '../../domain/value-objects';
import { AppHealthIApplicationRepository } from '../../domain/app-health-application.repository';
import { AppHealthMockApplicationRepository } from '../../infrastructure/mock/app-health-mock-application.repository';

describe('AppHealthUpdateApllicationsService', () =>
{
    let service: AppHealthUpdateApllicationsService;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                CommandBus,
                EventBus,
                EventPublisher,
                UnhandledExceptionBus,
                AppHealthUpdateApllicationsService,
                AppHealthMockApplicationRepository,
                {
                    provide : AppHealthIApplicationRepository,
                    useValue: {
                        update: () => { /**/ },
                        get   : () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        service = module.get(AppHealthUpdateApllicationsService);
    });

    describe('main', () =>
    {
        test('UpdateApllicationsService should be defined', () =>
        {
            expect(service).toBeDefined();
        });

        test('should update a apllications and emit event', async () =>
        {
            expect(
                await service.main(
                    {
                        id: new AppHealthApplicationId(appHealthMockApplicationData[0].id),
                        technicalSolutionId: new AppHealthApplicationTechnicalSolutionId(appHealthMockApplicationData[0].technicalSolutionId),
                        name: new AppHealthApplicationName(appHealthMockApplicationData[0].name),
                        description: new AppHealthApplicationDescription(appHealthMockApplicationData[0].description),
                        businessImpact: new AppHealthApplicationBusinessImpact(appHealthMockApplicationData[0].businessImpact),
                        type: new AppHealthApplicationType(appHealthMockApplicationData[0].type),
                        releaseDate: new AppHealthApplicationReleaseDate(appHealthMockApplicationData[0].releaseDate),
                        architectureDiagram: new AppHealthApplicationArchitectureDiagram(appHealthMockApplicationData[0].architectureDiagram),
                        hasTenants: new AppHealthApplicationHasTenants(appHealthMockApplicationData[0].hasTenants),
                        hasLicensing: new AppHealthApplicationHasLicensing(appHealthMockApplicationData[0].hasLicensing),
                        costLicensesPerYear: new AppHealthApplicationCostLicensesPerYear(appHealthMockApplicationData[0].costLicensesPerYear),
                        requestsPerDay: new AppHealthApplicationRequestsPerDay(appHealthMockApplicationData[0].requestsPerDay),
                    },
                    {},
                    {},
                ),
            )
                .toBe(undefined);
        });
    });
});