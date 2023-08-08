
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export enum AppHealthApplicationApiDocumentations {
    OPENAPI = "OPENAPI",
    GRAPGQL = "GRAPGQL",
    HTML = "HTML",
    DOCS = "DOCS"
}

export enum AppHealthApplicationIntegrationModality {
    UNIDERECTIONAL = "UNIDERECTIONAL",
    BIDIRECTIONAL = "BIDIRECTIONAL"
}

export enum AppHealthApplicationIntegrationDocumentations {
    OPENAPI = "OPENAPI",
    GRAPHQL = "GRAPHQL",
    HTML = "HTML",
    DOCS = "DOCS"
}

export enum AppHealthApplicationViewComplexity {
    LOW = "LOW",
    MEDIUM = "MEDIUM",
    HIGH = "HIGH"
}

export enum AppHealthApplicationType {
    FRONTEND = "FRONTEND",
    SERVER = "SERVER",
    MOBILE = "MOBILE",
    EMBEDDED = "EMBEDDED"
}

export enum AppHealthDatabaseType {
    RELATIONAL = "RELATIONAL",
    NO_SQL = "NO_SQL",
    KEY_VALUE = "KEY_VALUE",
    GRAPH = "GRAPH"
}

export enum CommonAdministrativeAreaLevel1MapType {
    ROADMAP = "ROADMAP",
    SATELLITE = "SATELLITE",
    HYBRID = "HYBRID",
    TERRAIN = "TERRAIN"
}

export enum CommonAdministrativeAreaLevel2MapType {
    ROADMAP = "ROADMAP",
    SATELLITE = "SATELLITE",
    HYBRID = "HYBRID",
    TERRAIN = "TERRAIN"
}

export enum CommonAdministrativeAreaLevel3MapType {
    ROADMAP = "ROADMAP",
    SATELLITE = "SATELLITE",
    HYBRID = "HYBRID",
    TERRAIN = "TERRAIN"
}

export enum CommonCountryMapType {
    ROADMAP = "ROADMAP",
    SATELLITE = "SATELLITE",
    HYBRID = "HYBRID",
    TERRAIN = "TERRAIN"
}

export enum CommonLangDir {
    LTR = "LTR",
    RTL = "RTL"
}

export enum CoreLangDir {
    LTR = "LTR",
    RTL = "RTL"
}

export enum CoreSearchKeyLang {
    id = "id",
    iso6392 = "iso6392",
    iso6393 = "iso6393",
    ietf = "ietf"
}

export interface AppHealthCreateApiInterfaceTypeInput {
    id: string;
    name: GraphQLString;
    score: GraphQLInt;
}

export interface AppHealthUpdateApiInterfaceTypeByIdInput {
    id: string;
    name?: Nullable<GraphQLString>;
    score?: Nullable<GraphQLInt>;
}

export interface AppHealthUpdateApiInterfaceTypesInput {
    id?: Nullable<string>;
    name?: Nullable<GraphQLString>;
    score?: Nullable<GraphQLInt>;
}

export interface AppHealthCreateApplicationApiInput {
    id: string;
    applicationId: string;
    apiInterfaceTypeId: string;
    score: GraphQLInt;
    documentations?: Nullable<AppHealthApplicationApiDocumentations>;
    requestsPerDay: GraphQLInt;
}

export interface AppHealthUpdateApplicationApiByIdInput {
    id: string;
    applicationId?: Nullable<string>;
    apiInterfaceTypeId?: Nullable<string>;
    score?: Nullable<GraphQLInt>;
    documentations?: Nullable<AppHealthApplicationApiDocumentations>;
    requestsPerDay?: Nullable<GraphQLInt>;
}

export interface AppHealthUpdateApplicationApisInput {
    id?: Nullable<string>;
    applicationId?: Nullable<string>;
    apiInterfaceTypeId?: Nullable<string>;
    score?: Nullable<GraphQLInt>;
    documentations?: Nullable<AppHealthApplicationApiDocumentations>;
    requestsPerDay?: Nullable<GraphQLInt>;
}

export interface AppHealthCreateApplicationAuthenticationInput {
    id: string;
    applicationId: string;
    authenticationInterfaceId: string;
    applicationInfrastructureServiceId: string;
    totalUsers: GraphQLInt;
    score: GraphQLInt;
}

export interface AppHealthUpdateApplicationAuthenticationByIdInput {
    id: string;
    applicationId?: Nullable<string>;
    authenticationInterfaceId?: Nullable<string>;
    applicationInfrastructureServiceId?: Nullable<string>;
    totalUsers?: Nullable<GraphQLInt>;
    score?: Nullable<GraphQLInt>;
}

export interface AppHealthUpdateApplicationAuthenticationsInput {
    id?: Nullable<string>;
    applicationId?: Nullable<string>;
    authenticationInterfaceId?: Nullable<string>;
    applicationInfrastructureServiceId?: Nullable<string>;
    totalUsers?: Nullable<GraphQLInt>;
    score?: Nullable<GraphQLInt>;
}

export interface AppHealthCreateApplicationDatabaseInput {
    id: string;
    applicationId: string;
    databaseId: string;
    applicationInfrastructureServiceId: string;
    version: GraphQLString;
    size: GraphQLInt;
    score: GraphQLInt;
    totalCollectionTables: GraphQLInt;
    totalFields: GraphQLInt;
}

export interface AppHealthUpdateApplicationDatabaseByIdInput {
    id: string;
    applicationId?: Nullable<string>;
    databaseId?: Nullable<string>;
    applicationInfrastructureServiceId?: Nullable<string>;
    version?: Nullable<GraphQLString>;
    size?: Nullable<GraphQLInt>;
    score?: Nullable<GraphQLInt>;
    totalCollectionTables?: Nullable<GraphQLInt>;
    totalFields?: Nullable<GraphQLInt>;
}

export interface AppHealthUpdateApplicationDatabasesInput {
    id?: Nullable<string>;
    applicationId?: Nullable<string>;
    databaseId?: Nullable<string>;
    applicationInfrastructureServiceId?: Nullable<string>;
    version?: Nullable<GraphQLString>;
    size?: Nullable<GraphQLInt>;
    score?: Nullable<GraphQLInt>;
    totalCollectionTables?: Nullable<GraphQLInt>;
    totalFields?: Nullable<GraphQLInt>;
}

export interface AppHealthCreateApplicationInfrastructureServiceInput {
    id: string;
    applicationId: string;
    infrastructureServiceId: string;
    avarageCostPerYear: GraphQLInt;
    score: GraphQLInt;
}

export interface AppHealthUpdateApplicationInfrastructureServiceByIdInput {
    id: string;
    applicationId?: Nullable<string>;
    infrastructureServiceId?: Nullable<string>;
    avarageCostPerYear?: Nullable<GraphQLInt>;
    score?: Nullable<GraphQLInt>;
}

export interface AppHealthUpdateApplicationInfrastructureServicesInput {
    id?: Nullable<string>;
    applicationId?: Nullable<string>;
    infrastructureServiceId?: Nullable<string>;
    avarageCostPerYear?: Nullable<GraphQLInt>;
    score?: Nullable<GraphQLInt>;
}

export interface AppHealthCreateApplicationIntegrationInput {
    id: string;
    name: GraphQLString;
    description?: Nullable<GraphQLString>;
    sourceApplicationId: string;
    apiInterfaceTypeId: string;
    interfaceNumbers: GraphQLInt;
    modality: AppHealthApplicationIntegrationModality;
    score: GraphQLInt;
    documentations?: Nullable<AppHealthApplicationIntegrationDocumentations>;
}

export interface AppHealthUpdateApplicationIntegrationByIdInput {
    id: string;
    name?: Nullable<GraphQLString>;
    description?: Nullable<GraphQLString>;
    sourceApplicationId?: Nullable<string>;
    apiInterfaceTypeId?: Nullable<string>;
    interfaceNumbers?: Nullable<GraphQLInt>;
    modality?: Nullable<AppHealthApplicationIntegrationModality>;
    score?: Nullable<GraphQLInt>;
    documentations?: Nullable<AppHealthApplicationIntegrationDocumentations>;
}

export interface AppHealthUpdateApplicationIntegrationsInput {
    id?: Nullable<string>;
    name?: Nullable<GraphQLString>;
    description?: Nullable<GraphQLString>;
    sourceApplicationId?: Nullable<string>;
    apiInterfaceTypeId?: Nullable<string>;
    interfaceNumbers?: Nullable<GraphQLInt>;
    modality?: Nullable<AppHealthApplicationIntegrationModality>;
    score?: Nullable<GraphQLInt>;
    documentations?: Nullable<AppHealthApplicationIntegrationDocumentations>;
}

export interface AppHealthCreateApplicationLanguageInput {
    id: string;
    applicationId: string;
    languageId: string;
    version: GraphQLString;
    score: GraphQLInt;
    codeQualityScore: GraphQLInt;
}

export interface AppHealthUpdateApplicationLanguageByIdInput {
    id: string;
    applicationId?: Nullable<string>;
    languageId?: Nullable<string>;
    version?: Nullable<GraphQLString>;
    score?: Nullable<GraphQLInt>;
    codeQualityScore?: Nullable<GraphQLInt>;
}

export interface AppHealthUpdateApplitacionLanguagesInput {
    id?: Nullable<string>;
    applicationId?: Nullable<string>;
    languageId?: Nullable<string>;
    version?: Nullable<GraphQLString>;
    score?: Nullable<GraphQLInt>;
    codeQualityScore?: Nullable<GraphQLInt>;
}

export interface AppHealthCreateApplicationViewInput {
    id: string;
    applicationId: string;
    totalViews: GraphQLInt;
    complexity: AppHealthApplicationViewComplexity;
    description: GraphQLInt;
    score: GraphQLInt;
}

export interface AppHealthUpdateApplicationViewByIdInput {
    id: string;
    applicationId?: Nullable<string>;
    totalViews?: Nullable<GraphQLInt>;
    complexity?: Nullable<AppHealthApplicationViewComplexity>;
    description?: Nullable<GraphQLInt>;
    score?: Nullable<GraphQLInt>;
}

export interface AppHealthUpdateApplicationViewsInput {
    id?: Nullable<string>;
    applicationId?: Nullable<string>;
    totalViews?: Nullable<GraphQLInt>;
    complexity?: Nullable<AppHealthApplicationViewComplexity>;
    description?: Nullable<GraphQLInt>;
    score?: Nullable<GraphQLInt>;
}

export interface AppHealthCreateApplicationInput {
    id: string;
    technicalSolutionId: string;
    name: GraphQLString;
    description?: Nullable<GraphQLString>;
    businessImpact?: Nullable<GraphQLString>;
    type: AppHealthApplicationType;
    releaseDate: GraphQLISODateTime;
    architectureDiagram: GraphQLString;
    hasTenants: GraphQLBoolean;
    hasLicensing: GraphQLBoolean;
    costLicensesPerYear: GraphQLInt;
    requestsPerDay: GraphQLInt;
}

export interface AppHealthUpdateApplicationByIdInput {
    id: string;
    technicalSolutionId?: Nullable<string>;
    name?: Nullable<GraphQLString>;
    description?: Nullable<GraphQLString>;
    businessImpact?: Nullable<GraphQLString>;
    type?: Nullable<AppHealthApplicationType>;
    releaseDate?: Nullable<GraphQLISODateTime>;
    architectureDiagram?: Nullable<GraphQLString>;
    hasTenants?: Nullable<GraphQLBoolean>;
    hasLicensing?: Nullable<GraphQLBoolean>;
    costLicensesPerYear?: Nullable<GraphQLInt>;
    requestsPerDay?: Nullable<GraphQLInt>;
}

export interface AppHealthUpdateApllicationsInput {
    id?: Nullable<string>;
    technicalSolutionId?: Nullable<string>;
    name?: Nullable<GraphQLString>;
    description?: Nullable<GraphQLString>;
    businessImpact?: Nullable<GraphQLString>;
    type?: Nullable<AppHealthApplicationType>;
    releaseDate?: Nullable<GraphQLISODateTime>;
    architectureDiagram?: Nullable<GraphQLString>;
    hasTenants?: Nullable<GraphQLBoolean>;
    hasLicensing?: Nullable<GraphQLBoolean>;
    costLicensesPerYear?: Nullable<GraphQLInt>;
    requestsPerDay?: Nullable<GraphQLInt>;
}

export interface AppHealthCreateAuthenticationInterfaceInput {
    id: string;
    name: GraphQLString;
    score: GraphQLInt;
}

export interface AppHealthUpdateAuthenticationInterfaceByIdInput {
    id: string;
    name?: Nullable<GraphQLString>;
    score?: Nullable<GraphQLInt>;
}

export interface AppHealthUpdateAuthenticationInterfacesInput {
    id?: Nullable<string>;
    name?: Nullable<GraphQLString>;
    score?: Nullable<GraphQLInt>;
}

export interface AppHealthCreateCustomerInput {
    id: string;
    name: GraphQLString;
}

export interface AppHealthUpdateCustomerByIdInput {
    id: string;
    name?: Nullable<GraphQLString>;
}

export interface AppHealthUpdateCustomersInput {
    id?: Nullable<string>;
    name?: Nullable<GraphQLString>;
}

export interface AppHealthCreateDatabaseInput {
    id: string;
    name: GraphQLString;
    type: AppHealthDatabaseType;
    versions: JSON;
}

export interface AppHealthUpdateDatabaseByIdInput {
    id: string;
    name?: Nullable<GraphQLString>;
    type?: Nullable<AppHealthDatabaseType>;
    versions?: Nullable<JSON>;
}

export interface AppHealthUpdateDatabasesInput {
    id?: Nullable<string>;
    name?: Nullable<GraphQLString>;
    type?: Nullable<AppHealthDatabaseType>;
    versions?: Nullable<JSON>;
}

export interface AppHealthCreateInfrastructureProviderInput {
    id: string;
    name: GraphQLString;
    score: GraphQLInt;
}

export interface AppHealthUpdateInfrastructureProviderByIdInput {
    id: string;
    name?: Nullable<GraphQLString>;
    score?: Nullable<GraphQLInt>;
}

export interface AppHealthUpdateInfrastructureProvidersInput {
    id?: Nullable<string>;
    name?: Nullable<GraphQLString>;
    score?: Nullable<GraphQLInt>;
}

export interface AppHealthCreateInfrastructureServiceInput {
    id: string;
    providerId: string;
    name: GraphQLString;
    score: GraphQLInt;
}

export interface AppHealthUpdateInfrastructureServiceByIdInput {
    id: string;
    providerId?: Nullable<string>;
    name?: Nullable<GraphQLString>;
    score?: Nullable<GraphQLInt>;
}

export interface AppHealthUpdateInfrastructureServicesInput {
    id?: Nullable<string>;
    providerId?: Nullable<string>;
    name?: Nullable<GraphQLString>;
    score?: Nullable<GraphQLInt>;
}

export interface AppHealthCreateLanguageInput {
    id: string;
    name: GraphQLString;
    versions: JSON;
}

export interface AppHealthUpdateLanguageByIdInput {
    id: string;
    name?: Nullable<GraphQLString>;
    versions?: Nullable<JSON>;
}

export interface AppHealthUpdateLanguagesInput {
    id?: Nullable<string>;
    name?: Nullable<GraphQLString>;
    versions?: Nullable<JSON>;
}

export interface AppHealthCreateTechnicalSolutionInput {
    id: string;
    customerId: string;
    name: GraphQLString;
    description?: Nullable<GraphQLString>;
    architectureDiagram: GraphQLString;
    proposal: GraphQLString;
}

export interface AppHealthUpdateTechnicalSolutionByIdInput {
    id: string;
    customerId?: Nullable<string>;
    name?: Nullable<GraphQLString>;
    description?: Nullable<GraphQLString>;
    architectureDiagram?: Nullable<GraphQLString>;
    proposal?: Nullable<GraphQLString>;
}

export interface AppHealthUpdateTechnicalSolutionsInput {
    id?: Nullable<string>;
    customerId?: Nullable<string>;
    name?: Nullable<GraphQLString>;
    description?: Nullable<GraphQLString>;
    architectureDiagram?: Nullable<GraphQLString>;
    proposal?: Nullable<GraphQLString>;
}

export interface CommonCreateAdministrativeAreaLevel1Input {
    id: string;
    countryId: string;
    code: GraphQLString;
    customCode?: Nullable<GraphQLString>;
    name: GraphQLString;
    slug: GraphQLString;
    latitude?: Nullable<GraphQLFloat>;
    longitude?: Nullable<GraphQLFloat>;
    zoom?: Nullable<GraphQLInt>;
    mapType: CommonAdministrativeAreaLevel1MapType;
}

export interface CommonUpdateAdministrativeAreaLevel1ByIdInput {
    id: string;
    countryId?: Nullable<string>;
    code?: Nullable<GraphQLString>;
    customCode?: Nullable<GraphQLString>;
    name?: Nullable<GraphQLString>;
    slug?: Nullable<GraphQLString>;
    latitude?: Nullable<GraphQLFloat>;
    longitude?: Nullable<GraphQLFloat>;
    zoom?: Nullable<GraphQLInt>;
    mapType?: Nullable<CommonAdministrativeAreaLevel1MapType>;
}

export interface CommonUpdateAdministrativeAreasLevel1Input {
    id?: Nullable<string>;
    countryId?: Nullable<string>;
    code?: Nullable<GraphQLString>;
    customCode?: Nullable<GraphQLString>;
    name?: Nullable<GraphQLString>;
    slug?: Nullable<GraphQLString>;
    latitude?: Nullable<GraphQLFloat>;
    longitude?: Nullable<GraphQLFloat>;
    zoom?: Nullable<GraphQLInt>;
    mapType?: Nullable<CommonAdministrativeAreaLevel1MapType>;
}

export interface CommonCreateAdministrativeAreaLevel2Input {
    id: string;
    countryId: string;
    administrativeAreaLevel1Id: string;
    code: GraphQLString;
    customCode?: Nullable<GraphQLString>;
    name: GraphQLString;
    slug: GraphQLString;
    latitude?: Nullable<GraphQLFloat>;
    longitude?: Nullable<GraphQLFloat>;
    zoom?: Nullable<GraphQLInt>;
    mapType: CommonAdministrativeAreaLevel2MapType;
}

export interface CommonUpdateAdministrativeAreaLevel2ByIdInput {
    id: string;
    countryId?: Nullable<string>;
    administrativeAreaLevel1Id?: Nullable<string>;
    code?: Nullable<GraphQLString>;
    customCode?: Nullable<GraphQLString>;
    name?: Nullable<GraphQLString>;
    slug?: Nullable<GraphQLString>;
    latitude?: Nullable<GraphQLFloat>;
    longitude?: Nullable<GraphQLFloat>;
    zoom?: Nullable<GraphQLInt>;
    mapType?: Nullable<CommonAdministrativeAreaLevel2MapType>;
}

export interface CommonUpdateAdministrativeAreasLevel2Input {
    id?: Nullable<string>;
    countryId?: Nullable<string>;
    administrativeAreaLevel1Id?: Nullable<string>;
    code?: Nullable<GraphQLString>;
    customCode?: Nullable<GraphQLString>;
    name?: Nullable<GraphQLString>;
    slug?: Nullable<GraphQLString>;
    latitude?: Nullable<GraphQLFloat>;
    longitude?: Nullable<GraphQLFloat>;
    zoom?: Nullable<GraphQLInt>;
    mapType?: Nullable<CommonAdministrativeAreaLevel2MapType>;
}

export interface CommonCreateAdministrativeAreaLevel3Input {
    id: string;
    countryId: string;
    administrativeAreaLevel1Id: string;
    administrativeAreaLevel2Id: string;
    code: GraphQLString;
    customCode?: Nullable<GraphQLString>;
    name: GraphQLString;
    slug: GraphQLString;
    latitude?: Nullable<GraphQLFloat>;
    longitude?: Nullable<GraphQLFloat>;
    zoom?: Nullable<GraphQLInt>;
    mapType: CommonAdministrativeAreaLevel3MapType;
}

export interface CommonUpdateAdministrativeAreaLevel3ByIdInput {
    id: string;
    countryId?: Nullable<string>;
    administrativeAreaLevel1Id?: Nullable<string>;
    administrativeAreaLevel2Id?: Nullable<string>;
    code?: Nullable<GraphQLString>;
    customCode?: Nullable<GraphQLString>;
    name?: Nullable<GraphQLString>;
    slug?: Nullable<GraphQLString>;
    latitude?: Nullable<GraphQLFloat>;
    longitude?: Nullable<GraphQLFloat>;
    zoom?: Nullable<GraphQLInt>;
    mapType?: Nullable<CommonAdministrativeAreaLevel3MapType>;
}

export interface CommonUpdateAdministrativeAreasLevel3Input {
    id?: Nullable<string>;
    countryId?: Nullable<string>;
    administrativeAreaLevel1Id?: Nullable<string>;
    administrativeAreaLevel2Id?: Nullable<string>;
    code?: Nullable<GraphQLString>;
    customCode?: Nullable<GraphQLString>;
    name?: Nullable<GraphQLString>;
    slug?: Nullable<GraphQLString>;
    latitude?: Nullable<GraphQLFloat>;
    longitude?: Nullable<GraphQLFloat>;
    zoom?: Nullable<GraphQLInt>;
    mapType?: Nullable<CommonAdministrativeAreaLevel3MapType>;
}

export interface CommonCreateCountryInput {
    id: string;
    iso3166Alpha2: GraphQLString;
    iso3166Alpha3: GraphQLString;
    iso3166Numeric: GraphQLString;
    customCode?: Nullable<GraphQLString>;
    prefix?: Nullable<GraphQLString>;
    image?: Nullable<GraphQLString>;
    sort?: Nullable<GraphQLInt>;
    administrativeAreas?: Nullable<JSON>;
    latitude?: Nullable<GraphQLFloat>;
    longitude?: Nullable<GraphQLFloat>;
    zoom?: Nullable<GraphQLInt>;
    mapType: CommonCountryMapType;
    availableLangs?: Nullable<JSON>;
    langId: string;
    name: GraphQLString;
    slug: GraphQLString;
    administrativeAreaLevel1?: Nullable<GraphQLString>;
    administrativeAreaLevel2?: Nullable<GraphQLString>;
    administrativeAreaLevel3?: Nullable<GraphQLString>;
}

export interface CommonUpdateCountryByIdInput {
    id: string;
    iso3166Alpha2?: Nullable<GraphQLString>;
    iso3166Alpha3?: Nullable<GraphQLString>;
    iso3166Numeric?: Nullable<GraphQLString>;
    customCode?: Nullable<GraphQLString>;
    prefix?: Nullable<GraphQLString>;
    image?: Nullable<GraphQLString>;
    sort?: Nullable<GraphQLInt>;
    administrativeAreas?: Nullable<JSON>;
    latitude?: Nullable<GraphQLFloat>;
    longitude?: Nullable<GraphQLFloat>;
    zoom?: Nullable<GraphQLInt>;
    mapType?: Nullable<CommonCountryMapType>;
    availableLangs?: Nullable<JSON>;
    langId?: Nullable<string>;
    name?: Nullable<GraphQLString>;
    slug?: Nullable<GraphQLString>;
    administrativeAreaLevel1?: Nullable<GraphQLString>;
    administrativeAreaLevel2?: Nullable<GraphQLString>;
    administrativeAreaLevel3?: Nullable<GraphQLString>;
}

export interface CommonUpdateCountriesInput {
    id?: Nullable<string>;
    iso3166Alpha2?: Nullable<GraphQLString>;
    iso3166Alpha3?: Nullable<GraphQLString>;
    iso3166Numeric?: Nullable<GraphQLString>;
    customCode?: Nullable<GraphQLString>;
    prefix?: Nullable<GraphQLString>;
    image?: Nullable<GraphQLString>;
    sort?: Nullable<GraphQLInt>;
    administrativeAreas?: Nullable<JSON>;
    latitude?: Nullable<GraphQLFloat>;
    longitude?: Nullable<GraphQLFloat>;
    zoom?: Nullable<GraphQLInt>;
    mapType?: Nullable<CommonCountryMapType>;
    availableLangs?: Nullable<JSON>;
    langId?: Nullable<string>;
    name?: Nullable<GraphQLString>;
    slug?: Nullable<GraphQLString>;
    administrativeAreaLevel1?: Nullable<GraphQLString>;
    administrativeAreaLevel2?: Nullable<GraphQLString>;
    administrativeAreaLevel3?: Nullable<GraphQLString>;
}

export interface CommonCreateLangInput {
    id: string;
    name: GraphQLString;
    image?: Nullable<GraphQLString>;
    iso6392: GraphQLString;
    iso6393: GraphQLString;
    ietf: GraphQLString;
    customCode?: Nullable<GraphQLString>;
    dir: CommonLangDir;
    sort?: Nullable<GraphQLInt>;
    isActive: GraphQLBoolean;
}

export interface CommonUpdateLangByIdInput {
    id: string;
    name?: Nullable<GraphQLString>;
    image?: Nullable<GraphQLString>;
    iso6392?: Nullable<GraphQLString>;
    iso6393?: Nullable<GraphQLString>;
    ietf?: Nullable<GraphQLString>;
    customCode?: Nullable<GraphQLString>;
    dir?: Nullable<CommonLangDir>;
    sort?: Nullable<GraphQLInt>;
    isActive?: Nullable<GraphQLBoolean>;
}

export interface CommonUpdateLangsInput {
    id?: Nullable<string>;
    name?: Nullable<GraphQLString>;
    image?: Nullable<GraphQLString>;
    iso6392?: Nullable<GraphQLString>;
    iso6393?: Nullable<GraphQLString>;
    ietf?: Nullable<GraphQLString>;
    customCode?: Nullable<GraphQLString>;
    dir?: Nullable<CommonLangDir>;
    sort?: Nullable<GraphQLInt>;
    isActive?: Nullable<GraphQLBoolean>;
}

export interface QueryStatement {
    where?: Nullable<JSON>;
    attributes?: Nullable<JSON>;
    include?: Nullable<Nullable<GraphQLString>[]>;
    order?: Nullable<JSON>;
    group?: Nullable<JSON>;
    limit?: Nullable<GraphQLInt>;
    offset?: Nullable<GraphQLInt>;
    distinct?: Nullable<GraphQLBoolean>;
    col?: Nullable<GraphQLString>;
}

export interface AppHealthApiInterfaceType {
    id: string;
    name: GraphQLString;
    score: GraphQLInt;
    createdAt?: Nullable<GraphQLTimestamp>;
    updatedAt?: Nullable<GraphQLTimestamp>;
    deletedAt?: Nullable<GraphQLTimestamp>;
}

export interface IQuery {
    appHealthFindApiInterfaceType(query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Nullable<AppHealthApiInterfaceType> | Promise<Nullable<AppHealthApiInterfaceType>>;
    appHealthFindApiInterfaceTypeById(id?: Nullable<string>, constraint?: Nullable<QueryStatement>): Nullable<AppHealthApiInterfaceType> | Promise<Nullable<AppHealthApiInterfaceType>>;
    appHealthGetApiInterfaceTypes(query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Nullable<AppHealthApiInterfaceType>[] | Promise<Nullable<AppHealthApiInterfaceType>[]>;
    appHealthPaginateApiInterfaceTypes(query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Pagination | Promise<Pagination>;
    appHealthFindApplicationApi(query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Nullable<AppHealthApplicationApi> | Promise<Nullable<AppHealthApplicationApi>>;
    appHealthFindApplicationApiById(id?: Nullable<string>, constraint?: Nullable<QueryStatement>): Nullable<AppHealthApplicationApi> | Promise<Nullable<AppHealthApplicationApi>>;
    appHealthGetApplicationApis(query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Nullable<AppHealthApplicationApi>[] | Promise<Nullable<AppHealthApplicationApi>[]>;
    appHealthPaginateApplicationApis(query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Pagination | Promise<Pagination>;
    appHealthFindApplicationAuthentication(query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Nullable<AppHealthApplicationAuthentication> | Promise<Nullable<AppHealthApplicationAuthentication>>;
    appHealthFindApplicationAuthenticationById(id?: Nullable<string>, constraint?: Nullable<QueryStatement>): Nullable<AppHealthApplicationAuthentication> | Promise<Nullable<AppHealthApplicationAuthentication>>;
    appHealthGetApplicationAuthentications(query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Nullable<AppHealthApplicationAuthentication>[] | Promise<Nullable<AppHealthApplicationAuthentication>[]>;
    appHealthPaginateApplicationAuthentications(query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Pagination | Promise<Pagination>;
    appHealthFindApplicationDatabase(query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Nullable<AppHealthApplicationDatabase> | Promise<Nullable<AppHealthApplicationDatabase>>;
    appHealthFindApplicationDatabaseById(id?: Nullable<string>, constraint?: Nullable<QueryStatement>): Nullable<AppHealthApplicationDatabase> | Promise<Nullable<AppHealthApplicationDatabase>>;
    appHealthGetApplicationDatabases(query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Nullable<AppHealthApplicationDatabase>[] | Promise<Nullable<AppHealthApplicationDatabase>[]>;
    appHealthPaginateApplicationDatabases(query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Pagination | Promise<Pagination>;
    appHealthFindApplicationInfrastructureService(query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Nullable<AppHealthApplicationInfrastructureService> | Promise<Nullable<AppHealthApplicationInfrastructureService>>;
    appHealthFindApplicationInfrastructureServiceById(id?: Nullable<string>, constraint?: Nullable<QueryStatement>): Nullable<AppHealthApplicationInfrastructureService> | Promise<Nullable<AppHealthApplicationInfrastructureService>>;
    appHealthGetApplicationInfrastructureServices(query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Nullable<AppHealthApplicationInfrastructureService>[] | Promise<Nullable<AppHealthApplicationInfrastructureService>[]>;
    appHealthPaginateApplicationInfrastructureServices(query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Pagination | Promise<Pagination>;
    appHealthFindApplicationIntegration(query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Nullable<AppHealthApplicationIntegration> | Promise<Nullable<AppHealthApplicationIntegration>>;
    appHealthFindApplicationIntegrationById(id?: Nullable<string>, constraint?: Nullable<QueryStatement>): Nullable<AppHealthApplicationIntegration> | Promise<Nullable<AppHealthApplicationIntegration>>;
    appHealthGetApplicationIntegrations(query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Nullable<AppHealthApplicationIntegration>[] | Promise<Nullable<AppHealthApplicationIntegration>[]>;
    appHealthPaginateApplicationIntegrations(query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Pagination | Promise<Pagination>;
    appHealthFindApplicationLanguage(query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Nullable<AppHealthApplicationLanguage> | Promise<Nullable<AppHealthApplicationLanguage>>;
    appHealthFindApplicationLanguageById(id?: Nullable<string>, constraint?: Nullable<QueryStatement>): Nullable<AppHealthApplicationLanguage> | Promise<Nullable<AppHealthApplicationLanguage>>;
    appHealthGetApplitacionLanguages(query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Nullable<AppHealthApplicationLanguage>[] | Promise<Nullable<AppHealthApplicationLanguage>[]>;
    appHealthPaginateApplitacionLanguages(query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Pagination | Promise<Pagination>;
    appHealthFindApplicationView(query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Nullable<AppHealthApplicationView> | Promise<Nullable<AppHealthApplicationView>>;
    appHealthFindApplicationViewById(id?: Nullable<string>, constraint?: Nullable<QueryStatement>): Nullable<AppHealthApplicationView> | Promise<Nullable<AppHealthApplicationView>>;
    appHealthGetApplicationViews(query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Nullable<AppHealthApplicationView>[] | Promise<Nullable<AppHealthApplicationView>[]>;
    appHealthPaginateApplicationViews(query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Pagination | Promise<Pagination>;
    appHealthFindApplication(query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Nullable<AppHealthApplication> | Promise<Nullable<AppHealthApplication>>;
    appHealthFindApplicationById(id?: Nullable<string>, constraint?: Nullable<QueryStatement>): Nullable<AppHealthApplication> | Promise<Nullable<AppHealthApplication>>;
    appHealthGetApllications(query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Nullable<AppHealthApplication>[] | Promise<Nullable<AppHealthApplication>[]>;
    appHealthPaginateApllications(query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Pagination | Promise<Pagination>;
    appHealthFindAuthenticationInterface(query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Nullable<AppHealthAuthenticationInterface> | Promise<Nullable<AppHealthAuthenticationInterface>>;
    appHealthFindAuthenticationInterfaceById(id?: Nullable<string>, constraint?: Nullable<QueryStatement>): Nullable<AppHealthAuthenticationInterface> | Promise<Nullable<AppHealthAuthenticationInterface>>;
    appHealthGetAuthenticationInterfaces(query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Nullable<AppHealthAuthenticationInterface>[] | Promise<Nullable<AppHealthAuthenticationInterface>[]>;
    appHealthPaginateAuthenticationInterfaces(query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Pagination | Promise<Pagination>;
    appHealthFindCustomer(query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Nullable<AppHealthCustomer> | Promise<Nullable<AppHealthCustomer>>;
    appHealthFindCustomerById(id?: Nullable<string>, constraint?: Nullable<QueryStatement>): Nullable<AppHealthCustomer> | Promise<Nullable<AppHealthCustomer>>;
    appHealthGetCustomers(query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Nullable<AppHealthCustomer>[] | Promise<Nullable<AppHealthCustomer>[]>;
    appHealthPaginateCustomers(query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Pagination | Promise<Pagination>;
    appHealthFindDatabase(query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Nullable<AppHealthDatabase> | Promise<Nullable<AppHealthDatabase>>;
    appHealthFindDatabaseById(id?: Nullable<string>, constraint?: Nullable<QueryStatement>): Nullable<AppHealthDatabase> | Promise<Nullable<AppHealthDatabase>>;
    appHealthGetDatabases(query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Nullable<AppHealthDatabase>[] | Promise<Nullable<AppHealthDatabase>[]>;
    appHealthPaginateDatabases(query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Pagination | Promise<Pagination>;
    appHealthFindInfrastructureProvider(query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Nullable<AppHealthInfrastructureProvider> | Promise<Nullable<AppHealthInfrastructureProvider>>;
    appHealthFindInfrastructureProviderById(id?: Nullable<string>, constraint?: Nullable<QueryStatement>): Nullable<AppHealthInfrastructureProvider> | Promise<Nullable<AppHealthInfrastructureProvider>>;
    appHealthGetInfrastructureProviders(query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Nullable<AppHealthInfrastructureProvider>[] | Promise<Nullable<AppHealthInfrastructureProvider>[]>;
    appHealthPaginateInfrastructureProviders(query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Pagination | Promise<Pagination>;
    appHealthFindInfrastructureService(query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Nullable<AppHealthInfrastructureService> | Promise<Nullable<AppHealthInfrastructureService>>;
    appHealthFindInfrastructureServiceById(id?: Nullable<string>, constraint?: Nullable<QueryStatement>): Nullable<AppHealthInfrastructureService> | Promise<Nullable<AppHealthInfrastructureService>>;
    appHealthGetInfrastructureServices(query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Nullable<AppHealthInfrastructureService>[] | Promise<Nullable<AppHealthInfrastructureService>[]>;
    appHealthPaginateInfrastructureServices(query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Pagination | Promise<Pagination>;
    appHealthFindLanguage(query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Nullable<AppHealthLanguage> | Promise<Nullable<AppHealthLanguage>>;
    appHealthFindLanguageById(id?: Nullable<string>, constraint?: Nullable<QueryStatement>): Nullable<AppHealthLanguage> | Promise<Nullable<AppHealthLanguage>>;
    appHealthGetLanguages(query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Nullable<AppHealthLanguage>[] | Promise<Nullable<AppHealthLanguage>[]>;
    appHealthPaginateLanguages(query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Pagination | Promise<Pagination>;
    appHealthFindTechnicalSolution(query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Nullable<AppHealthTechnicalSolution> | Promise<Nullable<AppHealthTechnicalSolution>>;
    appHealthFindTechnicalSolutionById(id?: Nullable<string>, constraint?: Nullable<QueryStatement>): Nullable<AppHealthTechnicalSolution> | Promise<Nullable<AppHealthTechnicalSolution>>;
    appHealthGetTechnicalSolutions(query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Nullable<AppHealthTechnicalSolution>[] | Promise<Nullable<AppHealthTechnicalSolution>[]>;
    appHealthPaginateTechnicalSolutions(query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Pagination | Promise<Pagination>;
    commonFindAdministrativeAreaLevel1(query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Nullable<CommonAdministrativeAreaLevel1> | Promise<Nullable<CommonAdministrativeAreaLevel1>>;
    commonFindAdministrativeAreaLevel1ById(id?: Nullable<string>, constraint?: Nullable<QueryStatement>): Nullable<CommonAdministrativeAreaLevel1> | Promise<Nullable<CommonAdministrativeAreaLevel1>>;
    commonGetAdministrativeAreasLevel1(query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Nullable<CommonAdministrativeAreaLevel1>[] | Promise<Nullable<CommonAdministrativeAreaLevel1>[]>;
    commonPaginateAdministrativeAreasLevel1(query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Pagination | Promise<Pagination>;
    commonFindAdministrativeAreaLevel2(query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Nullable<CommonAdministrativeAreaLevel2> | Promise<Nullable<CommonAdministrativeAreaLevel2>>;
    commonFindAdministrativeAreaLevel2ById(id?: Nullable<string>, constraint?: Nullable<QueryStatement>): Nullable<CommonAdministrativeAreaLevel2> | Promise<Nullable<CommonAdministrativeAreaLevel2>>;
    commonGetAdministrativeAreasLevel2(query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Nullable<CommonAdministrativeAreaLevel2>[] | Promise<Nullable<CommonAdministrativeAreaLevel2>[]>;
    commonPaginateAdministrativeAreasLevel2(query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Pagination | Promise<Pagination>;
    commonFindAdministrativeAreaLevel3(query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Nullable<CommonAdministrativeAreaLevel3> | Promise<Nullable<CommonAdministrativeAreaLevel3>>;
    commonFindAdministrativeAreaLevel3ById(id?: Nullable<string>, constraint?: Nullable<QueryStatement>): Nullable<CommonAdministrativeAreaLevel3> | Promise<Nullable<CommonAdministrativeAreaLevel3>>;
    commonGetAdministrativeAreasLevel3(query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Nullable<CommonAdministrativeAreaLevel3>[] | Promise<Nullable<CommonAdministrativeAreaLevel3>[]>;
    commonPaginateAdministrativeAreasLevel3(query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Pagination | Promise<Pagination>;
    commonFindCountry(query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Nullable<CommonCountry> | Promise<Nullable<CommonCountry>>;
    commonFindCountryById(id?: Nullable<string>, constraint?: Nullable<QueryStatement>): Nullable<CommonCountry> | Promise<Nullable<CommonCountry>>;
    commonGetCountries(query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Nullable<CommonCountry>[] | Promise<Nullable<CommonCountry>[]>;
    commonPaginateCountries(query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Pagination | Promise<Pagination>;
    commonFindLang(query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Nullable<CommonLang> | Promise<Nullable<CommonLang>>;
    commonFindLangById(id?: Nullable<string>, constraint?: Nullable<QueryStatement>): Nullable<CommonLang> | Promise<Nullable<CommonLang>>;
    commonGetLangs(query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Nullable<CommonLang>[] | Promise<Nullable<CommonLang>[]>;
    commonPaginateLangs(query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Pagination | Promise<Pagination>;
    coreGetLangs(): Nullable<CoreLang>[] | Promise<Nullable<CoreLang>[]>;
    coreGetFallbackLang(): Nullable<CoreLang> | Promise<Nullable<CoreLang>>;
    coreGetSearchKeyLang(): Nullable<CoreSearchKeyLang> | Promise<Nullable<CoreSearchKeyLang>>;
    hello(): Nullable<string> | Promise<Nullable<string>>;
}

export interface IMutation {
    appHealthCreateApiInterfaceType(payload: AppHealthCreateApiInterfaceTypeInput): Nullable<AppHealthApiInterfaceType> | Promise<Nullable<AppHealthApiInterfaceType>>;
    appHealthCreateApiInterfaceTypes(payload: Nullable<AppHealthCreateApiInterfaceTypeInput>[]): boolean | Promise<boolean>;
    appHealthUpdateApiInterfaceTypeById(payload: AppHealthUpdateApiInterfaceTypeByIdInput, constraint?: Nullable<QueryStatement>): Nullable<AppHealthApiInterfaceType> | Promise<Nullable<AppHealthApiInterfaceType>>;
    appHealthUpdateApiInterfaceTypes(payload: AppHealthUpdateApiInterfaceTypesInput, query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Nullable<AppHealthApiInterfaceType>[] | Promise<Nullable<AppHealthApiInterfaceType>[]>;
    appHealthUpsertApiInterfaceType(payload: AppHealthUpdateApiInterfaceTypeByIdInput): Nullable<AppHealthApiInterfaceType> | Promise<Nullable<AppHealthApiInterfaceType>>;
    appHealthDeleteApiInterfaceTypeById(id: string, constraint?: Nullable<QueryStatement>): Nullable<AppHealthApiInterfaceType> | Promise<Nullable<AppHealthApiInterfaceType>>;
    appHealthDeleteApiInterfaceTypes(query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Nullable<AppHealthApiInterfaceType>[] | Promise<Nullable<AppHealthApiInterfaceType>[]>;
    appHealthCreateApplicationApi(payload: AppHealthCreateApplicationApiInput): Nullable<AppHealthApplicationApi> | Promise<Nullable<AppHealthApplicationApi>>;
    appHealthCreateApplicationApis(payload: Nullable<AppHealthCreateApplicationApiInput>[]): boolean | Promise<boolean>;
    appHealthUpdateApplicationApiById(payload: AppHealthUpdateApplicationApiByIdInput, constraint?: Nullable<QueryStatement>): Nullable<AppHealthApplicationApi> | Promise<Nullable<AppHealthApplicationApi>>;
    appHealthUpdateApplicationApis(payload: AppHealthUpdateApplicationApisInput, query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Nullable<AppHealthApplicationApi>[] | Promise<Nullable<AppHealthApplicationApi>[]>;
    appHealthUpsertApplicationApi(payload: AppHealthUpdateApplicationApiByIdInput): Nullable<AppHealthApplicationApi> | Promise<Nullable<AppHealthApplicationApi>>;
    appHealthDeleteApplicationApiById(id: string, constraint?: Nullable<QueryStatement>): Nullable<AppHealthApplicationApi> | Promise<Nullable<AppHealthApplicationApi>>;
    appHealthDeleteApplicationApis(query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Nullable<AppHealthApplicationApi>[] | Promise<Nullable<AppHealthApplicationApi>[]>;
    appHealthCreateApplicationAuthentication(payload: AppHealthCreateApplicationAuthenticationInput): Nullable<AppHealthApplicationAuthentication> | Promise<Nullable<AppHealthApplicationAuthentication>>;
    appHealthCreateApplicationAuthentications(payload: Nullable<AppHealthCreateApplicationAuthenticationInput>[]): boolean | Promise<boolean>;
    appHealthUpdateApplicationAuthenticationById(payload: AppHealthUpdateApplicationAuthenticationByIdInput, constraint?: Nullable<QueryStatement>): Nullable<AppHealthApplicationAuthentication> | Promise<Nullable<AppHealthApplicationAuthentication>>;
    appHealthUpdateApplicationAuthentications(payload: AppHealthUpdateApplicationAuthenticationsInput, query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Nullable<AppHealthApplicationAuthentication>[] | Promise<Nullable<AppHealthApplicationAuthentication>[]>;
    appHealthUpsertApplicationAuthentication(payload: AppHealthUpdateApplicationAuthenticationByIdInput): Nullable<AppHealthApplicationAuthentication> | Promise<Nullable<AppHealthApplicationAuthentication>>;
    appHealthDeleteApplicationAuthenticationById(id: string, constraint?: Nullable<QueryStatement>): Nullable<AppHealthApplicationAuthentication> | Promise<Nullable<AppHealthApplicationAuthentication>>;
    appHealthDeleteApplicationAuthentications(query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Nullable<AppHealthApplicationAuthentication>[] | Promise<Nullable<AppHealthApplicationAuthentication>[]>;
    appHealthCreateApplicationDatabase(payload: AppHealthCreateApplicationDatabaseInput): Nullable<AppHealthApplicationDatabase> | Promise<Nullable<AppHealthApplicationDatabase>>;
    appHealthCreateApplicationDatabases(payload: Nullable<AppHealthCreateApplicationDatabaseInput>[]): boolean | Promise<boolean>;
    appHealthUpdateApplicationDatabaseById(payload: AppHealthUpdateApplicationDatabaseByIdInput, constraint?: Nullable<QueryStatement>): Nullable<AppHealthApplicationDatabase> | Promise<Nullable<AppHealthApplicationDatabase>>;
    appHealthUpdateApplicationDatabases(payload: AppHealthUpdateApplicationDatabasesInput, query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Nullable<AppHealthApplicationDatabase>[] | Promise<Nullable<AppHealthApplicationDatabase>[]>;
    appHealthUpsertApplicationDatabase(payload: AppHealthUpdateApplicationDatabaseByIdInput): Nullable<AppHealthApplicationDatabase> | Promise<Nullable<AppHealthApplicationDatabase>>;
    appHealthDeleteApplicationDatabaseById(id: string, constraint?: Nullable<QueryStatement>): Nullable<AppHealthApplicationDatabase> | Promise<Nullable<AppHealthApplicationDatabase>>;
    appHealthDeleteApplicationDatabases(query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Nullable<AppHealthApplicationDatabase>[] | Promise<Nullable<AppHealthApplicationDatabase>[]>;
    appHealthCreateApplicationInfrastructureService(payload: AppHealthCreateApplicationInfrastructureServiceInput): Nullable<AppHealthApplicationInfrastructureService> | Promise<Nullable<AppHealthApplicationInfrastructureService>>;
    appHealthCreateApplicationInfrastructureServices(payload: Nullable<AppHealthCreateApplicationInfrastructureServiceInput>[]): boolean | Promise<boolean>;
    appHealthUpdateApplicationInfrastructureServiceById(payload: AppHealthUpdateApplicationInfrastructureServiceByIdInput, constraint?: Nullable<QueryStatement>): Nullable<AppHealthApplicationInfrastructureService> | Promise<Nullable<AppHealthApplicationInfrastructureService>>;
    appHealthUpdateApplicationInfrastructureServices(payload: AppHealthUpdateApplicationInfrastructureServicesInput, query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Nullable<AppHealthApplicationInfrastructureService>[] | Promise<Nullable<AppHealthApplicationInfrastructureService>[]>;
    appHealthUpsertApplicationInfrastructureService(payload: AppHealthUpdateApplicationInfrastructureServiceByIdInput): Nullable<AppHealthApplicationInfrastructureService> | Promise<Nullable<AppHealthApplicationInfrastructureService>>;
    appHealthDeleteApplicationInfrastructureServiceById(id: string, constraint?: Nullable<QueryStatement>): Nullable<AppHealthApplicationInfrastructureService> | Promise<Nullable<AppHealthApplicationInfrastructureService>>;
    appHealthDeleteApplicationInfrastructureServices(query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Nullable<AppHealthApplicationInfrastructureService>[] | Promise<Nullable<AppHealthApplicationInfrastructureService>[]>;
    appHealthCreateApplicationIntegration(payload: AppHealthCreateApplicationIntegrationInput): Nullable<AppHealthApplicationIntegration> | Promise<Nullable<AppHealthApplicationIntegration>>;
    appHealthCreateApplicationIntegrations(payload: Nullable<AppHealthCreateApplicationIntegrationInput>[]): boolean | Promise<boolean>;
    appHealthUpdateApplicationIntegrationById(payload: AppHealthUpdateApplicationIntegrationByIdInput, constraint?: Nullable<QueryStatement>): Nullable<AppHealthApplicationIntegration> | Promise<Nullable<AppHealthApplicationIntegration>>;
    appHealthUpdateApplicationIntegrations(payload: AppHealthUpdateApplicationIntegrationsInput, query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Nullable<AppHealthApplicationIntegration>[] | Promise<Nullable<AppHealthApplicationIntegration>[]>;
    appHealthUpsertApplicationIntegration(payload: AppHealthUpdateApplicationIntegrationByIdInput): Nullable<AppHealthApplicationIntegration> | Promise<Nullable<AppHealthApplicationIntegration>>;
    appHealthDeleteApplicationIntegrationById(id: string, constraint?: Nullable<QueryStatement>): Nullable<AppHealthApplicationIntegration> | Promise<Nullable<AppHealthApplicationIntegration>>;
    appHealthDeleteApplicationIntegrations(query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Nullable<AppHealthApplicationIntegration>[] | Promise<Nullable<AppHealthApplicationIntegration>[]>;
    appHealthCreateApplicationLanguage(payload: AppHealthCreateApplicationLanguageInput): Nullable<AppHealthApplicationLanguage> | Promise<Nullable<AppHealthApplicationLanguage>>;
    appHealthCreateApplitacionLanguages(payload: Nullable<AppHealthCreateApplicationLanguageInput>[]): boolean | Promise<boolean>;
    appHealthUpdateApplicationLanguageById(payload: AppHealthUpdateApplicationLanguageByIdInput, constraint?: Nullable<QueryStatement>): Nullable<AppHealthApplicationLanguage> | Promise<Nullable<AppHealthApplicationLanguage>>;
    appHealthUpdateApplitacionLanguages(payload: AppHealthUpdateApplitacionLanguagesInput, query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Nullable<AppHealthApplicationLanguage>[] | Promise<Nullable<AppHealthApplicationLanguage>[]>;
    appHealthUpsertApplicationLanguage(payload: AppHealthUpdateApplicationLanguageByIdInput): Nullable<AppHealthApplicationLanguage> | Promise<Nullable<AppHealthApplicationLanguage>>;
    appHealthDeleteApplicationLanguageById(id: string, constraint?: Nullable<QueryStatement>): Nullable<AppHealthApplicationLanguage> | Promise<Nullable<AppHealthApplicationLanguage>>;
    appHealthDeleteApplitacionLanguages(query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Nullable<AppHealthApplicationLanguage>[] | Promise<Nullable<AppHealthApplicationLanguage>[]>;
    appHealthCreateApplicationView(payload: AppHealthCreateApplicationViewInput): Nullable<AppHealthApplicationView> | Promise<Nullable<AppHealthApplicationView>>;
    appHealthCreateApplicationViews(payload: Nullable<AppHealthCreateApplicationViewInput>[]): boolean | Promise<boolean>;
    appHealthUpdateApplicationViewById(payload: AppHealthUpdateApplicationViewByIdInput, constraint?: Nullable<QueryStatement>): Nullable<AppHealthApplicationView> | Promise<Nullable<AppHealthApplicationView>>;
    appHealthUpdateApplicationViews(payload: AppHealthUpdateApplicationViewsInput, query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Nullable<AppHealthApplicationView>[] | Promise<Nullable<AppHealthApplicationView>[]>;
    appHealthUpsertApplicationView(payload: AppHealthUpdateApplicationViewByIdInput): Nullable<AppHealthApplicationView> | Promise<Nullable<AppHealthApplicationView>>;
    appHealthDeleteApplicationViewById(id: string, constraint?: Nullable<QueryStatement>): Nullable<AppHealthApplicationView> | Promise<Nullable<AppHealthApplicationView>>;
    appHealthDeleteApplicationViews(query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Nullable<AppHealthApplicationView>[] | Promise<Nullable<AppHealthApplicationView>[]>;
    appHealthCreateApplication(payload: AppHealthCreateApplicationInput): Nullable<AppHealthApplication> | Promise<Nullable<AppHealthApplication>>;
    appHealthCreateApllications(payload: Nullable<AppHealthCreateApplicationInput>[]): boolean | Promise<boolean>;
    appHealthUpdateApplicationById(payload: AppHealthUpdateApplicationByIdInput, constraint?: Nullable<QueryStatement>): Nullable<AppHealthApplication> | Promise<Nullable<AppHealthApplication>>;
    appHealthUpdateApllications(payload: AppHealthUpdateApllicationsInput, query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Nullable<AppHealthApplication>[] | Promise<Nullable<AppHealthApplication>[]>;
    appHealthUpsertApplication(payload: AppHealthUpdateApplicationByIdInput): Nullable<AppHealthApplication> | Promise<Nullable<AppHealthApplication>>;
    appHealthDeleteApplicationById(id: string, constraint?: Nullable<QueryStatement>): Nullable<AppHealthApplication> | Promise<Nullable<AppHealthApplication>>;
    appHealthDeleteApllications(query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Nullable<AppHealthApplication>[] | Promise<Nullable<AppHealthApplication>[]>;
    appHealthCreateAuthenticationInterface(payload: AppHealthCreateAuthenticationInterfaceInput): Nullable<AppHealthAuthenticationInterface> | Promise<Nullable<AppHealthAuthenticationInterface>>;
    appHealthCreateAuthenticationInterfaces(payload: Nullable<AppHealthCreateAuthenticationInterfaceInput>[]): boolean | Promise<boolean>;
    appHealthUpdateAuthenticationInterfaceById(payload: AppHealthUpdateAuthenticationInterfaceByIdInput, constraint?: Nullable<QueryStatement>): Nullable<AppHealthAuthenticationInterface> | Promise<Nullable<AppHealthAuthenticationInterface>>;
    appHealthUpdateAuthenticationInterfaces(payload: AppHealthUpdateAuthenticationInterfacesInput, query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Nullable<AppHealthAuthenticationInterface>[] | Promise<Nullable<AppHealthAuthenticationInterface>[]>;
    appHealthUpsertAuthenticationInterface(payload: AppHealthUpdateAuthenticationInterfaceByIdInput): Nullable<AppHealthAuthenticationInterface> | Promise<Nullable<AppHealthAuthenticationInterface>>;
    appHealthDeleteAuthenticationInterfaceById(id: string, constraint?: Nullable<QueryStatement>): Nullable<AppHealthAuthenticationInterface> | Promise<Nullable<AppHealthAuthenticationInterface>>;
    appHealthDeleteAuthenticationInterfaces(query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Nullable<AppHealthAuthenticationInterface>[] | Promise<Nullable<AppHealthAuthenticationInterface>[]>;
    appHealthCreateCustomer(payload: AppHealthCreateCustomerInput): Nullable<AppHealthCustomer> | Promise<Nullable<AppHealthCustomer>>;
    appHealthCreateCustomers(payload: Nullable<AppHealthCreateCustomerInput>[]): boolean | Promise<boolean>;
    appHealthUpdateCustomerById(payload: AppHealthUpdateCustomerByIdInput, constraint?: Nullable<QueryStatement>): Nullable<AppHealthCustomer> | Promise<Nullable<AppHealthCustomer>>;
    appHealthUpdateCustomers(payload: AppHealthUpdateCustomersInput, query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Nullable<AppHealthCustomer>[] | Promise<Nullable<AppHealthCustomer>[]>;
    appHealthUpsertCustomer(payload: AppHealthUpdateCustomerByIdInput): Nullable<AppHealthCustomer> | Promise<Nullable<AppHealthCustomer>>;
    appHealthDeleteCustomerById(id: string, constraint?: Nullable<QueryStatement>): Nullable<AppHealthCustomer> | Promise<Nullable<AppHealthCustomer>>;
    appHealthDeleteCustomers(query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Nullable<AppHealthCustomer>[] | Promise<Nullable<AppHealthCustomer>[]>;
    appHealthCreateDatabase(payload: AppHealthCreateDatabaseInput): Nullable<AppHealthDatabase> | Promise<Nullable<AppHealthDatabase>>;
    appHealthCreateDatabases(payload: Nullable<AppHealthCreateDatabaseInput>[]): boolean | Promise<boolean>;
    appHealthUpdateDatabaseById(payload: AppHealthUpdateDatabaseByIdInput, constraint?: Nullable<QueryStatement>): Nullable<AppHealthDatabase> | Promise<Nullable<AppHealthDatabase>>;
    appHealthUpdateDatabases(payload: AppHealthUpdateDatabasesInput, query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Nullable<AppHealthDatabase>[] | Promise<Nullable<AppHealthDatabase>[]>;
    appHealthUpsertDatabase(payload: AppHealthUpdateDatabaseByIdInput): Nullable<AppHealthDatabase> | Promise<Nullable<AppHealthDatabase>>;
    appHealthDeleteDatabaseById(id: string, constraint?: Nullable<QueryStatement>): Nullable<AppHealthDatabase> | Promise<Nullable<AppHealthDatabase>>;
    appHealthDeleteDatabases(query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Nullable<AppHealthDatabase>[] | Promise<Nullable<AppHealthDatabase>[]>;
    appHealthCreateInfrastructureProvider(payload: AppHealthCreateInfrastructureProviderInput): Nullable<AppHealthInfrastructureProvider> | Promise<Nullable<AppHealthInfrastructureProvider>>;
    appHealthCreateInfrastructureProviders(payload: Nullable<AppHealthCreateInfrastructureProviderInput>[]): boolean | Promise<boolean>;
    appHealthUpdateInfrastructureProviderById(payload: AppHealthUpdateInfrastructureProviderByIdInput, constraint?: Nullable<QueryStatement>): Nullable<AppHealthInfrastructureProvider> | Promise<Nullable<AppHealthInfrastructureProvider>>;
    appHealthUpdateInfrastructureProviders(payload: AppHealthUpdateInfrastructureProvidersInput, query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Nullable<AppHealthInfrastructureProvider>[] | Promise<Nullable<AppHealthInfrastructureProvider>[]>;
    appHealthUpsertInfrastructureProvider(payload: AppHealthUpdateInfrastructureProviderByIdInput): Nullable<AppHealthInfrastructureProvider> | Promise<Nullable<AppHealthInfrastructureProvider>>;
    appHealthDeleteInfrastructureProviderById(id: string, constraint?: Nullable<QueryStatement>): Nullable<AppHealthInfrastructureProvider> | Promise<Nullable<AppHealthInfrastructureProvider>>;
    appHealthDeleteInfrastructureProviders(query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Nullable<AppHealthInfrastructureProvider>[] | Promise<Nullable<AppHealthInfrastructureProvider>[]>;
    appHealthCreateInfrastructureService(payload: AppHealthCreateInfrastructureServiceInput): Nullable<AppHealthInfrastructureService> | Promise<Nullable<AppHealthInfrastructureService>>;
    appHealthCreateInfrastructureServices(payload: Nullable<AppHealthCreateInfrastructureServiceInput>[]): boolean | Promise<boolean>;
    appHealthUpdateInfrastructureServiceById(payload: AppHealthUpdateInfrastructureServiceByIdInput, constraint?: Nullable<QueryStatement>): Nullable<AppHealthInfrastructureService> | Promise<Nullable<AppHealthInfrastructureService>>;
    appHealthUpdateInfrastructureServices(payload: AppHealthUpdateInfrastructureServicesInput, query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Nullable<AppHealthInfrastructureService>[] | Promise<Nullable<AppHealthInfrastructureService>[]>;
    appHealthUpsertInfrastructureService(payload: AppHealthUpdateInfrastructureServiceByIdInput): Nullable<AppHealthInfrastructureService> | Promise<Nullable<AppHealthInfrastructureService>>;
    appHealthDeleteInfrastructureServiceById(id: string, constraint?: Nullable<QueryStatement>): Nullable<AppHealthInfrastructureService> | Promise<Nullable<AppHealthInfrastructureService>>;
    appHealthDeleteInfrastructureServices(query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Nullable<AppHealthInfrastructureService>[] | Promise<Nullable<AppHealthInfrastructureService>[]>;
    appHealthCreateLanguage(payload: AppHealthCreateLanguageInput): Nullable<AppHealthLanguage> | Promise<Nullable<AppHealthLanguage>>;
    appHealthCreateLanguages(payload: Nullable<AppHealthCreateLanguageInput>[]): boolean | Promise<boolean>;
    appHealthUpdateLanguageById(payload: AppHealthUpdateLanguageByIdInput, constraint?: Nullable<QueryStatement>): Nullable<AppHealthLanguage> | Promise<Nullable<AppHealthLanguage>>;
    appHealthUpdateLanguages(payload: AppHealthUpdateLanguagesInput, query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Nullable<AppHealthLanguage>[] | Promise<Nullable<AppHealthLanguage>[]>;
    appHealthUpsertLanguage(payload: AppHealthUpdateLanguageByIdInput): Nullable<AppHealthLanguage> | Promise<Nullable<AppHealthLanguage>>;
    appHealthDeleteLanguageById(id: string, constraint?: Nullable<QueryStatement>): Nullable<AppHealthLanguage> | Promise<Nullable<AppHealthLanguage>>;
    appHealthDeleteLanguages(query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Nullable<AppHealthLanguage>[] | Promise<Nullable<AppHealthLanguage>[]>;
    appHealthCreateTechnicalSolution(payload: AppHealthCreateTechnicalSolutionInput): Nullable<AppHealthTechnicalSolution> | Promise<Nullable<AppHealthTechnicalSolution>>;
    appHealthCreateTechnicalSolutions(payload: Nullable<AppHealthCreateTechnicalSolutionInput>[]): boolean | Promise<boolean>;
    appHealthUpdateTechnicalSolutionById(payload: AppHealthUpdateTechnicalSolutionByIdInput, constraint?: Nullable<QueryStatement>): Nullable<AppHealthTechnicalSolution> | Promise<Nullable<AppHealthTechnicalSolution>>;
    appHealthUpdateTechnicalSolutions(payload: AppHealthUpdateTechnicalSolutionsInput, query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Nullable<AppHealthTechnicalSolution>[] | Promise<Nullable<AppHealthTechnicalSolution>[]>;
    appHealthUpsertTechnicalSolution(payload: AppHealthUpdateTechnicalSolutionByIdInput): Nullable<AppHealthTechnicalSolution> | Promise<Nullable<AppHealthTechnicalSolution>>;
    appHealthDeleteTechnicalSolutionById(id: string, constraint?: Nullable<QueryStatement>): Nullable<AppHealthTechnicalSolution> | Promise<Nullable<AppHealthTechnicalSolution>>;
    appHealthDeleteTechnicalSolutions(query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Nullable<AppHealthTechnicalSolution>[] | Promise<Nullable<AppHealthTechnicalSolution>[]>;
    commonCreateAdministrativeAreaLevel1(payload: CommonCreateAdministrativeAreaLevel1Input): Nullable<CommonAdministrativeAreaLevel1> | Promise<Nullable<CommonAdministrativeAreaLevel1>>;
    commonCreateAdministrativeAreasLevel1(payload: Nullable<CommonCreateAdministrativeAreaLevel1Input>[]): boolean | Promise<boolean>;
    commonUpdateAdministrativeAreaLevel1ById(payload: CommonUpdateAdministrativeAreaLevel1ByIdInput, constraint?: Nullable<QueryStatement>): Nullable<CommonAdministrativeAreaLevel1> | Promise<Nullable<CommonAdministrativeAreaLevel1>>;
    commonUpdateAdministrativeAreasLevel1(payload: CommonUpdateAdministrativeAreasLevel1Input, query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Nullable<CommonAdministrativeAreaLevel1>[] | Promise<Nullable<CommonAdministrativeAreaLevel1>[]>;
    commonUpsertAdministrativeAreaLevel1(payload: CommonUpdateAdministrativeAreaLevel1ByIdInput): Nullable<CommonAdministrativeAreaLevel1> | Promise<Nullable<CommonAdministrativeAreaLevel1>>;
    commonDeleteAdministrativeAreaLevel1ById(id: string, constraint?: Nullable<QueryStatement>): Nullable<CommonAdministrativeAreaLevel1> | Promise<Nullable<CommonAdministrativeAreaLevel1>>;
    commonDeleteAdministrativeAreasLevel1(query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Nullable<CommonAdministrativeAreaLevel1>[] | Promise<Nullable<CommonAdministrativeAreaLevel1>[]>;
    commonCreateAdministrativeAreaLevel2(payload: CommonCreateAdministrativeAreaLevel2Input): Nullable<CommonAdministrativeAreaLevel2> | Promise<Nullable<CommonAdministrativeAreaLevel2>>;
    commonCreateAdministrativeAreasLevel2(payload: Nullable<CommonCreateAdministrativeAreaLevel2Input>[]): boolean | Promise<boolean>;
    commonUpdateAdministrativeAreaLevel2ById(payload: CommonUpdateAdministrativeAreaLevel2ByIdInput, constraint?: Nullable<QueryStatement>): Nullable<CommonAdministrativeAreaLevel2> | Promise<Nullable<CommonAdministrativeAreaLevel2>>;
    commonUpdateAdministrativeAreasLevel2(payload: CommonUpdateAdministrativeAreasLevel2Input, query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Nullable<CommonAdministrativeAreaLevel2>[] | Promise<Nullable<CommonAdministrativeAreaLevel2>[]>;
    commonUpsertAdministrativeAreaLevel2(payload: CommonUpdateAdministrativeAreaLevel2ByIdInput): Nullable<CommonAdministrativeAreaLevel2> | Promise<Nullable<CommonAdministrativeAreaLevel2>>;
    commonDeleteAdministrativeAreaLevel2ById(id: string, constraint?: Nullable<QueryStatement>): Nullable<CommonAdministrativeAreaLevel2> | Promise<Nullable<CommonAdministrativeAreaLevel2>>;
    commonDeleteAdministrativeAreasLevel2(query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Nullable<CommonAdministrativeAreaLevel2>[] | Promise<Nullable<CommonAdministrativeAreaLevel2>[]>;
    commonCreateAdministrativeAreaLevel3(payload: CommonCreateAdministrativeAreaLevel3Input): Nullable<CommonAdministrativeAreaLevel3> | Promise<Nullable<CommonAdministrativeAreaLevel3>>;
    commonCreateAdministrativeAreasLevel3(payload: Nullable<CommonCreateAdministrativeAreaLevel3Input>[]): boolean | Promise<boolean>;
    commonUpdateAdministrativeAreaLevel3ById(payload: CommonUpdateAdministrativeAreaLevel3ByIdInput, constraint?: Nullable<QueryStatement>): Nullable<CommonAdministrativeAreaLevel3> | Promise<Nullable<CommonAdministrativeAreaLevel3>>;
    commonUpdateAdministrativeAreasLevel3(payload: CommonUpdateAdministrativeAreasLevel3Input, query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Nullable<CommonAdministrativeAreaLevel3>[] | Promise<Nullable<CommonAdministrativeAreaLevel3>[]>;
    commonUpsertAdministrativeAreaLevel3(payload: CommonUpdateAdministrativeAreaLevel3ByIdInput): Nullable<CommonAdministrativeAreaLevel3> | Promise<Nullable<CommonAdministrativeAreaLevel3>>;
    commonDeleteAdministrativeAreaLevel3ById(id: string, constraint?: Nullable<QueryStatement>): Nullable<CommonAdministrativeAreaLevel3> | Promise<Nullable<CommonAdministrativeAreaLevel3>>;
    commonDeleteAdministrativeAreasLevel3(query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Nullable<CommonAdministrativeAreaLevel3>[] | Promise<Nullable<CommonAdministrativeAreaLevel3>[]>;
    commonCreateCountry(payload: CommonCreateCountryInput): Nullable<CommonCountry> | Promise<Nullable<CommonCountry>>;
    commonCreateCountries(payload: Nullable<CommonCreateCountryInput>[]): boolean | Promise<boolean>;
    commonUpdateCountryById(payload: CommonUpdateCountryByIdInput, constraint?: Nullable<QueryStatement>): Nullable<CommonCountry> | Promise<Nullable<CommonCountry>>;
    commonUpdateCountries(payload: CommonUpdateCountriesInput, query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Nullable<CommonCountry>[] | Promise<Nullable<CommonCountry>[]>;
    commonUpsertCountry(payload: CommonUpdateCountryByIdInput): Nullable<CommonCountry> | Promise<Nullable<CommonCountry>>;
    commonDeleteCountryById(id: string, constraint?: Nullable<QueryStatement>): Nullable<CommonCountry> | Promise<Nullable<CommonCountry>>;
    commonDeleteCountries(query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Nullable<CommonCountry>[] | Promise<Nullable<CommonCountry>[]>;
    commonCreateLang(payload: CommonCreateLangInput): Nullable<CommonLang> | Promise<Nullable<CommonLang>>;
    commonCreateLangs(payload: Nullable<CommonCreateLangInput>[]): boolean | Promise<boolean>;
    commonUpdateLangById(payload: CommonUpdateLangByIdInput, constraint?: Nullable<QueryStatement>): Nullable<CommonLang> | Promise<Nullable<CommonLang>>;
    commonUpdateLangs(payload: CommonUpdateLangsInput, query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Nullable<CommonLang>[] | Promise<Nullable<CommonLang>[]>;
    commonUpsertLang(payload: CommonUpdateLangByIdInput): Nullable<CommonLang> | Promise<Nullable<CommonLang>>;
    commonDeleteLangById(id: string, constraint?: Nullable<QueryStatement>): Nullable<CommonLang> | Promise<Nullable<CommonLang>>;
    commonDeleteLangs(query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Nullable<CommonLang>[] | Promise<Nullable<CommonLang>[]>;
}

export interface AppHealthApplicationApi {
    id: string;
    applicationId: string;
    application?: Nullable<AppHealthApplication>;
    apiInterfaceTypeId: string;
    apiInterface?: Nullable<AppHealthApiInterfaceType>;
    score: GraphQLInt;
    documentations?: Nullable<AppHealthApplicationApiDocumentations>;
    requestsPerDay: GraphQLInt;
    createdAt?: Nullable<GraphQLTimestamp>;
    updatedAt?: Nullable<GraphQLTimestamp>;
    deletedAt?: Nullable<GraphQLTimestamp>;
}

export interface AppHealthApplicationAuthentication {
    id: string;
    applicationId: string;
    application?: Nullable<AppHealthApplication>;
    authenticationInterfaceId: string;
    authenticationInterface?: Nullable<AppHealthAuthenticationInterface>;
    applicationInfrastructureServiceId: string;
    applicationInfrastructureService?: Nullable<AppHealthApplicationInfrastructureService>;
    totalUsers: GraphQLInt;
    score: GraphQLInt;
    createdAt?: Nullable<GraphQLTimestamp>;
    updatedAt?: Nullable<GraphQLTimestamp>;
    deletedAt?: Nullable<GraphQLTimestamp>;
}

export interface AppHealthApplicationDatabase {
    id: string;
    applicationId: string;
    application?: Nullable<AppHealthApplication>;
    databaseId: string;
    database?: Nullable<AppHealthDatabase>;
    applicationInfrastructureServiceId: string;
    applicationInfrastructureService?: Nullable<AppHealthApplicationInfrastructureService>;
    version: GraphQLString;
    size: GraphQLInt;
    score: GraphQLInt;
    totalCollectionTables: GraphQLInt;
    totalFields: GraphQLInt;
    createdAt?: Nullable<GraphQLTimestamp>;
    updatedAt?: Nullable<GraphQLTimestamp>;
    deletedAt?: Nullable<GraphQLTimestamp>;
}

export interface AppHealthApplicationInfrastructureService {
    id: string;
    applicationId: string;
    application?: Nullable<AppHealthApplication>;
    infrastructureServiceId: string;
    infrastructureService?: Nullable<AppHealthInfrastructureService>;
    avarageCostPerYear: GraphQLInt;
    score: GraphQLInt;
    createdAt?: Nullable<GraphQLTimestamp>;
    updatedAt?: Nullable<GraphQLTimestamp>;
    deletedAt?: Nullable<GraphQLTimestamp>;
}

export interface AppHealthApplicationIntegration {
    id: string;
    name: GraphQLString;
    description?: Nullable<GraphQLString>;
    sourceApplicationId: string;
    sourceApplication?: Nullable<AppHealthApplication>;
    apiInterfaceTypeId: string;
    apiInterfaceType?: Nullable<AppHealthApiInterfaceType>;
    interfaceNumbers: GraphQLInt;
    modality: AppHealthApplicationIntegrationModality;
    score: GraphQLInt;
    documentations?: Nullable<AppHealthApplicationIntegrationDocumentations>;
    createdAt?: Nullable<GraphQLTimestamp>;
    updatedAt?: Nullable<GraphQLTimestamp>;
    deletedAt?: Nullable<GraphQLTimestamp>;
}

export interface AppHealthApplicationLanguage {
    id: string;
    applicationId: string;
    application?: Nullable<AppHealthApplication>;
    languageId: string;
    language?: Nullable<AppHealthLanguage>;
    version: GraphQLString;
    score: GraphQLInt;
    codeQualityScore: GraphQLInt;
    createdAt?: Nullable<GraphQLTimestamp>;
    updatedAt?: Nullable<GraphQLTimestamp>;
    deletedAt?: Nullable<GraphQLTimestamp>;
}

export interface AppHealthApplicationView {
    id: string;
    applicationId: string;
    application?: Nullable<AppHealthApplication>;
    totalViews: GraphQLInt;
    complexity: AppHealthApplicationViewComplexity;
    description: GraphQLInt;
    score: GraphQLInt;
    createdAt?: Nullable<GraphQLTimestamp>;
    updatedAt?: Nullable<GraphQLTimestamp>;
    deletedAt?: Nullable<GraphQLTimestamp>;
}

export interface AppHealthApplication {
    id: string;
    technicalSolutionId: string;
    name: GraphQLString;
    description?: Nullable<GraphQLString>;
    businessImpact?: Nullable<GraphQLString>;
    type: AppHealthApplicationType;
    releaseDate: GraphQLISODateTime;
    architectureDiagram: GraphQLString;
    hasTenants: GraphQLBoolean;
    hasLicensing: GraphQLBoolean;
    costLicensesPerYear: GraphQLInt;
    requestsPerDay: GraphQLInt;
    createdAt?: Nullable<GraphQLTimestamp>;
    updatedAt?: Nullable<GraphQLTimestamp>;
    deletedAt?: Nullable<GraphQLTimestamp>;
}

export interface AppHealthAuthenticationInterface {
    id: string;
    name: GraphQLString;
    score: GraphQLInt;
    createdAt?: Nullable<GraphQLTimestamp>;
    updatedAt?: Nullable<GraphQLTimestamp>;
    deletedAt?: Nullable<GraphQLTimestamp>;
}

export interface AppHealthCustomer {
    id: string;
    name: GraphQLString;
    createdAt?: Nullable<GraphQLTimestamp>;
    updatedAt?: Nullable<GraphQLTimestamp>;
    deletedAt?: Nullable<GraphQLTimestamp>;
}

export interface AppHealthDatabase {
    id: string;
    name: GraphQLString;
    type: AppHealthDatabaseType;
    versions: JSON;
    createdAt?: Nullable<GraphQLTimestamp>;
    updatedAt?: Nullable<GraphQLTimestamp>;
    deletedAt?: Nullable<GraphQLTimestamp>;
}

export interface AppHealthInfrastructureProvider {
    id: string;
    name: GraphQLString;
    score: GraphQLInt;
    createdAt?: Nullable<GraphQLTimestamp>;
    updatedAt?: Nullable<GraphQLTimestamp>;
    deletedAt?: Nullable<GraphQLTimestamp>;
}

export interface AppHealthInfrastructureService {
    id: string;
    providerId: string;
    provider?: Nullable<AppHealthInfrastructureProvider>;
    name: GraphQLString;
    score: GraphQLInt;
    createdAt?: Nullable<GraphQLTimestamp>;
    updatedAt?: Nullable<GraphQLTimestamp>;
    deletedAt?: Nullable<GraphQLTimestamp>;
}

export interface AppHealthLanguage {
    id: string;
    name: GraphQLString;
    versions: JSON;
    createdAt?: Nullable<GraphQLTimestamp>;
    updatedAt?: Nullable<GraphQLTimestamp>;
    deletedAt?: Nullable<GraphQLTimestamp>;
}

export interface AppHealthTechnicalSolution {
    id: string;
    customerId: string;
    customer?: Nullable<AppHealthCustomer>;
    name: GraphQLString;
    description?: Nullable<GraphQLString>;
    architectureDiagram: GraphQLString;
    proposal: GraphQLString;
    createdAt?: Nullable<GraphQLTimestamp>;
    updatedAt?: Nullable<GraphQLTimestamp>;
    deletedAt?: Nullable<GraphQLTimestamp>;
}

export interface CommonAdministrativeAreaLevel1 {
    id: string;
    countryId: string;
    country?: Nullable<CommonCountry>;
    code: GraphQLString;
    customCode?: Nullable<GraphQLString>;
    name: GraphQLString;
    slug: GraphQLString;
    latitude?: Nullable<GraphQLFloat>;
    longitude?: Nullable<GraphQLFloat>;
    zoom?: Nullable<GraphQLInt>;
    mapType: CommonAdministrativeAreaLevel1MapType;
    createdAt?: Nullable<GraphQLTimestamp>;
    updatedAt?: Nullable<GraphQLTimestamp>;
    deletedAt?: Nullable<GraphQLTimestamp>;
}

export interface CommonAdministrativeAreaLevel2 {
    id: string;
    countryId: string;
    country?: Nullable<CommonCountry>;
    administrativeAreaLevel1Id: string;
    administrativeAreaLevel1?: Nullable<CommonAdministrativeAreaLevel1>;
    code: GraphQLString;
    customCode?: Nullable<GraphQLString>;
    name: GraphQLString;
    slug: GraphQLString;
    latitude?: Nullable<GraphQLFloat>;
    longitude?: Nullable<GraphQLFloat>;
    zoom?: Nullable<GraphQLInt>;
    mapType: CommonAdministrativeAreaLevel2MapType;
    createdAt?: Nullable<GraphQLTimestamp>;
    updatedAt?: Nullable<GraphQLTimestamp>;
    deletedAt?: Nullable<GraphQLTimestamp>;
}

export interface CommonAdministrativeAreaLevel3 {
    id: string;
    countryId: string;
    country?: Nullable<CommonCountry>;
    administrativeAreaLevel1Id: string;
    administrativeAreaLevel1?: Nullable<CommonAdministrativeAreaLevel1>;
    administrativeAreaLevel2Id: string;
    administrativeAreaLevel2?: Nullable<CommonAdministrativeAreaLevel2>;
    code: GraphQLString;
    customCode?: Nullable<GraphQLString>;
    name: GraphQLString;
    slug: GraphQLString;
    latitude?: Nullable<GraphQLFloat>;
    longitude?: Nullable<GraphQLFloat>;
    zoom?: Nullable<GraphQLInt>;
    mapType: CommonAdministrativeAreaLevel3MapType;
    createdAt?: Nullable<GraphQLTimestamp>;
    updatedAt?: Nullable<GraphQLTimestamp>;
    deletedAt?: Nullable<GraphQLTimestamp>;
}

export interface CommonCountry {
    id: string;
    iso3166Alpha2: GraphQLString;
    iso3166Alpha3: GraphQLString;
    iso3166Numeric: GraphQLString;
    customCode?: Nullable<GraphQLString>;
    prefix?: Nullable<GraphQLString>;
    image?: Nullable<GraphQLString>;
    sort?: Nullable<GraphQLInt>;
    administrativeAreas?: Nullable<JSON>;
    latitude?: Nullable<GraphQLFloat>;
    longitude?: Nullable<GraphQLFloat>;
    zoom?: Nullable<GraphQLInt>;
    mapType: CommonCountryMapType;
    availableLangs?: Nullable<JSON>;
    createdAt?: Nullable<GraphQLTimestamp>;
    updatedAt?: Nullable<GraphQLTimestamp>;
    deletedAt?: Nullable<GraphQLTimestamp>;
    langId: string;
    lang?: Nullable<CommonLang>;
    name: GraphQLString;
    slug: GraphQLString;
    administrativeAreaLevel1?: Nullable<GraphQLString>;
    administrativeAreaLevel2?: Nullable<GraphQLString>;
    administrativeAreaLevel3?: Nullable<GraphQLString>;
}

export interface CommonLang {
    id: string;
    name: GraphQLString;
    image?: Nullable<GraphQLString>;
    iso6392: GraphQLString;
    iso6393: GraphQLString;
    ietf: GraphQLString;
    customCode?: Nullable<GraphQLString>;
    dir: CommonLangDir;
    sort?: Nullable<GraphQLInt>;
    isActive: GraphQLBoolean;
    createdAt?: Nullable<GraphQLTimestamp>;
    updatedAt?: Nullable<GraphQLTimestamp>;
    deletedAt?: Nullable<GraphQLTimestamp>;
}

export interface CoreLang {
    id: GraphQLString;
    name: GraphQLString;
    image?: Nullable<GraphQLString>;
    iso6392: GraphQLString;
    iso6393: GraphQLString;
    ietf: GraphQLString;
    customCode?: Nullable<GraphQLString>;
    dir: CoreLangDir;
    sort?: Nullable<GraphQLInt>;
    isActive: GraphQLBoolean;
    createdAt?: Nullable<GraphQLString>;
    updatedAt?: Nullable<GraphQLString>;
    deletedAt?: Nullable<GraphQLString>;
}

export interface Pagination {
    total: GraphQLInt;
    count: GraphQLInt;
    rows: Nullable<JSON>[];
}

export type JSON = any;
export type Any = any;
export type Upload = any;
export type GraphQLString = any;
export type GraphQLInt = any;
export type GraphQLFloat = any;
export type GraphQLBoolean = any;
export type GraphQLISODateTime = any;
export type GraphQLTimestamp = any;
type Nullable<T> = T | null;
