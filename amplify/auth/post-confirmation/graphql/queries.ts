/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "./API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getChannel = /* GraphQL */ `query GetChannel($id: ID!) {
  getChannel(id: $id) {
    createdAt
    id
    name
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetChannelQueryVariables,
  APITypes.GetChannelQuery
>;
export const getChatMessage = /* GraphQL */ `query GetChatMessage($id: ID!) {
  getChatMessage(id: $id) {
    content
    createdAt
    files
    id
    identifier
    receiver
    relationshipId
    relationshipSource {
      createdAt
      id
      status
      updatedAt
      user1_id
      user2_id
      __typename
    }
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetChatMessageQueryVariables,
  APITypes.GetChatMessageQuery
>;
export const getNotificationCenter = /* GraphQL */ `query GetNotificationCenter($id: ID!) {
  getNotificationCenter(id: $id) {
    belongsTo {
      avatar
      createdAt
      email
      fullname
      id
      title
      updatedAt
      username
      __typename
    }
    createdAt
    from
    id
    idSource
    status
    table
    target
    type
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetNotificationCenterQueryVariables,
  APITypes.GetNotificationCenterQuery
>;
export const getRoom = /* GraphQL */ `query GetRoom($id: ID!) {
  getRoom(id: $id) {
    background
    createdAt
    description
    id
    name
    owner
    updatedAt
    users {
      nextToken
      __typename
    }
    __typename
  }
}
` as GeneratedQuery<APITypes.GetRoomQueryVariables, APITypes.GetRoomQuery>;
export const getUser = /* GraphQL */ `query GetUser($id: ID!) {
  getUser(id: $id) {
    avatar
    createdAt
    email
    fullname
    id
    notifications {
      nextToken
      __typename
    }
    relationship1 {
      nextToken
      __typename
    }
    relationship2 {
      nextToken
      __typename
    }
    rooms {
      nextToken
      __typename
    }
    title
    updatedAt
    username
    __typename
  }
}
` as GeneratedQuery<APITypes.GetUserQueryVariables, APITypes.GetUserQuery>;
export const getUserRelationships = /* GraphQL */ `query GetUserRelationships($id: ID!) {
  getUserRelationships(id: $id) {
    createdAt
    id
    messages {
      nextToken
      __typename
    }
    status
    updatedAt
    user1 {
      avatar
      createdAt
      email
      fullname
      id
      title
      updatedAt
      username
      __typename
    }
    user1_id
    user2 {
      avatar
      createdAt
      email
      fullname
      id
      title
      updatedAt
      username
      __typename
    }
    user2_id
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetUserRelationshipsQueryVariables,
  APITypes.GetUserRelationshipsQuery
>;
export const getUserRoom = /* GraphQL */ `query GetUserRoom($id: ID!) {
  getUserRoom(id: $id) {
    createdAt
    id
    room {
      background
      createdAt
      description
      id
      name
      owner
      updatedAt
      __typename
    }
    roomId
    updatedAt
    user {
      avatar
      createdAt
      email
      fullname
      id
      title
      updatedAt
      username
      __typename
    }
    userId
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetUserRoomQueryVariables,
  APITypes.GetUserRoomQuery
>;
export const listChannels = /* GraphQL */ `query ListChannels(
  $filter: ModelChannelFilterInput
  $limit: Int
  $nextToken: String
) {
  listChannels(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      createdAt
      id
      name
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListChannelsQueryVariables,
  APITypes.ListChannelsQuery
>;
export const listChatMessageByRelationshipIdAndCreatedAt = /* GraphQL */ `query ListChatMessageByRelationshipIdAndCreatedAt(
  $createdAt: ModelStringKeyConditionInput
  $filter: ModelChatMessageFilterInput
  $limit: Int
  $nextToken: String
  $relationshipId: ID!
  $sortDirection: ModelSortDirection
) {
  listChatMessageByRelationshipIdAndCreatedAt(
    createdAt: $createdAt
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    relationshipId: $relationshipId
    sortDirection: $sortDirection
  ) {
    items {
      content
      createdAt
      files
      id
      identifier
      receiver
      relationshipId
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListChatMessageByRelationshipIdAndCreatedAtQueryVariables,
  APITypes.ListChatMessageByRelationshipIdAndCreatedAtQuery
>;
export const listChatMessages = /* GraphQL */ `query ListChatMessages(
  $filter: ModelChatMessageFilterInput
  $limit: Int
  $nextToken: String
) {
  listChatMessages(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      content
      createdAt
      files
      id
      identifier
      receiver
      relationshipId
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListChatMessagesQueryVariables,
  APITypes.ListChatMessagesQuery
>;
export const listNotificationCenterByTarget = /* GraphQL */ `query ListNotificationCenterByTarget(
  $filter: ModelNotificationCenterFilterInput
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
  $target: String!
) {
  listNotificationCenterByTarget(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
    target: $target
  ) {
    items {
      createdAt
      from
      id
      idSource
      status
      table
      target
      type
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListNotificationCenterByTargetQueryVariables,
  APITypes.ListNotificationCenterByTargetQuery
>;
export const listNotificationCenters = /* GraphQL */ `query ListNotificationCenters(
  $filter: ModelNotificationCenterFilterInput
  $limit: Int
  $nextToken: String
) {
  listNotificationCenters(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      createdAt
      from
      id
      idSource
      status
      table
      target
      type
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListNotificationCentersQueryVariables,
  APITypes.ListNotificationCentersQuery
>;
export const listRooms = /* GraphQL */ `query ListRooms(
  $filter: ModelRoomFilterInput
  $limit: Int
  $nextToken: String
) {
  listRooms(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      background
      createdAt
      description
      id
      name
      owner
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<APITypes.ListRoomsQueryVariables, APITypes.ListRoomsQuery>;
export const listUserByEmail = /* GraphQL */ `query ListUserByEmail(
  $email: String!
  $filter: ModelUserFilterInput
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listUserByEmail(
    email: $email
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
      avatar
      createdAt
      email
      fullname
      id
      title
      updatedAt
      username
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListUserByEmailQueryVariables,
  APITypes.ListUserByEmailQuery
>;
export const listUserByUsername = /* GraphQL */ `query ListUserByUsername(
  $filter: ModelUserFilterInput
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
  $username: String!
) {
  listUserByUsername(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
    username: $username
  ) {
    items {
      avatar
      createdAt
      email
      fullname
      id
      title
      updatedAt
      username
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListUserByUsernameQueryVariables,
  APITypes.ListUserByUsernameQuery
>;
export const listUserRelationships = /* GraphQL */ `query ListUserRelationships(
  $filter: ModelUserRelationshipsFilterInput
  $limit: Int
  $nextToken: String
) {
  listUserRelationships(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      createdAt
      id
      status
      updatedAt
      user1_id
      user2_id
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListUserRelationshipsQueryVariables,
  APITypes.ListUserRelationshipsQuery
>;
export const listUserRelationshipsByUser1_id = /* GraphQL */ `query ListUserRelationshipsByUser1_id(
  $filter: ModelUserRelationshipsFilterInput
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
  $user1_id: ID!
) {
  listUserRelationshipsByUser1_id(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
    user1_id: $user1_id
  ) {
    items {
      createdAt
      id
      status
      updatedAt
      user1_id
      user2_id
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListUserRelationshipsByUser1_idQueryVariables,
  APITypes.ListUserRelationshipsByUser1_idQuery
>;
export const listUserRelationshipsByUser2_id = /* GraphQL */ `query ListUserRelationshipsByUser2_id(
  $filter: ModelUserRelationshipsFilterInput
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
  $user2_id: ID!
) {
  listUserRelationshipsByUser2_id(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
    user2_id: $user2_id
  ) {
    items {
      createdAt
      id
      status
      updatedAt
      user1_id
      user2_id
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListUserRelationshipsByUser2_idQueryVariables,
  APITypes.ListUserRelationshipsByUser2_idQuery
>;
export const listUserRooms = /* GraphQL */ `query ListUserRooms(
  $filter: ModelUserRoomFilterInput
  $limit: Int
  $nextToken: String
) {
  listUserRooms(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      createdAt
      id
      roomId
      updatedAt
      userId
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListUserRoomsQueryVariables,
  APITypes.ListUserRoomsQuery
>;
export const listUsers = /* GraphQL */ `query ListUsers(
  $filter: ModelUserFilterInput
  $limit: Int
  $nextToken: String
) {
  listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      avatar
      createdAt
      email
      fullname
      id
      title
      updatedAt
      username
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<APITypes.ListUsersQueryVariables, APITypes.ListUsersQuery>;
