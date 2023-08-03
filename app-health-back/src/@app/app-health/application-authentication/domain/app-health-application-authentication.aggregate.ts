/* eslint-disable key-spacing */
import { AggregateRoot } from '@nestjs/cqrs';
import { LiteralObject, Utils } from '@aurorajs.dev/core';
import {
    AppHealthApplicationAuthenticationId,
    AppHealthApplicationAuthenticationApplicationId,
    AppHealthApplicationAuthenticationAuthenticationInterfaceId,
    AppHealthApplicationAuthenticationTotalUsers,
    AppHealthApplicationAuthenticationScore,
    AppHealthApplicationAuthenticationCreatedAt,
    AppHealthApplicationAuthenticationUpdatedAt,
    AppHealthApplicationAuthenticationDeletedAt,
} from './value-objects';
import { AppHealthCreatedApplicationAuthenticationEvent } from '../application/events/app-health-created-application-authentication.event';
import { AppHealthUpdatedApplicationAuthenticationEvent } from '../application/events/app-health-updated-application-authentication.event';
import { AppHealthDeletedApplicationAuthenticationEvent } from '../application/events/app-health-deleted-application-authentication.event';
import { AppHealthApplication } from '@app/app-health/application';
import { AppHealthAuthenticationInterface } from '@app/app-health/authentication-interface';

export class AppHealthApplicationAuthentication extends AggregateRoot
{
    id: AppHealthApplicationAuthenticationId;
    applicationId: AppHealthApplicationAuthenticationApplicationId;
    authenticationInterfaceId: AppHealthApplicationAuthenticationAuthenticationInterfaceId;
    totalUsers: AppHealthApplicationAuthenticationTotalUsers;
    score: AppHealthApplicationAuthenticationScore;
    createdAt: AppHealthApplicationAuthenticationCreatedAt;
    updatedAt: AppHealthApplicationAuthenticationUpdatedAt;
    deletedAt: AppHealthApplicationAuthenticationDeletedAt;

    // eager relationship
    application: AppHealthApplication;
    authenticationInterface: AppHealthAuthenticationInterface;

    constructor(
        id: AppHealthApplicationAuthenticationId,
        applicationId: AppHealthApplicationAuthenticationApplicationId,
        authenticationInterfaceId: AppHealthApplicationAuthenticationAuthenticationInterfaceId,
        totalUsers: AppHealthApplicationAuthenticationTotalUsers,
        score: AppHealthApplicationAuthenticationScore,
        createdAt: AppHealthApplicationAuthenticationCreatedAt,
        updatedAt: AppHealthApplicationAuthenticationUpdatedAt,
        deletedAt: AppHealthApplicationAuthenticationDeletedAt,

        application?: AppHealthApplication,
        authenticationInterface?: AppHealthAuthenticationInterface,
    )
    {
        super();
        this.id = id;
        this.applicationId = applicationId;
        this.authenticationInterfaceId = authenticationInterfaceId;
        this.totalUsers = totalUsers;
        this.score = score;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
        this.deletedAt = deletedAt;

        // eager relationship
        this.application = application;
        this.authenticationInterface = authenticationInterface;
    }

    static register (
        id: AppHealthApplicationAuthenticationId,
        applicationId: AppHealthApplicationAuthenticationApplicationId,
        authenticationInterfaceId: AppHealthApplicationAuthenticationAuthenticationInterfaceId,
        totalUsers: AppHealthApplicationAuthenticationTotalUsers,
        score: AppHealthApplicationAuthenticationScore,
        createdAt: AppHealthApplicationAuthenticationCreatedAt,
        updatedAt: AppHealthApplicationAuthenticationUpdatedAt,
        deletedAt: AppHealthApplicationAuthenticationDeletedAt,

        application?: AppHealthApplication,
        authenticationInterface?: AppHealthAuthenticationInterface,
    ): AppHealthApplicationAuthentication
    {
        return new AppHealthApplicationAuthentication(
            id,
            applicationId,
            authenticationInterfaceId,
            totalUsers,
            score,
            createdAt,
            updatedAt,
            deletedAt,

            application,
            authenticationInterface,
        );
    }

    created(applicationAuthentication: AppHealthApplicationAuthentication): void
    {
        this.apply(
            new AppHealthCreatedApplicationAuthenticationEvent(
                applicationAuthentication.id.value,
                applicationAuthentication.applicationId.value,
                applicationAuthentication.authenticationInterfaceId.value,
                applicationAuthentication.totalUsers.value,
                applicationAuthentication.score.value,
                applicationAuthentication.createdAt?.value,
                applicationAuthentication.updatedAt?.value,
                applicationAuthentication.deletedAt?.value,
            ),
        );
    }

    updated(applicationAuthentication: AppHealthApplicationAuthentication): void
    {
        this.apply(
            new AppHealthUpdatedApplicationAuthenticationEvent(
                applicationAuthentication.id?.value,
                applicationAuthentication.applicationId?.value,
                applicationAuthentication.authenticationInterfaceId?.value,
                applicationAuthentication.totalUsers?.value,
                applicationAuthentication.score?.value,
                applicationAuthentication.createdAt?.value,
                applicationAuthentication.updatedAt?.value,
                applicationAuthentication.deletedAt?.value,
            ),
        );
    }

    deleted(applicationAuthentication: AppHealthApplicationAuthentication): void
    {
        this.apply(
            new AppHealthDeletedApplicationAuthenticationEvent(
                applicationAuthentication.id.value,
                applicationAuthentication.applicationId.value,
                applicationAuthentication.authenticationInterfaceId.value,
                applicationAuthentication.totalUsers.value,
                applicationAuthentication.score.value,
                applicationAuthentication.createdAt?.value,
                applicationAuthentication.updatedAt?.value,
                applicationAuthentication.deletedAt?.value,
            ),
        );
    }

    toDTO(): LiteralObject
    {
        return {
            id: this.id.value,
            applicationId: this.applicationId.value,
            authenticationInterfaceId: this.authenticationInterfaceId.value,
            totalUsers: this.totalUsers.value,
            score: this.score.value,
            createdAt: this.createdAt?.value,
            updatedAt: this.updatedAt?.value,
            deletedAt: this.deletedAt?.value,

            // eager relationship
            application: this.application?.toDTO(),
            authenticationInterface: this.authenticationInterface?.toDTO(),
        };
    }

    // function called to get data for repository side effect methods
    toRepository(): LiteralObject
    {
        return {
            id: this.id.value,
            applicationId: this.applicationId.value,
            authenticationInterfaceId: this.authenticationInterfaceId.value,
            totalUsers: this.totalUsers.value,
            score: this.score.value,
            createdAt: this.createdAt?.value,
            updatedAt: this.updatedAt?.value,
            deletedAt: this.deletedAt?.value,

            // eager relationship
            application: this.application?.toDTO(),
            authenticationInterface: this.authenticationInterface?.toDTO(),
        };
    }
}
