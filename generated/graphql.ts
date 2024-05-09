import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type Evaluation = {
  __typename?: 'Evaluation';
  alerts?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  addAlertToEval?: Maybe<Evaluation>;
  dropAlertFromEval?: Maybe<Evaluation>;
};


export type MutationAddAlertToEvalArgs = {
  alert: Scalars['String']['input'];
  evaluationId: Scalars['ID']['input'];
};


export type MutationDropAlertFromEvalArgs = {
  alert: Scalars['String']['input'];
  evaluationId: Scalars['ID']['input'];
};

export type Query = {
  __typename?: 'Query';
  userById?: Maybe<User>;
  users?: Maybe<Array<Maybe<User>>>;
};


export type QueryUserByIdArgs = {
  id: Scalars['ID']['input'];
};

export type User = {
  __typename?: 'User';
  evaluations?: Maybe<Array<Maybe<Evaluation>>>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type GetUsersQueryVariables = Exact<{ [key: string]: never; }>;


export type GetUsersQuery = { __typename?: 'Query', users?: Array<{ __typename?: 'User', id?: string | null, evaluations?: Array<{ __typename?: 'Evaluation', id?: string | null, alerts?: Array<string | null> | null } | null> | null } | null> | null };

export type GetUserQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type GetUserQuery = { __typename?: 'Query', userById?: { __typename?: 'User', id?: string | null, evaluations?: Array<{ __typename?: 'Evaluation', id?: string | null, alerts?: Array<string | null> | null } | null> | null } | null };

export type AddAlertMutationVariables = Exact<{
  evaluationId: Scalars['ID']['input'];
  alert: Scalars['String']['input'];
}>;


export type AddAlertMutation = { __typename?: 'Mutation', addAlertToEval?: { __typename?: 'Evaluation', id?: string | null, alerts?: Array<string | null> | null } | null };

export type DropAlertMutationVariables = Exact<{
  evaluationId: Scalars['ID']['input'];
  alert: Scalars['String']['input'];
}>;


export type DropAlertMutation = { __typename?: 'Mutation', dropAlertFromEval?: { __typename?: 'Evaluation', id?: string | null, alerts?: Array<string | null> | null } | null };


export const GetUsersDocument = gql`
    query GetUsers {
  users {
    id
    evaluations {
      id
      alerts
    }
  }
}
    `;

/**
 * __useGetUsersQuery__
 *
 * To run a query within a React component, call `useGetUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUsersQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetUsersQuery(baseOptions?: Apollo.QueryHookOptions<GetUsersQuery, GetUsersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUsersQuery, GetUsersQueryVariables>(GetUsersDocument, options);
      }
export function useGetUsersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUsersQuery, GetUsersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUsersQuery, GetUsersQueryVariables>(GetUsersDocument, options);
        }
export function useGetUsersSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetUsersQuery, GetUsersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetUsersQuery, GetUsersQueryVariables>(GetUsersDocument, options);
        }
export type GetUsersQueryHookResult = ReturnType<typeof useGetUsersQuery>;
export type GetUsersLazyQueryHookResult = ReturnType<typeof useGetUsersLazyQuery>;
export type GetUsersSuspenseQueryHookResult = ReturnType<typeof useGetUsersSuspenseQuery>;
export type GetUsersQueryResult = Apollo.QueryResult<GetUsersQuery, GetUsersQueryVariables>;
export const GetUserDocument = gql`
    query GetUser($id: ID!) {
  userById(id: $id) {
    id
    evaluations {
      id
      alerts
    }
  }
}
    `;

/**
 * __useGetUserQuery__
 *
 * To run a query within a React component, call `useGetUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetUserQuery(baseOptions: Apollo.QueryHookOptions<GetUserQuery, GetUserQueryVariables> & ({ variables: GetUserQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUserQuery, GetUserQueryVariables>(GetUserDocument, options);
      }
export function useGetUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUserQuery, GetUserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUserQuery, GetUserQueryVariables>(GetUserDocument, options);
        }
export function useGetUserSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetUserQuery, GetUserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetUserQuery, GetUserQueryVariables>(GetUserDocument, options);
        }
export type GetUserQueryHookResult = ReturnType<typeof useGetUserQuery>;
export type GetUserLazyQueryHookResult = ReturnType<typeof useGetUserLazyQuery>;
export type GetUserSuspenseQueryHookResult = ReturnType<typeof useGetUserSuspenseQuery>;
export type GetUserQueryResult = Apollo.QueryResult<GetUserQuery, GetUserQueryVariables>;
export const AddAlertDocument = gql`
    mutation AddAlert($evaluationId: ID!, $alert: String!) {
  addAlertToEval(evaluationId: $evaluationId, alert: $alert) {
    id
    alerts
  }
}
    `;
export type AddAlertMutationFn = Apollo.MutationFunction<AddAlertMutation, AddAlertMutationVariables>;

/**
 * __useAddAlertMutation__
 *
 * To run a mutation, you first call `useAddAlertMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddAlertMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addAlertMutation, { data, loading, error }] = useAddAlertMutation({
 *   variables: {
 *      evaluationId: // value for 'evaluationId'
 *      alert: // value for 'alert'
 *   },
 * });
 */
export function useAddAlertMutation(baseOptions?: Apollo.MutationHookOptions<AddAlertMutation, AddAlertMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddAlertMutation, AddAlertMutationVariables>(AddAlertDocument, options);
      }
export type AddAlertMutationHookResult = ReturnType<typeof useAddAlertMutation>;
export type AddAlertMutationResult = Apollo.MutationResult<AddAlertMutation>;
export type AddAlertMutationOptions = Apollo.BaseMutationOptions<AddAlertMutation, AddAlertMutationVariables>;
export const DropAlertDocument = gql`
    mutation DropAlert($evaluationId: ID!, $alert: String!) {
  dropAlertFromEval(evaluationId: $evaluationId, alert: $alert) {
    id
    alerts
  }
}
    `;
export type DropAlertMutationFn = Apollo.MutationFunction<DropAlertMutation, DropAlertMutationVariables>;

/**
 * __useDropAlertMutation__
 *
 * To run a mutation, you first call `useDropAlertMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDropAlertMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [dropAlertMutation, { data, loading, error }] = useDropAlertMutation({
 *   variables: {
 *      evaluationId: // value for 'evaluationId'
 *      alert: // value for 'alert'
 *   },
 * });
 */
export function useDropAlertMutation(baseOptions?: Apollo.MutationHookOptions<DropAlertMutation, DropAlertMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DropAlertMutation, DropAlertMutationVariables>(DropAlertDocument, options);
      }
export type DropAlertMutationHookResult = ReturnType<typeof useDropAlertMutation>;
export type DropAlertMutationResult = Apollo.MutationResult<DropAlertMutation>;
export type DropAlertMutationOptions = Apollo.BaseMutationOptions<DropAlertMutation, DropAlertMutationVariables>;