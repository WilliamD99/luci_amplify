/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "./API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateChannel = /* GraphQL */ `subscription OnCreateChannel($filter: ModelSubscriptionChannelFilterInput) {
  onCreateChannel(filter: $filter) {
    createdAt
    id
    name
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateChannelSubscriptionVariables,
  APITypes.OnCreateChannelSubscription
>;
export const onCreateChatMessage = /* GraphQL */ `subscription OnCreateChatMessage(
  $filter: ModelSubscriptionChatMessageFilterInput
  $identifier: String
  $receiver: String
) {
  onCreateChatMessage(
    filter: $filter
    identifier: $identifier
    receiver: $receiver
  ) {
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
` as GeneratedSubscription<
  APITypes.OnCreateChatMessageSubscriptionVariables,
  APITypes.OnCreateChatMessageSubscription
>;
export const onCreateNotificationCenter = /* GraphQL */ `subscription OnCreateNotificationCenter(
  $filter: ModelSubscriptionNotificationCenterFilterInput
  $target: String
) {
  onCreateNotificationCenter(filter: $filter, target: $target) {
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
` as GeneratedSubscription<
  APITypes.OnCreateNotificationCenterSubscriptionVariables,
  APITypes.OnCreateNotificationCenterSubscription
>;
export const onCreateRoom = /* GraphQL */ `subscription OnCreateRoom(
  $filter: ModelSubscriptionRoomFilterInput
  $owner: String
) {
  onCreateRoom(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnCreateRoomSubscriptionVariables,
  APITypes.OnCreateRoomSubscription
>;
export const onCreateUser = /* GraphQL */ `subscription OnCreateUser(
  $filter: ModelSubscriptionUserFilterInput
  $id: String
) {
  onCreateUser(filter: $filter, id: $id) {
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
` as GeneratedSubscription<
  APITypes.OnCreateUserSubscriptionVariables,
  APITypes.OnCreateUserSubscription
>;
export const onCreateUserRelationships = /* GraphQL */ `subscription OnCreateUserRelationships(
  $filter: ModelSubscriptionUserRelationshipsFilterInput
) {
  onCreateUserRelationships(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateUserRelationshipsSubscriptionVariables,
  APITypes.OnCreateUserRelationshipsSubscription
>;
export const onCreateUserRoom = /* GraphQL */ `subscription OnCreateUserRoom($filter: ModelSubscriptionUserRoomFilterInput) {
  onCreateUserRoom(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateUserRoomSubscriptionVariables,
  APITypes.OnCreateUserRoomSubscription
>;
export const onDeleteChannel = /* GraphQL */ `subscription OnDeleteChannel($filter: ModelSubscriptionChannelFilterInput) {
  onDeleteChannel(filter: $filter) {
    createdAt
    id
    name
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteChannelSubscriptionVariables,
  APITypes.OnDeleteChannelSubscription
>;
export const onDeleteChatMessage = /* GraphQL */ `subscription OnDeleteChatMessage(
  $filter: ModelSubscriptionChatMessageFilterInput
  $identifier: String
  $receiver: String
) {
  onDeleteChatMessage(
    filter: $filter
    identifier: $identifier
    receiver: $receiver
  ) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteChatMessageSubscriptionVariables,
  APITypes.OnDeleteChatMessageSubscription
>;
export const onDeleteNotificationCenter = /* GraphQL */ `subscription OnDeleteNotificationCenter(
  $filter: ModelSubscriptionNotificationCenterFilterInput
  $target: String
) {
  onDeleteNotificationCenter(filter: $filter, target: $target) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteNotificationCenterSubscriptionVariables,
  APITypes.OnDeleteNotificationCenterSubscription
>;
export const onDeleteRoom = /* GraphQL */ `subscription OnDeleteRoom(
  $filter: ModelSubscriptionRoomFilterInput
  $owner: String
) {
  onDeleteRoom(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteRoomSubscriptionVariables,
  APITypes.OnDeleteRoomSubscription
>;
export const onDeleteUser = /* GraphQL */ `subscription OnDeleteUser(
  $filter: ModelSubscriptionUserFilterInput
  $id: String
) {
  onDeleteUser(filter: $filter, id: $id) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteUserSubscriptionVariables,
  APITypes.OnDeleteUserSubscription
>;
export const onDeleteUserRelationships = /* GraphQL */ `subscription OnDeleteUserRelationships(
  $filter: ModelSubscriptionUserRelationshipsFilterInput
) {
  onDeleteUserRelationships(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteUserRelationshipsSubscriptionVariables,
  APITypes.OnDeleteUserRelationshipsSubscription
>;
export const onDeleteUserRoom = /* GraphQL */ `subscription OnDeleteUserRoom($filter: ModelSubscriptionUserRoomFilterInput) {
  onDeleteUserRoom(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteUserRoomSubscriptionVariables,
  APITypes.OnDeleteUserRoomSubscription
>;
export const onUpdateChannel = /* GraphQL */ `subscription OnUpdateChannel($filter: ModelSubscriptionChannelFilterInput) {
  onUpdateChannel(filter: $filter) {
    createdAt
    id
    name
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateChannelSubscriptionVariables,
  APITypes.OnUpdateChannelSubscription
>;
export const onUpdateChatMessage = /* GraphQL */ `subscription OnUpdateChatMessage(
  $filter: ModelSubscriptionChatMessageFilterInput
  $identifier: String
  $receiver: String
) {
  onUpdateChatMessage(
    filter: $filter
    identifier: $identifier
    receiver: $receiver
  ) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateChatMessageSubscriptionVariables,
  APITypes.OnUpdateChatMessageSubscription
>;
export const onUpdateNotificationCenter = /* GraphQL */ `subscription OnUpdateNotificationCenter(
  $filter: ModelSubscriptionNotificationCenterFilterInput
  $target: String
) {
  onUpdateNotificationCenter(filter: $filter, target: $target) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateNotificationCenterSubscriptionVariables,
  APITypes.OnUpdateNotificationCenterSubscription
>;
export const onUpdateRoom = /* GraphQL */ `subscription OnUpdateRoom(
  $filter: ModelSubscriptionRoomFilterInput
  $owner: String
) {
  onUpdateRoom(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateRoomSubscriptionVariables,
  APITypes.OnUpdateRoomSubscription
>;
export const onUpdateUser = /* GraphQL */ `subscription OnUpdateUser(
  $filter: ModelSubscriptionUserFilterInput
  $id: String
) {
  onUpdateUser(filter: $filter, id: $id) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateUserSubscriptionVariables,
  APITypes.OnUpdateUserSubscription
>;
export const onUpdateUserRelationships = /* GraphQL */ `subscription OnUpdateUserRelationships(
  $filter: ModelSubscriptionUserRelationshipsFilterInput
) {
  onUpdateUserRelationships(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateUserRelationshipsSubscriptionVariables,
  APITypes.OnUpdateUserRelationshipsSubscription
>;
export const onUpdateUserRoom = /* GraphQL */ `subscription OnUpdateUserRoom($filter: ModelSubscriptionUserRoomFilterInput) {
  onUpdateUserRoom(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateUserRoomSubscriptionVariables,
  APITypes.OnUpdateUserRoomSubscription
>;
export const receive = /* GraphQL */ `subscription Receive($identifier: String, $receiver: String) {
  receive(identifier: $identifier, receiver: $receiver) {
    content
    files
    identifier
    receiver
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.ReceiveSubscriptionVariables,
  APITypes.ReceiveSubscription
>;
