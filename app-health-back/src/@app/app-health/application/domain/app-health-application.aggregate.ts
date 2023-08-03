/* eslint-disable key-spacing */
import { AggregateRoot } from '@nestjs/cqrs';
import { LiteralObject, Utils } from '@aurorajs.dev/core';
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
} from './value-objects';
import { AppHealthCreatedApplicationEvent } from '../application/events/app-health-created-application.event';
import { AppHealthUpdatedApplicationEvent } from '../application/events/app-health-updated-application.event';
import { AppHealthDeletedApplicationEvent } from '../application/events/app-health-deleted-application.event';

export class AppHealthApplication extends AggregateRoot
{
    id: AppHealthApplicationId;
    technicalSolutionId: AppHealthApplicationTechnicalSolutionId;
    name: AppHealthApplicationName;
    description: AppHealthApplicationDescription;
    businessImpact: AppHealthApplicationBusinessImpact;
    type: AppHealthApplicationType;
    releaseDate: AppHealthApplicationReleaseDate;
    architectureDiagram: AppHealthApplicationArchitectureDiagram;
    hasTenants: AppHealthApplicationHasTenants;
    hasLicensing: AppHealthApplicationHasLicensing;
    costLicensesPerYear: AppHealthApplicationCostLicensesPerYear;
    requestsPerDay: AppHealthApplicationRequestsPerDay;
    createdAt: AppHealthApplicationCreatedAt;
    updatedAt: AppHealthApplicationUpdatedAt;
    deletedAt: AppHealthApplicationDeletedAt;

    // eager relationship

    constructor(
        id: AppHealthApplicationId,
        technicalSolutionId: AppHealthApplicationTechnicalSolutionId,
        name: AppHealthApplicationName,
        description: AppHealthApplicationDescription,
        businessImpact: AppHealthApplicationBusinessImpact,
        type: AppHealthApplicationType,
        releaseDate: AppHealthApplicationReleaseDate,
        architectureDiagram: AppHealthApplicationArchitectureDiagram,
        hasTenants: AppHealthApplicationHasTenants,
        hasLicensing: AppHealthApplicationHasLicensing,
        costLicensesPerYear: AppHealthApplicationCostLicensesPerYear,
        requestsPerDay: AppHealthApplicationRequestsPerDay,
        createdAt: AppHealthApplicationCreatedAt,
        updatedAt: AppHealthApplicationUpdatedAt,
        deletedAt: AppHealthApplicationDeletedAt,

    )
    {
        super();
        this.id = id;
        this.technicalSolutionId = technicalSolutionId;
        this.name = name;
        this.description = description;
        this.businessImpact = businessImpact;
        this.type = type;
        this.releaseDate = releaseDate;
        this.architectureDiagram = architectureDiagram;
        this.hasTenants = hasTenants;
        this.hasLicensing = hasLicensing;
        this.costLicensesPerYear = costLicensesPerYear;
        this.requestsPerDay = requestsPerDay;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
        this.deletedAt = deletedAt;

        // eager relationship
    }

    static register (
        id: AppHealthApplicationId,
        technicalSolutionId: AppHealthApplicationTechnicalSolutionId,
        name: AppHealthApplicationName,
        description: AppHealthApplicationDescription,
        businessImpact: AppHealthApplicationBusinessImpact,
        type: AppHealthApplicationType,
        releaseDate: AppHealthApplicationReleaseDate,
        architectureDiagram: AppHealthApplicationArchitectureDiagram,
        hasTenants: AppHealthApplicationHasTenants,
        hasLicensing: AppHealthApplicationHasLicensing,
        costLicensesPerYear: AppHealthApplicationCostLicensesPerYear,
        requestsPerDay: AppHealthApplicationRequestsPerDay,
        createdAt: AppHealthApplicationCreatedAt,
        updatedAt: AppHealthApplicationUpdatedAt,
        deletedAt: AppHealthApplicationDeletedAt,

    ): AppHealthApplication
    {
        return new AppHealthApplication(
            id,
            technicalSolutionId,
            name,
            description,
            businessImpact,
            type,
            releaseDate,
            architectureDiagram,
            hasTenants,
            hasLicensing,
            costLicensesPerYear,
            requestsPerDay,
            createdAt,
            updatedAt,
            deletedAt,

        );
    }

    created(application: AppHealthApplication): void
    {
        this.apply(
            new AppHealthCreatedApplicationEvent(
                application.id.value,
                application.technicalSolutionId.value,
                application.name.value,
                application.description?.value,
                application.businessImpact?.value,
                application.type.value,
                application.releaseDate.value,
                application.architectureDiagram.value,
                application.hasTenants.value,
                application.hasLicensing.value,
                application.costLicensesPerYear.value,
                application.requestsPerDay.value,
                application.createdAt?.value,
                application.updatedAt?.value,
                application.deletedAt?.value,
            ),
        );
    }

    updated(application: AppHealthApplication): void
    {
        this.apply(
            new AppHealthUpdatedApplicationEvent(
                application.id?.value,
                application.technicalSolutionId?.value,
                application.name?.value,
                application.description?.value,
                application.businessImpact?.value,
                application.type?.value,
                application.releaseDate?.value,
                application.architectureDiagram?.value,
                application.hasTenants?.value,
                application.hasLicensing?.value,
                application.costLicensesPerYear?.value,
                application.requestsPerDay?.value,
                application.createdAt?.value,
                application.updatedAt?.value,
                application.deletedAt?.value,
            ),
        );
    }

    deleted(application: AppHealthApplication): void
    {
        this.apply(
            new AppHealthDeletedApplicationEvent(
                application.id.value,
                application.technicalSolutionId.value,
                application.name.value,
                application.description?.value,
                application.businessImpact?.value,
                application.type.value,
                application.releaseDate.value,
                application.architectureDiagram.value,
                application.hasTenants.value,
                application.hasLicensing.value,
                application.costLicensesPerYear.value,
                application.requestsPerDay.value,
                application.createdAt?.value,
                application.updatedAt?.value,
                application.deletedAt?.value,
            ),
        );
    }

    toDTO(): LiteralObject
    {
        return {
            id: this.id.value,
            technicalSolutionId: this.technicalSolutionId.value,
            name: this.name.value,
            description: this.description?.value,
            businessImpact: this.businessImpact?.value,
            type: this.type.value,
            releaseDate: this.releaseDate.value,
            architectureDiagram: this.architectureDiagram.value,
            hasTenants: this.hasTenants.value,
            hasLicensing: this.hasLicensing.value,
            costLicensesPerYear: this.costLicensesPerYear.value,
            requestsPerDay: this.requestsPerDay.value,
            createdAt: this.createdAt?.value,
            updatedAt: this.updatedAt?.value,
            deletedAt: this.deletedAt?.value,

            // eager relationship
        };
    }

    // function called to get data for repository side effect methods
    toRepository(): LiteralObject
    {
        return {
            id: this.id.value,
            technicalSolutionId: this.technicalSolutionId.value,
            name: this.name.value,
            description: this.description?.value,
            businessImpact: this.businessImpact?.value,
            type: this.type.value,
            releaseDate: this.releaseDate.value,
            architectureDiagram: this.architectureDiagram.value,
            hasTenants: this.hasTenants.value,
            hasLicensing: this.hasLicensing.value,
            costLicensesPerYear: this.costLicensesPerYear.value,
            requestsPerDay: this.requestsPerDay.value,
            createdAt: this.createdAt?.value,
            updatedAt: this.updatedAt?.value,
            deletedAt: this.deletedAt?.value,

            // eager relationship
        };
    }
}
