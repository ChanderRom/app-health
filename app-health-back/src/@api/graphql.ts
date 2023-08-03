
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

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

export interface AppHealthCreateApplicationDatabaseInput {
    id: string;
    applicationId: string;
    databaseId: string;
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
    version?: Nullable<GraphQLString>;
    size?: Nullable<GraphQLInt>;
    score?: Nullable<GraphQLInt>;
    totalCollectionTables?: Nullable<GraphQLInt>;
    totalFields?: Nullable<GraphQLInt>;
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

export interface AppHealthApplicationDatabase {
    id: string;
    applicationId: string;
    application?: Nullable<AppHealthApplication>;
    databaseId: string;
    database?: Nullable<AppHealthDatabase>;
    version: GraphQLString;
    size: GraphQLInt;
    score: GraphQLInt;
    totalCollectionTables: GraphQLInt;
    totalFields: GraphQLInt;
    createdAt?: Nullable<GraphQLTimestamp>;
    updatedAt?: Nullable<GraphQLTimestamp>;
    deletedAt?: Nullable<GraphQLTimestamp>;
}

export interface IQuery {
    appHealthFindApplicationDatabase(query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Nullable<AppHealthApplicationDatabase> | Promise<Nullable<AppHealthApplicationDatabase>>;
    appHealthFindApplicationDatabaseById(id?: Nullable<string>, constraint?: Nullable<QueryStatement>): Nullable<AppHealthApplicationDatabase> | Promise<Nullable<AppHealthApplicationDatabase>>;
    appHealthGetApplicationDatabases(query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Nullable<AppHealthApplicationDatabase>[] | Promise<Nullable<AppHealthApplicationDatabase>[]>;
    appHealthPaginateApplicationDatabases(query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Pagination | Promise<Pagination>;
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
    appHealthFindLanguage(query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Nullable<AppHealthLanguage> | Promise<Nullable<AppHealthLanguage>>;
    appHealthFindLanguageById(id?: Nullable<string>, constraint?: Nullable<QueryStatement>): Nullable<AppHealthLanguage> | Promise<Nullable<AppHealthLanguage>>;
    appHealthGetLanguages(query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Nullable<AppHealthLanguage>[] | Promise<Nullable<AppHealthLanguage>[]>;
    appHealthPaginateLanguages(query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Pagination | Promise<Pagination>;
    appHealthFindTechnicalSolution(query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Nullable<AppHealthTechnicalSolution> | Promise<Nullable<AppHealthTechnicalSolution>>;
    appHealthFindTechnicalSolutionById(id?: Nullable<string>, constraint?: Nullable<QueryStatement>): Nullable<AppHealthTechnicalSolution> | Promise<Nullable<AppHealthTechnicalSolution>>;
    appHealthGetTechnicalSolutions(query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Nullable<AppHealthTechnicalSolution>[] | Promise<Nullable<AppHealthTechnicalSolution>[]>;
    appHealthPaginateTechnicalSolutions(query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Pagination | Promise<Pagination>;
    coreGetLangs(): Nullable<CoreLang>[] | Promise<Nullable<CoreLang>[]>;
    coreGetFallbackLang(): Nullable<CoreLang> | Promise<Nullable<CoreLang>>;
    coreGetSearchKeyLang(): Nullable<CoreSearchKeyLang> | Promise<Nullable<CoreSearchKeyLang>>;
    hello(): Nullable<string> | Promise<Nullable<string>>;
}

export interface IMutation {
    appHealthCreateApplicationDatabase(payload: AppHealthCreateApplicationDatabaseInput): Nullable<AppHealthApplicationDatabase> | Promise<Nullable<AppHealthApplicationDatabase>>;
    appHealthCreateApplicationDatabases(payload: Nullable<AppHealthCreateApplicationDatabaseInput>[]): boolean | Promise<boolean>;
    appHealthUpdateApplicationDatabaseById(payload: AppHealthUpdateApplicationDatabaseByIdInput, constraint?: Nullable<QueryStatement>): Nullable<AppHealthApplicationDatabase> | Promise<Nullable<AppHealthApplicationDatabase>>;
    appHealthUpdateApplicationDatabases(payload: AppHealthUpdateApplicationDatabasesInput, query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Nullable<AppHealthApplicationDatabase>[] | Promise<Nullable<AppHealthApplicationDatabase>[]>;
    appHealthUpsertApplicationDatabase(payload: AppHealthUpdateApplicationDatabaseByIdInput): Nullable<AppHealthApplicationDatabase> | Promise<Nullable<AppHealthApplicationDatabase>>;
    appHealthDeleteApplicationDatabaseById(id: string, constraint?: Nullable<QueryStatement>): Nullable<AppHealthApplicationDatabase> | Promise<Nullable<AppHealthApplicationDatabase>>;
    appHealthDeleteApplicationDatabases(query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Nullable<AppHealthApplicationDatabase>[] | Promise<Nullable<AppHealthApplicationDatabase>[]>;
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
