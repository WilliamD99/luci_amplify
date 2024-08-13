/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "./API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createChannel = /* GraphQL */ `mutation CreateChannel(
  $condition: ModelChannelConditionInput
  $input: CreateChannelInput!
) {
  createChannel(condition: $condition, input: $input) {
    createdAt
    id
    name
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateChannelMutationVariables,
  APITypes.CreateChannelMutation
>;
export const createChatMessage = /* GraphQL */ `mutation CreateChatMessage(
  $condition: ModelChatMessageConditionInput
  $input: CreateChatMessageInput!
) {
  createChatMessage(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.CreateChatMessageMutationVariables,
  APITypes.CreateChatMessageMutation
>;
export const createNotificationCenter = /* GraphQL */ `mutation CreateNotificationCenter(
  $condition: ModelNotificationCenterConditionInput
  $input: CreateNotificationCenterInput!
) {
  createNotificationCenter(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.CreateNotificationCenterMutationVariables,
  APITypes.CreateNotificationCenterMutation
>;
export const createRoom = /* GraphQL */ `mutation CreateRoom(
  $condition: ModelRoomConditionInput
  $input: CreateRoomInput!
) {
  createRoom(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.CreateRoomMutationVariables,
  APITypes.CreateRoomMutation
>;
export const createUser = /* GraphQL */ `mutation CreateUser(
  $condition: ModelUserConditionInput
  $input: CreateUserInput!
) {
  createUser(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.CreateUserMutationVariables,
  APITypes.CreateUserMutation
>;
export const createUserRelationships = /* GraphQL */ `mutation CreateUserRelationships(
  $condition: ModelUserRelationshipsConditionInput
  $input: CreateUserRelationshipsInput!
) {
  createUserRelationships(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.CreateUserRelationshipsMutationVariables,
  APITypes.CreateUserRelationshipsMutation
>;
export const createUserRoom = /* GraphQL */ `mutation CreateUserRoom(
  $condition: ModelUserRoomConditionInput
  $input: CreateUserRoomInput!
) {
  createUserRoom(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.CreateUserRoomMutationVariables,
  APITypes.CreateUserRoomMutation
>;
export const deleteChannel = /* GraphQL */ `mutation DeleteChannel(
  $condition: ModelChannelConditionInput
  $input: DeleteChannelInput!
) {
  deleteChannel(condition: $condition, input: $input) {
    createdAt
    id
    name
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteChannelMutationVariables,
  APITypes.DeleteChannelMutation
>;
export const deleteChatMessage = /* GraphQL */ `mutation DeleteChatMessage(
  $condition: ModelChatMessageConditionInput
  $input: DeleteChatMessageInput!
) {
  deleteChatMessage(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.DeleteChatMessageMutationVariables,
  APITypes.DeleteChatMessageMutation
>;
export const deleteNotificationCenter = /* GraphQL */ `mutation DeleteNotificationCenter(
  $condition: ModelNotificationCenterConditionInput
  $input: DeleteNotificationCenterInput!
) {
  deleteNotificationCenter(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.DeleteNotificationCenterMutationVariables,
  APITypes.DeleteNotificationCenterMutation
>;
export const deleteRoom = /* GraphQL */ `mutation DeleteRoom(
  $condition: ModelRoomConditionInput
  $input: DeleteRoomInput!
) {
  deleteRoom(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.DeleteRoomMutationVariables,
  APITypes.DeleteRoomMutation
>;
export const deleteUser = /* GraphQL */ `mutation DeleteUser(
  $condition: ModelUserConditionInput
  $input: DeleteUserInput!
) {
  deleteUser(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.DeleteUserMutationVariables,
  APITypes.DeleteUserMutation
>;
export const deleteUserRelationships = /* GraphQL */ `mutation DeleteUserRelationships(
  $condition: ModelUserRelationshipsConditionInput
  $input: DeleteUserRelationshipsInput!
) {
  deleteUserRelationships(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.DeleteUserRelationshipsMutationVariables,
  APITypes.DeleteUserRelationshipsMutation
>;
export const deleteUserRoom = /* GraphQL */ `mutation DeleteUserRoom(
  $condition: ModelUserRoomConditionInput
  $input: DeleteUserRoomInput!
) {
  deleteUserRoom(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.DeleteUserRoomMutationVariables,
  APITypes.DeleteUserRoomMutation
>;
export const publish = /* GraphQL */ `mutation Publish(
  $content: String!
  $files: String
  $identifier: String!
  $receiver: String!
) {
  publish(
    content: $content
    files: $files
    identifier: $identifier
    receiver: $receiver
  ) {
    content
    files
    identifier
    receiver
    __typename
  }
}
` as GeneratedMutation<
  APITypes.PublishMutationVariables,
  APITypes.PublishMutation
>;
export const updateChannel = /* GraphQL */ `mutation UpdateChannel(
  $condition: ModelChannelConditionInput
  $input: UpdateChannelInput!
) {
  updateChannel(condition: $condition, input: $input) {
    createdAt
    id
    name
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateChannelMutationVariables,
  APITypes.UpdateChannelMutation
>;
export const updateChatMessage = /* GraphQL */ `mutation UpdateChatMessage(
  $condition: ModelChatMessageConditionInput
  $input: UpdateChatMessageInput!
) {
  updateChatMessage(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.UpdateChatMessageMutationVariables,
  APITypes.UpdateChatMessageMutation
>;
export const updateNotificationCenter = /* GraphQL */ `mutation UpdateNotificationCenter(
  $condition: ModelNotificationCenterConditionInput
  $input: UpdateNotificationCenterInput!
) {
  updateNotificationCenter(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.UpdateNotificationCenterMutationVariables,
  APITypes.UpdateNotificationCenterMutation
>;
export const updateRoom = /* GraphQL */ `mutation UpdateRoom(
  $condition: ModelRoomConditionInput
  $input: UpdateRoomInput!
) {
  updateRoom(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.UpdateRoomMutationVariables,
  APITypes.UpdateRoomMutation
>;
export const updateUser = /* GraphQL */ `mutation UpdateUser(
  $condition: ModelUserConditionInput
  $input: UpdateUserInput!
) {
  updateUser(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.UpdateUserMutationVariables,
  APITypes.UpdateUserMutation
>;
export const updateUserRelationships = /* GraphQL */ `mutation UpdateUserRelationships(
  $condition: ModelUserRelationshipsConditionInput
  $input: UpdateUserRelationshipsInput!
) {
  updateUserRelationships(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.UpdateUserRelationshipsMutationVariables,
  APITypes.UpdateUserRelationshipsMutation
>;
export const updateUserRoom = /* GraphQL */ `mutation UpdateUserRoom(
  $condition: ModelUserRoomConditionInput
  $input: UpdateUserRoomInput!
) {
  updateUserRoom(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.UpdateUserRoomMutationVariables,
  APITypes.UpdateUserRoomMutation
>;
