import { Test, TestingModule } from '@nestjs/testing';

// custom items
import { appHealthMockApplicationData } from '@app/app-health/application/infrastructure/mock/app-health-mock-application.data';
import { AppHealthUpdateApllicationsCommandHandler } from './app-health-update-apllications.command-handler';
import { AppHealthUpdateApllicationsCommand } from './app-health-update-apllications.command';
import { AppHealthUpdateApllicationsService } from './app-health-update-apllications.service';

describe('AppHealthUpdateApllicationsCommandHandler', () =>
{
    let commandHandler: AppHealthUpdateApllicationsCommandHandler;
    let service: AppHealthUpdateApllicationsService;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                AppHealthUpdateApllicationsCommandHandler,
                {
                    provide : AppHealthUpdateApllicationsService,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        commandHandler = module.get<AppHealthUpdateApllicationsCommandHandler>(AppHealthUpdateApllicationsCommandHandler);
        service = module.get<AppHealthUpdateApllicationsService>(AppHealthUpdateApllicationsService);
    });

    describe('main', () =>
    {
        test('UpdateApllicationsCommandHandler should be defined', () =>
        {
            expect(commandHandler).toBeDefined();
        });

        test('should return an apllications updated', async () =>
        {
            expect(await commandHandler.execute(
                new AppHealthUpdateApllicationsCommand(
                    {
                        id: appHealthMockApplicationData[0].id,
                        technicalSolutionId: appHealthMockApplicationData[0].technicalSolutionId,
                        name: appHealthMockApplicationData[0].name,
                        description: appHealthMockApplicationData[0].description,
                        businessImpact: appHealthMockApplicationData[0].businessImpact,
                        type: appHealthMockApplicationData[0].type,
                        releaseDate: appHealthMockApplicationData[0].releaseDate,
                        architectureDiagram: appHealthMockApplicationData[0].architectureDiagram,
                        hasTenants: appHealthMockApplicationData[0].hasTenants,
                        hasLicensing: appHealthMockApplicationData[0].hasLicensing,
                        costLicensesPerYear: appHealthMockApplicationData[0].costLicensesPerYear,
                        requestsPerDay: appHealthMockApplicationData[0].requestsPerDay,
                    },
                    {},
                    {},
                    { timezone: process.env.TZ },
                ),
            )).toBe(undefined);
        });
    });
});