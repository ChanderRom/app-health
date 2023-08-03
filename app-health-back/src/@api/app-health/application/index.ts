// export DTOs
export { AppHealthApplicationDto } from './dto/app-health-application.dto';
export { AppHealthCreateApplicationDto } from './dto/app-health-create-application.dto';
export { AppHealthUpdateApplicationByIdDto } from './dto/app-health-update-application-by-id.dto';
export { AppHealthUpdateApllicationsDto } from './dto/app-health-update-apllications.dto';

// export handlers
export { AppHealthCreateApplicationHandler } from './handlers/app-health-create-application.handler';
export { AppHealthCreateApllicationsHandler } from './handlers/app-health-create-apllications.handler';
export { AppHealthPaginateApllicationsHandler } from './handlers/app-health-paginate-apllications.handler';
export { AppHealthGetApllicationsHandler } from './handlers/app-health-get-apllications.handler';
export { AppHealthFindApplicationByIdHandler } from './handlers/app-health-find-application-by-id.handler';
export { AppHealthFindApplicationHandler } from './handlers/app-health-find-application.handler';
export { AppHealthUpdateApplicationByIdHandler } from './handlers/app-health-update-application-by-id.handler';
export { AppHealthUpdateApllicationsHandler } from './handlers/app-health-update-apllications.handler';
export { AppHealthUpsertApplicationHandler } from './handlers/app-health-upsert-application.handler';
export { AppHealthDeleteApplicationByIdHandler } from './handlers/app-health-delete-application-by-id.handler';
export { AppHealthDeleteApllicationsHandler } from './handlers/app-health-delete-apllications.handler';

// export controllers
export { AppHealthCreateApplicationController } from './controllers/app-health-create-application.controller';
export { AppHealthCreateApllicationsController } from './controllers/app-health-create-apllications.controller';
export { AppHealthPaginateApllicationsController } from './controllers/app-health-paginate-apllications.controller';
export { AppHealthGetApllicationsController } from './controllers/app-health-get-apllications.controller';
export { AppHealthFindApplicationByIdController } from './controllers/app-health-find-application-by-id.controller';
export { AppHealthFindApplicationController } from './controllers/app-health-find-application.controller';
export { AppHealthUpdateApplicationByIdController } from './controllers/app-health-update-application-by-id.controller';
export { AppHealthUpdateApllicationsController } from './controllers/app-health-update-apllications.controller';
export { AppHealthUpsertApplicationController } from './controllers/app-health-upsert-application.controller';
export { AppHealthDeleteApplicationByIdController } from './controllers/app-health-delete-application-by-id.controller';
export { AppHealthDeleteApllicationsController } from './controllers/app-health-delete-apllications.controller';

// exports resolvers
export { AppHealthCreateApplicationResolver } from './resolvers/app-health-create-application.resolver';
export { AppHealthCreateApllicationsResolver } from './resolvers/app-health-create-apllications.resolver';
export { AppHealthPaginateApllicationsResolver } from './resolvers/app-health-paginate-apllications.resolver';
export { AppHealthGetApllicationsResolver } from './resolvers/app-health-get-apllications.resolver';
export { AppHealthFindApplicationByIdResolver } from './resolvers/app-health-find-application-by-id.resolver';
export { AppHealthFindApplicationResolver } from './resolvers/app-health-find-application.resolver';
export { AppHealthUpdateApplicationByIdResolver } from './resolvers/app-health-update-application-by-id.resolver';
export { AppHealthUpdateApllicationsResolver } from './resolvers/app-health-update-apllications.resolver';
export { AppHealthUpsertApplicationResolver } from './resolvers/app-health-upsert-application.resolver';
export { AppHealthDeleteApplicationByIdResolver } from './resolvers/app-health-delete-application-by-id.resolver';
export { AppHealthDeleteApllicationsResolver } from './resolvers/app-health-delete-apllications.resolver';

// controllers
import { AppHealthCreateApplicationController } from './controllers/app-health-create-application.controller';
import { AppHealthCreateApllicationsController } from './controllers/app-health-create-apllications.controller';
import { AppHealthPaginateApllicationsController } from './controllers/app-health-paginate-apllications.controller';
import { AppHealthGetApllicationsController } from './controllers/app-health-get-apllications.controller';
import { AppHealthFindApplicationByIdController } from './controllers/app-health-find-application-by-id.controller';
import { AppHealthFindApplicationController } from './controllers/app-health-find-application.controller';
import { AppHealthUpdateApplicationByIdController } from './controllers/app-health-update-application-by-id.controller';
import { AppHealthUpdateApllicationsController } from './controllers/app-health-update-apllications.controller';
import { AppHealthUpsertApplicationController } from './controllers/app-health-upsert-application.controller';
import { AppHealthDeleteApplicationByIdController } from './controllers/app-health-delete-application-by-id.controller';
import { AppHealthDeleteApllicationsController } from './controllers/app-health-delete-apllications.controller';

// resolvers
import { AppHealthCreateApplicationResolver } from './resolvers/app-health-create-application.resolver';
import { AppHealthCreateApllicationsResolver } from './resolvers/app-health-create-apllications.resolver';
import { AppHealthPaginateApllicationsResolver } from './resolvers/app-health-paginate-apllications.resolver';
import { AppHealthGetApllicationsResolver } from './resolvers/app-health-get-apllications.resolver';
import { AppHealthFindApplicationByIdResolver } from './resolvers/app-health-find-application-by-id.resolver';
import { AppHealthFindApplicationResolver } from './resolvers/app-health-find-application.resolver';
import { AppHealthUpdateApplicationByIdResolver } from './resolvers/app-health-update-application-by-id.resolver';
import { AppHealthUpdateApllicationsResolver } from './resolvers/app-health-update-apllications.resolver';
import { AppHealthUpsertApplicationResolver } from './resolvers/app-health-upsert-application.resolver';
import { AppHealthDeleteApplicationByIdResolver } from './resolvers/app-health-delete-application-by-id.resolver';
import { AppHealthDeleteApllicationsResolver } from './resolvers/app-health-delete-apllications.resolver';

// handlers
import { AppHealthCreateApplicationHandler } from './handlers/app-health-create-application.handler';
import { AppHealthCreateApllicationsHandler } from './handlers/app-health-create-apllications.handler';
import { AppHealthPaginateApllicationsHandler } from './handlers/app-health-paginate-apllications.handler';
import { AppHealthGetApllicationsHandler } from './handlers/app-health-get-apllications.handler';
import { AppHealthFindApplicationByIdHandler } from './handlers/app-health-find-application-by-id.handler';
import { AppHealthFindApplicationHandler } from './handlers/app-health-find-application.handler';
import { AppHealthUpdateApplicationByIdHandler } from './handlers/app-health-update-application-by-id.handler';
import { AppHealthUpdateApllicationsHandler } from './handlers/app-health-update-apllications.handler';
import { AppHealthUpsertApplicationHandler } from './handlers/app-health-upsert-application.handler';
import { AppHealthDeleteApplicationByIdHandler } from './handlers/app-health-delete-application-by-id.handler';
import { AppHealthDeleteApllicationsHandler } from './handlers/app-health-delete-apllications.handler';

// seeder
import { AppHealthApplicationSeeder } from './seeder/app-health-application.seeder';

export const AppHealthApplicationControllers = [
    AppHealthCreateApplicationController,
    AppHealthCreateApllicationsController,
    AppHealthPaginateApllicationsController,
    AppHealthGetApllicationsController,
    AppHealthFindApplicationByIdController,
    AppHealthFindApplicationController,
    AppHealthUpdateApplicationByIdController,
    AppHealthUpdateApllicationsController,
    AppHealthUpsertApplicationController,
    AppHealthDeleteApplicationByIdController,
    AppHealthDeleteApllicationsController,
];

export const AppHealthApplicationResolvers = [
    AppHealthCreateApplicationResolver,
    AppHealthCreateApllicationsResolver,
    AppHealthPaginateApllicationsResolver,
    AppHealthGetApllicationsResolver,
    AppHealthFindApplicationByIdResolver,
    AppHealthFindApplicationResolver,
    AppHealthUpdateApplicationByIdResolver,
    AppHealthUpdateApllicationsResolver,
    AppHealthUpsertApplicationResolver,
    AppHealthDeleteApplicationByIdResolver,
    AppHealthDeleteApllicationsResolver,
];

export const AppHealthApplicationApiHandlers = [
    AppHealthCreateApplicationHandler,
    AppHealthCreateApllicationsHandler,
    AppHealthPaginateApllicationsHandler,
    AppHealthGetApllicationsHandler,
    AppHealthFindApplicationByIdHandler,
    AppHealthFindApplicationHandler,
    AppHealthUpdateApplicationByIdHandler,
    AppHealthUpdateApllicationsHandler,
    AppHealthUpsertApplicationHandler,
    AppHealthDeleteApplicationByIdHandler,
    AppHealthDeleteApllicationsHandler,
];

export const AppHealthApplicationServices = [
    AppHealthApplicationSeeder,
];