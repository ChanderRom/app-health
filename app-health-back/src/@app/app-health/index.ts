import { AppHealthCustomerHandlers, AppHealthCustomerServices, AppHealthCustomerModel, AppHealthICustomerRepository, AppHealthSequelizeCustomerRepository, AppHealthCustomerSagas } from './customer';
import { AppHealthTechnicalSolutionHandlers, AppHealthTechnicalSolutionServices, AppHealthTechnicalSolutionModel, AppHealthITechnicalSolutionRepository, AppHealthSequelizeTechnicalSolutionRepository, AppHealthTechnicalSolutionSagas } from './technical-solution';
import { AppHealthApplicationViewHandlers, AppHealthApplicationViewServices, AppHealthApplicationViewModel, AppHealthIApplicationViewRepository, AppHealthSequelizeApplicationViewRepository, AppHealthApplicationViewSagas } from './application-view';
import { AppHealthApplicationHandlers, AppHealthApplicationServices, AppHealthApplicationModel, AppHealthIApplicationRepository, AppHealthSequelizeApplicationRepository, AppHealthApplicationSagas } from './application';
import { AppHealthDatabaseHandlers, AppHealthDatabaseServices, AppHealthDatabaseModel, AppHealthIDatabaseRepository, AppHealthSequelizeDatabaseRepository, AppHealthDatabaseSagas } from './database';
import { AppHealthApplicationDatabaseHandlers, AppHealthApplicationDatabaseServices, AppHealthApplicationDatabaseModel, AppHealthIApplicationDatabaseRepository, AppHealthSequelizeApplicationDatabaseRepository, AppHealthApplicationDatabaseSagas } from './application-database';
import { AppHealthLanguageHandlers, AppHealthLanguageServices, AppHealthLanguageModel, AppHealthILanguageRepository, AppHealthSequelizeLanguageRepository, AppHealthLanguageSagas } from './language';
import { AppHealthApplicationLanguageHandlers, AppHealthApplicationLanguageServices, AppHealthApplicationLanguageModel, AppHealthIApplicationLanguageRepository, AppHealthSequelizeApplicationLanguageRepository, AppHealthApplicationLanguageSagas } from './application-language';
import { AppHealthAuthenticationInterfaceHandlers, AppHealthAuthenticationInterfaceServices, AppHealthAuthenticationInterfaceModel, AppHealthIAuthenticationInterfaceRepository, AppHealthSequelizeAuthenticationInterfaceRepository, AppHealthAuthenticationInterfaceSagas } from './authentication-interface';

export const AppHealthHandlers = [
    ...AppHealthCustomerHandlers,
    ...AppHealthTechnicalSolutionHandlers,
    ...AppHealthApplicationViewHandlers,
    ...AppHealthApplicationHandlers,
    ...AppHealthDatabaseHandlers,
    ...AppHealthApplicationDatabaseHandlers,
    ...AppHealthLanguageHandlers,
    ...AppHealthApplicationLanguageHandlers,
    ...AppHealthAuthenticationInterfaceHandlers
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
    ...AppHealthAuthenticationInterfaceServices
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
    AppHealthAuthenticationInterfaceModel
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
    AppHealthAuthenticationInterfaceSagas
];
