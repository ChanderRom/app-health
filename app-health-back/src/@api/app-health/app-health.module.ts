import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { SharedModule } from '@aurora/shared.module';
import { AppHealthSeeder } from './app-health.seeder';
import { AppHealthModels, AppHealthHandlers, AppHealthServices, AppHealthRepositories, AppHealthSagas } from '../../@app/app-health';
import { AppHealthCustomerControllers, AppHealthCustomerResolvers, AppHealthCustomerApiHandlers, AppHealthCustomerServices } from './customer';
import { AppHealthTechnicalSolutionControllers, AppHealthTechnicalSolutionResolvers, AppHealthTechnicalSolutionApiHandlers, AppHealthTechnicalSolutionServices } from './technical-solution';
import { AppHealthApplicationViewControllers, AppHealthApplicationViewResolvers, AppHealthApplicationViewApiHandlers, AppHealthApplicationViewServices } from './application-view';
import { AppHealthApplicationControllers, AppHealthApplicationResolvers, AppHealthApplicationApiHandlers, AppHealthApplicationServices } from './application';
import { AppHealthDatabaseControllers, AppHealthDatabaseResolvers, AppHealthDatabaseApiHandlers, AppHealthDatabaseServices } from './database';
import { AppHealthApplicationDatabaseControllers, AppHealthApplicationDatabaseResolvers, AppHealthApplicationDatabaseApiHandlers, AppHealthApplicationDatabaseServices } from './application-database';
import { AppHealthLanguageControllers, AppHealthLanguageResolvers, AppHealthLanguageApiHandlers, AppHealthLanguageServices } from './language';
import { AppHealthApplicationLanguageControllers, AppHealthApplicationLanguageResolvers, AppHealthApplicationLanguageApiHandlers, AppHealthApplicationLanguageServices } from './application-language';
import { AppHealthAuthenticationInterfaceControllers, AppHealthAuthenticationInterfaceResolvers, AppHealthAuthenticationInterfaceApiHandlers, AppHealthAuthenticationInterfaceServices } from './authentication-interface';

@Module({
    imports: [
        SharedModule,
        SequelizeModule.forFeature([
                ...AppHealthModels
            ])
    ],
    controllers: [
        ...AppHealthCustomerControllers,
        ...AppHealthTechnicalSolutionControllers,
        ...AppHealthApplicationViewControllers,
        ...AppHealthApplicationControllers,
        ...AppHealthDatabaseControllers,
        ...AppHealthApplicationDatabaseControllers,
        ...AppHealthLanguageControllers,
        ...AppHealthApplicationLanguageControllers,
        ...AppHealthAuthenticationInterfaceControllers
    ],
    providers: [
        AppHealthSeeder,
        ...AppHealthHandlers,
        ...AppHealthServices,
        ...AppHealthRepositories,
        ...AppHealthSagas,
        ...AppHealthCustomerResolvers,
        ...AppHealthCustomerApiHandlers,
        ...AppHealthCustomerServices,
        ...AppHealthTechnicalSolutionResolvers,
        ...AppHealthTechnicalSolutionApiHandlers,
        ...AppHealthTechnicalSolutionServices,
        ...AppHealthApplicationViewResolvers,
        ...AppHealthApplicationViewApiHandlers,
        ...AppHealthApplicationViewServices,
        ...AppHealthApplicationResolvers,
        ...AppHealthApplicationApiHandlers,
        ...AppHealthApplicationServices,
        ...AppHealthDatabaseResolvers,
        ...AppHealthDatabaseApiHandlers,
        ...AppHealthDatabaseServices,
        ...AppHealthApplicationDatabaseResolvers,
        ...AppHealthApplicationDatabaseApiHandlers,
        ...AppHealthApplicationDatabaseServices,
        ...AppHealthLanguageResolvers,
        ...AppHealthLanguageApiHandlers,
        ...AppHealthLanguageServices,
        ...AppHealthApplicationLanguageResolvers,
        ...AppHealthApplicationLanguageApiHandlers,
        ...AppHealthApplicationLanguageServices,
        ...AppHealthAuthenticationInterfaceResolvers,
        ...AppHealthAuthenticationInterfaceApiHandlers,
        ...AppHealthAuthenticationInterfaceServices
    ],
})
export class AppHealthModule {}