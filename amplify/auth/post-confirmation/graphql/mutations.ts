/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "./API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createComment = /* GraphQL */ `mutation CreateComment(
  $condition: ModelCommentConditionInput
  $input: CreateCommentInput!
) {
  createComment(condition: $condition, input: $input) {
    by {
      createdAt
      id
      owner
      title
      updatedAt
      __typename
    }
    content
    createdAt
    id
    owner
    postId
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateCommentMutationVariables,
  APITypes.CreateCommentMutation
>;
export const createPost = /* GraphQL */ `mutation CreatePost(
  $condition: ModelPostConditionInput
  $input: CreatePostInput!
) {
  createPost(condition: $condition, input: $input) {
    comments {
      nextToken
      __typename
    }
    createdAt
    id
    owner
    title
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreatePostMutationVariables,
  APITypes.CreatePostMutation
>;
export const createRoom = /* GraphQL */ `mutation CreateRoom(
  $condition: ModelRoomConditionInput
  $input: CreateRoomInput!
) {
  createRoom(condition: $condition, input: $input) {
    createdAt
    id
    name
    owner
    updatedAt
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
export const deleteComment = /* GraphQL */ `mutation DeleteComment(
  $condition: ModelCommentConditionInput
  $input: DeleteCommentInput!
) {
  deleteComment(condition: $condition, input: $input) {
    by {
      createdAt
      id
      owner
      title
      updatedAt
      __typename
    }
    content
    createdAt
    id
    owner
    postId
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteCommentMutationVariables,
  APITypes.DeleteCommentMutation
>;
export const deletePost = /* GraphQL */ `mutation DeletePost(
  $condition: ModelPostConditionInput
  $input: DeletePostInput!
) {
  deletePost(condition: $condition, input: $input) {
    comments {
      nextToken
      __typename
    }
    createdAt
    id
    owner
    title
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeletePostMutationVariables,
  APITypes.DeletePostMutation
>;
export const deleteRoom = /* GraphQL */ `mutation DeleteRoom(
  $condition: ModelRoomConditionInput
  $input: DeleteRoomInput!
) {
  deleteRoom(condition: $condition, input: $input) {
    createdAt
    id
    name
    owner
    updatedAt
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
export const updateComment = /* GraphQL */ `mutation UpdateComment(
  $condition: ModelCommentConditionInput
  $input: UpdateCommentInput!
) {
  updateComment(condition: $condition, input: $input) {
    by {
      createdAt
      id
      owner
      title
      updatedAt
      __typename
    }
    content
    createdAt
    id
    owner
    postId
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateCommentMutationVariables,
  APITypes.UpdateCommentMutation
>;
export const updatePost = /* GraphQL */ `mutation UpdatePost(
  $condition: ModelPostConditionInput
  $input: UpdatePostInput!
) {
  updatePost(condition: $condition, input: $input) {
    comments {
      nextToken
      __typename
    }
    createdAt
    id
    owner
    title
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdatePostMutationVariables,
  APITypes.UpdatePostMutation
>;
export const updateRoom = /* GraphQL */ `mutation UpdateRoom(
  $condition: ModelRoomConditionInput
  $input: UpdateRoomInput!
) {
  updateRoom(condition: $condition, input: $input) {
    createdAt
    id
    name
    owner
    updatedAt
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
