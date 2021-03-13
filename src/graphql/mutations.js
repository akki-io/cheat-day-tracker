/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createHistory = /* GraphQL */ `
  mutation CreateHistory(
    $input: CreateHistoryInput!
    $condition: ModelHistoryConditionInput
  ) {
    createHistory(input: $input, condition: $condition) {
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
export const updateHistory = /* GraphQL */ `
  mutation UpdateHistory(
    $input: UpdateHistoryInput!
    $condition: ModelHistoryConditionInput
  ) {
    updateHistory(input: $input, condition: $condition) {
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
export const deleteHistory = /* GraphQL */ `
  mutation DeleteHistory(
    $input: DeleteHistoryInput!
    $condition: ModelHistoryConditionInput
  ) {
    deleteHistory(input: $input, condition: $condition) {
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
