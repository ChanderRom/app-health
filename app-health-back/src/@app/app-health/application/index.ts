// export commands
export { AppHealthCreateApplicationCommand } from './application/create/app-health-create-application.command';
export { AppHealthCreateApllicationsCommand } from './application/create/app-health-create-apllications.command';
export { AppHealthUpdateApplicationByIdCommand } from './application/update/app-health-update-application-by-id.command';
export { AppHealthUpdateApllicationsCommand } from './application/update/app-health-update-apllications.command';
export { AppHealthUpsertApplicationCommand } from './application/upsert/app-health-upsert-application.command';
export { AppHealthDeleteApplicationByIdCommand } from './application/delete/app-health-delete-application-by-id.command';
export { AppHealthDeleteApllicationsCommand } from './application/delete/app-health-delete-apllications.command';

// export queries
export { AppHealthPaginateApllicationsQuery } from './application/paginate/app-health-paginate-apllications.query';
export { AppHealthGetApllicationsQuery } from './application/get/app-health-get-apllications.query';
export { AppHealthFindApplicationQuery } from './application/find/app-health-find-application.query';
export { AppHealthFindApplicationByIdQuery } from './application/find/app-health-find-application-by-id.query';
export { AppHealthRawSQLApllicationsQuery } from './application/raw-sql/app-health-raw-sql-apllications.query';

// export mocks
export { appHealthMockApplicationData } from './infrastructure/mock/app-health-mock-application.data';
export { AppHealthMockApplicationSeeder } from './infrastructure/mock/app-health-mock-application.seeder';
export { AppHealthMockApplicationRepository } from './infrastructure/mock/app-health-mock-application.repository';

// export events
export { AppHealthAddApllicationsContextEvent } from './application/events/app-health-add-apllications-context.event';
export { AppHealthCreatedApllicationsEvent } from './application/events/app-health-created-apllications.event';
export { AppHealthCreatedApplicationEvent } from './application/events/app-health-created-application.event';
export { AppHealthDeletedApllicationsEvent } from './application/events/app-health-deleted-apllications.event';
export { AppHealthDeletedApplicationEvent } from './application/events/app-health-deleted-application.event';
export { AppHealthUpdatedApllicationsEvent } from './application/events/app-health-updated-apllications.event';
export { AppHealthUpdatedApplicationEvent } from './application/events/app-health-updated-application.event';

// export command handlers
// can not export application command handlers, because Nest can't resolve dependencies

// export command services
// can not export application services, because Nest can't resolve dependencies

// domain
export { AppHealthApplication } from './domain/app-health-application.aggregate';
export { AppHealthApplicationMapper } from './domain/app-health-application.mapper';
export { AppHealthIApplicationRepository } from './domain/app-health-application.repository';
export { AppHealthApplicationResponse } from './domain/app-health-application.response';

// infrastructure
export { AppHealthApplicationModel } from './infrastructure/sequelize/app-health-sequelize-application.model';
export { AppHealthSequelizeApplicationRepository } from './infrastructure/sequelize/app-health-sequelize-application.repository';

// sagas
export { AppHealthApplicationSagas } from './application/sagas/app-health-application.sagas';

// command handlers
import { AppHealthCreateApplicationCommandHandler } from './application/create/app-health-create-application.command-handler';
import { AppHealthCreateApllicationsCommandHandler } from './application/create/app-health-create-apllications.command-handler';
import { AppHealthUpdateApplicationByIdCommandHandler } from './application/update/app-health-update-application-by-id.command-handler';
import { AppHealthUpdateApllicationsCommandHandler } from './application/update/app-health-update-apllications.command-handler';
import { AppHealthUpsertApplicationCommandHandler } from './application/upsert/app-health-upsert-application.command-handler';
import { AppHealthDeleteApplicationByIdCommandHandler } from './application/delete/app-health-delete-application-by-id.command-handler';
import { AppHealthDeleteApllicationsCommandHandler } from './application/delete/app-health-delete-apllications.command-handler';

// query handlers
import { AppHealthPaginateApllicationsQueryHandler } from './application/paginate/app-health-paginate-apllications.query-handler';
import { AppHealthGetApllicationsQueryHandler } from './application/get/app-health-get-apllications.query-handler';
import { AppHealthFindApplicationQueryHandler } from './application/find/app-health-find-application.query-handler';
import { AppHealthFindApplicationByIdQueryHandler } from './application/find/app-health-find-application-by-id.query-handler';
import { AppHealthRawSQLApllicationsQueryHandler } from './application/raw-sql/app-health-raw-sql-apllications.query-handler';

// event handlers
import { AppHealthCreatedApplicationEventHandler } from './application/events/app-health-created-application.event-handler';
import { AppHealthCreatedApllicationsEventHandler } from './application/events/app-health-created-apllications.event-handler';
import { AppHealthUpdatedApplicationEventHandler } from './application/events/app-health-updated-application.event-handler';
import { AppHealthUpdatedApllicationsEventHandler } from './application/events/app-health-updated-apllications.event-handler';
import { AppHealthDeletedApplicationEventHandler } from './application/events/app-health-deleted-application.event-handler';
import { AppHealthDeletedApllicationsEventHandler } from './application/events/app-health-deleted-apllications.event-handler';

// services
import { AppHealthCreateApplicationService } from './application/create/app-health-create-application.service';
import { AppHealthCreateApllicationsService } from './application/create/app-health-create-apllications.service';
import { AppHealthPaginateApllicationsService } from './application/paginate/app-health-paginate-apllications.service';
import { AppHealthGetApllicationsService } from './application/get/app-health-get-apllications.service';
import { AppHealthFindApplicationService } from './application/find/app-health-find-application.service';
import { AppHealthFindApplicationByIdService } from './application/find/app-health-find-application-by-id.service';
import { AppHealthRawSQLApllicationsService } from './application/raw-sql/app-health-raw-sql-apllications.service';
import { AppHealthUpdateApplicationByIdService } from './application/update/app-health-update-application-by-id.service';
import { AppHealthUpdateApllicationsService } from './application/update/app-health-update-apllications.service';
import { AppHealthUpsertApplicationService } from './application/upsert/app-health-upsert-application.service';
import { AppHealthDeleteApplicationByIdService } from './application/delete/app-health-delete-application-by-id.service';
import { AppHealthDeleteApllicationsService } from './application/delete/app-health-delete-apllications.service';

export const AppHealthApplicationHandlers = [
    // commands
    AppHealthCreateApplicationCommandHandler,
    AppHealthCreateApllicationsCommandHandler,
    AppHealthUpdateApplicationByIdCommandHandler,
    AppHealthUpdateApllicationsCommandHandler,
    AppHealthUpsertApplicationCommandHandler,
    AppHealthDeleteApplicationByIdCommandHandler,
    AppHealthDeleteApllicationsCommandHandler,

    // queries
    AppHealthPaginateApllicationsQueryHandler,
    AppHealthGetApllicationsQueryHandler,
    AppHealthFindApplicationQueryHandler,
    AppHealthFindApplicationByIdQueryHandler,
    AppHealthRawSQLApllicationsQueryHandler,

    // events
    AppHealthCreatedApplicationEventHandler,
    AppHealthCreatedApllicationsEventHandler,
    AppHealthUpdatedApplicationEventHandler,
    AppHealthUpdatedApllicationsEventHandler,
    AppHealthDeletedApplicationEventHandler,
    AppHealthDeletedApllicationsEventHandler,
];

export const AppHealthApplicationServices = [
    AppHealthCreateApplicationService,
    AppHealthCreateApllicationsService,
    AppHealthPaginateApllicationsService,
    AppHealthGetApllicationsService,
    AppHealthFindApplicationService,
    AppHealthFindApplicationByIdService,
    AppHealthRawSQLApllicationsService,
    AppHealthUpdateApplicationByIdService,
    AppHealthUpdateApllicationsService,
    AppHealthUpsertApplicationService,
    AppHealthDeleteApplicationByIdService,
    AppHealthDeleteApllicationsService,
];