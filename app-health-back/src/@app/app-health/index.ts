import { AppHealthCustomerHandlers, AppHealthCustomerServices, AppHealthCustomerModel, AppHealthICustomerRepository, AppHealthSequelizeCustomerRepository, AppHealthCustomerSagas } from './customer';
import { AppHealthTechnicalSolutionHandlers, AppHealthTechnicalSolutionServices, AppHealthTechnicalSolutionModel, AppHealthITechnicalSolutionRepository, AppHealthSequelizeTechnicalSolutionRepository, AppHealthTechnicalSolutionSagas } from './technical-solution';
import { AppHealthApplicationViewHandlers, AppHealthApplicationViewServices, AppHealthApplicationViewModel, AppHealthIApplicationViewRepository, AppHealthSequelizeApplicationViewRepository, AppHealthApplicationViewSagas } from './application-view';
import { AppHealthApplicationHandlers, AppHealthApplicationServices, AppHealthApplicationModel, AppHealthIApplicationRepository, AppHealthSequelizeApplicationRepository, AppHealthApplicationSagas } from './application';
import { AppHealthDatabaseHandlers, AppHealthDatabaseServices, AppHealthDatabaseModel, AppHealthIDatabaseRepository, AppHealthSequelizeDatabaseRepository, AppHealthDatabaseSagas } from './database';
import { AppHealthApplicationDatabaseHandlers, AppHealthApplicationDatabaseServices, AppHealthApplicationDatabaseModel, AppHealthIApplicationDatabaseRepository, AppHealthSequelizeApplicationDatabaseRepository, AppHealthApplicationDatabaseSagas } from './application-database';
import { AppHealthLanguageHandlers, AppHealthLanguageServices, AppHealthLanguageModel, AppHealthILanguageRepository, AppHealthSequelizeLanguageRepository, AppHealthLanguageSagas } from './language';
import { AppHealthApplicationLanguageHandlers, AppHealthApplicationLanguageServices, AppHealthApplicationLanguageModel, AppHealthIApplicationLanguageRepository, AppHealthSequelizeApplicationLanguageRepository, AppHealthApplicationLanguageSagas } from './application-language';
import { AppHealthAuthenticationInterfaceHandlers, AppHealthAuthenticationInterfaceServices, AppHealthAuthenticationInterfaceModel, AppHealthIAuthenticationInterfaceRepository, AppHealthSequelizeAuthenticationInterfaceRepository, AppHealthAuthenticationInterfaceSagas } from './authentication-interface';
import { AppHealthApplicationAuthenticationHandlers, AppHealthApplicationAuthenticationServices, AppHealthApplicationAuthenticationModel, AppHealthIApplicationAuthenticationRepository, AppHealthSequelizeApplicationAuthenticationRepository, AppHealthApplicationAuthenticationSagas } from './application-authentication';
import { AppHealthApiInterfaceTypeHandlers, AppHealthApiInterfaceTypeServices, AppHealthApiInterfaceTypeModel, AppHealthIApiInterfaceTypeRepository, AppHealthSequelizeApiInterfaceTypeRepository, AppHealthApiInterfaceTypeSagas } from './api-interface-type';
import { AppHealthApplicationApiHandlers, AppHealthApplicationApiServices, AppHealthApplicationApiModel, AppHealthIApplicationApiRepository, AppHealthSequelizeApplicationApiRepository, AppHealthApplicationApiSagas } from './application-api';
import { AppHealthApplicationIntegrationHandlers, AppHealthApplicationIntegrationServices, AppHealthApplicationIntegrationModel, AppHealthIApplicationIntegrationRepository, AppHealthSequelizeApplicationIntegrationRepository, AppHealthApplicationIntegrationSagas } from './application-integration';
import { AppHealthInfrastructureProviderHandlers, AppHealthInfrastructureProviderServices, AppHealthInfrastructureProviderModel, AppHealthIInfrastructureProviderRepository, AppHealthSequelizeInfrastructureProviderRepository, AppHealthInfrastructureProviderSagas } from './infrastructure-provider';
import { AppHealthInfrastructureServiceHandlers, AppHealthInfrastructureServiceServices, AppHealthInfrastructureServiceModel, AppHealthIInfrastructureServiceRepository, AppHealthSequelizeInfrastructureServiceRepository, AppHealthInfrastructureServiceSagas } from './infrastructure-service';
import { AppHealthApplicationInfrastructureServiceHandlers, AppHealthApplicationInfrastructureServiceServices, AppHealthApplicationInfrastructureServiceModel, AppHealthIApplicationInfrastructureServiceRepository, AppHealthSequelizeApplicationInfrastructureServiceRepository, AppHealthApplicationInfrastructureServiceSagas } from './application-infrastructure-service';

export const AppHealthHandlers = [
    ...AppHealthCustomerHandlers,
    ...AppHealthTechnicalSolutionHandlers,
    ...AppHealthApplicationViewHandlers,
    ...AppHealthApplicationHandlers,
    ...AppHealthDatabaseHandlers,
    ...AppHealthApplicationDatabaseHandlers,
    ...AppHealthLanguageHandlers,
    ...AppHealthApplicationLanguageHandlers,
    ...AppHealthAuthenticationInterfaceHandlers,
    ...AppHealthApplicationAuthenticationHandlers,
    ...AppHealthApiInterfaceTypeHandlers,
    ...AppHealthApplicationApiHandlers,
    ...AppHealthApplicationIntegrationHandlers,
    ...AppHealthInfrastructureProviderHandlers,
    ...AppHealthInfrastructureServiceHandlers,
    ...AppHealthApplicationInfrastructureServiceHandlers
];
export const AppHealthServices = [
    ...AppHealthCustomerServices,
    ...AppHealthTechnicalSolutionServices,
    ...AppHealthApplicationViewServices,
    ...AppHealthApplicationServices,
    ...AppHealthDatabaseServices,
    ...AppHealthApplicationDatabaseServices,
    ...AppHealthLanguageServices,
    ...AppHealthApplicationLanguageServices,
    ...AppHealthAuthenticationInterfaceServices,
    ...AppHealthApplicationAuthenticationServices,
    ...AppHealthApiInterfaceTypeServices,
    ...AppHealthApplicationApiServices,
    ...AppHealthApplicationIntegrationServices,
    ...AppHealthInfrastructureProviderServices,
    ...AppHealthInfrastructureServiceServices,
    ...AppHealthApplicationInfrastructureServiceServices
];
export const AppHealthModels = [
    AppHealthCustomerModel,
    AppHealthTechnicalSolutionModel,
    AppHealthApplicationViewModel,
    AppHealthApplicationModel,
    AppHealthDatabaseModel,
    AppHealthApplicationDatabaseModel,
    AppHealthLanguageModel,
    AppHealthApplicationLanguageModel,
    AppHealthAuthenticationInterfaceModel,
    AppHealthApplicationAuthenticationModel,
    AppHealthApiInterfaceTypeModel,
    AppHealthApplicationApiModel,
    AppHealthApplicationIntegrationModel,
    AppHealthInfrastructureProviderModel,
    AppHealthInfrastructureServiceModel,
    AppHealthApplicationInfrastructureServiceModel
];
export const AppHealthRepositories = [
    {
        provide : AppHealthICustomerRepository,
        useClass: AppHealthSequelizeCustomerRepository
    },
    {
        provide : AppHealthITechnicalSolutionRepository,
        useClass: AppHealthSequelizeTechnicalSolutionRepository
    },
    {
        provide : AppHealthIApplicationViewRepository,
        useClass: AppHealthSequelizeApplicationViewRepository
    },
    {
        provide : AppHealthIApplicationRepository,
        useClass: AppHealthSequelizeApplicationRepository
    },
    {
        provide : AppHealthIDatabaseRepository,
        useClass: AppHealthSequelizeDatabaseRepository
    },
    {
        provide : AppHealthIApplicationDatabaseRepository,
        useClass: AppHealthSequelizeApplicationDatabaseRepository
    },
    {
        provide : AppHealthILanguageRepository,
        useClass: AppHealthSequelizeLanguageRepository
    },
    {
        provide : AppHealthIApplicationLanguageRepository,
        useClass: AppHealthSequelizeApplicationLanguageRepository
    },
    {
        provide : AppHealthIAuthenticationInterfaceRepository,
        useClass: AppHealthSequelizeAuthenticationInterfaceRepository
    },
    {
        provide : AppHealthIApplicationAuthenticationRepository,
        useClass: AppHealthSequelizeApplicationAuthenticationRepository
    },
    {
        provide : AppHealthIApiInterfaceTypeRepository,
        useClass: AppHealthSequelizeApiInterfaceTypeRepository
    },
    {
        provide : AppHealthIApplicationApiRepository,
        useClass: AppHealthSequelizeApplicationApiRepository
    },
    {
        provide : AppHealthIApplicationIntegrationRepository,
        useClass: AppHealthSequelizeApplicationIntegrationRepository
    },
    {
        provide : AppHealthIInfrastructureProviderRepository,
        useClass: AppHealthSequelizeInfrastructureProviderRepository
    },
    {
        provide : AppHealthIInfrastructureServiceRepository,
        useClass: AppHealthSequelizeInfrastructureServiceRepository
    },
    {
        provide : AppHealthIApplicationInfrastructureServiceRepository,
        useClass: AppHealthSequelizeApplicationInfrastructureServiceRepository
    }
];
export const AppHealthSagas = [
    AppHealthCustomerSagas,
    AppHealthTechnicalSolutionSagas,
    AppHealthApplicationViewSagas,
    AppHealthApplicationSagas,
    AppHealthDatabaseSagas,
    AppHealthApplicationDatabaseSagas,
    AppHealthLanguageSagas,
    AppHealthApplicationLanguageSagas,
    AppHealthAuthenticationInterfaceSagas,
    AppHealthApplicationAuthenticationSagas,
    AppHealthApiInterfaceTypeSagas,
    AppHealthApplicationApiSagas,
    AppHealthApplicationIntegrationSagas,
    AppHealthInfrastructureProviderSagas,
    AppHealthInfrastructureServiceSagas,
    AppHealthApplicationInfrastructureServiceSagas
];
