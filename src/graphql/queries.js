/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getHistory = /* GraphQL */ `
  query GetHistory($id: ID!) {
    getHistory(id: $id) {
      id
      type
      date
      description
      image_url
      createdAt
      updatedAt
    }
  }
`;
export const listHistorys = /* GraphQL */ `
  query ListHistorys(
    $filter: ModelHistoryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listHistorys(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        type
        date
        description
        image_url
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const historyByDate = /* GraphQL */ `
  query HistoryByDate(
    $type: String
    $date: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelHistoryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    historyByDate(
      type: $type
      date: $date
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        type
        date
        description
        image_url
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
