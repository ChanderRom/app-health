import gql from 'graphql-tag';

export const fields = `
    technicalSolutionId
    name
    description
    businessImpact
    type
    releaseDate
    architectureDiagram
    hasTenants
    hasLicensing
    costLicensesPerYear
    requestsPerDay
    createdAt
    updatedAt
`;

export const relationsFields = `
`;

// default methods
export const paginationQuery = gql`
    query AppHealthPaginateApllications (
        $query: QueryStatement
        $constraint: QueryStatement
    ) {
        pagination: appHealthPaginateApllications (
            query: $query
            constraint: $constraint
        ) {
            total
            rows
            count
        }
    }
`;

export const getQuery = gql`
    query AppHealthGetApllications (
        $query: QueryStatement
        $constraint: QueryStatement
    ) {
        objects: appHealthGetApllications (
            query: $query
            constraint: $constraint
        ) {
            id
            #FIELDS
        }
    }
`;

export const findByIdQuery = gql`
    query AppHealthFindApplicationById (
        $id: ID
        $constraint: QueryStatement
    ) {
        object: appHealthFindApplicationById (
            id: $id
            constraint: $constraint
        ) {
            id
            #FIELDS
        }
    }
`;

export const findQuery = gql`
    query AppHealthFindApplication (
        $query: QueryStatement
        $constraint: QueryStatement
    ) {
        object: appHealthFindApplication (
            query: $query
            constraint: $constraint
        ) {
            id
            #FIELDS
        }
    }
`;

export const createMutation = gql`
    mutation AppHealthCreateApplication (
        $payload: AppHealthCreateApplicationInput!
    ) {
        appHealthCreateApplication (
            payload: $payload
        ) {
            ${fields}
        }
    }
`;

export const updateByIdMutation = gql`
    mutation AppHealthUpdateApplicationById (
        $payload: AppHealthUpdateApplicationByIdInput!
        $constraint: QueryStatement
    ) {
        appHealthUpdateApplicationById (
            payload: $payload
            constraint: $constraint
        ) {
            ${fields}
        }
    }
`;

export const updateMutation = gql`
    mutation AppHealthUpdateApllications (
        $payload: AppHealthUpdateApllicationsInput!
        $query: QueryStatement
        $constraint: QueryStatement
    ) {
        appHealthUpdateApllications (
            payload: $payload
            query: $query
            constraint: $constraint
        ) {
            ${fields}
        }
    }
`;

export const deleteByIdMutation = gql`
    mutation AppHealthDeleteApplicationById (
        $id: ID!
        $constraint: QueryStatement
    ) {
        appHealthDeleteApplicationById (
            id: $id
            constraint: $constraint
        ) {
            ${fields}
        }
    }
`;

export const deleteMutation = gql`
    mutation AppHealthDeleteApllications (
        $query: QueryStatement
        $constraint: QueryStatement
    ) {
        appHealthDeleteApllications (
            query: $query
            constraint: $constraint
        ) {
            ${fields}
        }
    }
`;
