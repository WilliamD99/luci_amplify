/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type Comment = {
  __typename: "Comment",
  by?: Post | null,
  content: string,
  createdAt: string,
  id: string,
  owner?: string | null,
  postId?: string | null,
  updatedAt: string,
};

export type Post = {
  __typename: "Post",
  comments?: ModelCommentConnection | null,
  createdAt: string,
  id: string,
  owner?: string | null,
  title: string,
  updatedAt: string,
};

export type ModelCommentConnection = {
  __typename: "ModelCommentConnection",
  items:  Array<Comment | null >,
  nextToken?: string | null,
};

export type Room = {
  __typename: "Room",
  createdAt: string,
  id: string,
  name: string,
  owner?: string | null,
  updatedAt: string,
};

export type User = {
  __typename: "User",
  avatar?: string | null,
  createdAt?: string | null,
  email: string,
  fullname?: string | null,
  id: string,
  title?: string | null,
  updatedAt?: string | null,
  username?: string | null,
};

export type ModelCommentFilterInput = {
  and?: Array< ModelCommentFilterInput | null > | null,
  content?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  id?: ModelIDInput | null,
  not?: ModelCommentFilterInput | null,
  or?: Array< ModelCommentFilterInput | null > | null,
  owner?: ModelStringInput | null,
  postId?: ModelIDInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelStringInput = {
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  beginsWith?: string | null,
  between?: Array< string | null > | null,
  contains?: string | null,
  eq?: string | null,
  ge?: string | null,
  gt?: string | null,
  le?: string | null,
  lt?: string | null,
  ne?: string | null,
  notContains?: string | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  _null = "_null",
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
}


export type ModelSizeInput = {
  between?: Array< number | null > | null,
  eq?: number | null,
  ge?: number | null,
  gt?: number | null,
  le?: number | null,
  lt?: number | null,
  ne?: number | null,
};

export type ModelIDInput = {
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  beginsWith?: string | null,
  between?: Array< string | null > | null,
  contains?: string | null,
  eq?: string | null,
  ge?: string | null,
  gt?: string | null,
  le?: string | null,
  lt?: string | null,
  ne?: string | null,
  notContains?: string | null,
  size?: ModelSizeInput | null,
};

export type ModelPostFilterInput = {
  and?: Array< ModelPostFilterInput | null > | null,
  createdAt?: ModelStringInput | null,
  id?: ModelIDInput | null,
  not?: ModelPostFilterInput | null,
  or?: Array< ModelPostFilterInput | null > | null,
  owner?: ModelStringInput | null,
  title?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelPostConnection = {
  __typename: "ModelPostConnection",
  items:  Array<Post | null >,
  nextToken?: string | null,
};

export type ModelRoomFilterInput = {
  and?: Array< ModelRoomFilterInput | null > | null,
  createdAt?: ModelStringInput | null,
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  not?: ModelRoomFilterInput | null,
  or?: Array< ModelRoomFilterInput | null > | null,
  owner?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelRoomConnection = {
  __typename: "ModelRoomConnection",
  items:  Array<Room | null >,
  nextToken?: string | null,
};

export type ModelUserFilterInput = {
  and?: Array< ModelUserFilterInput | null > | null,
  avatar?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  email?: ModelStringInput | null,
  fullname?: ModelStringInput | null,
  id?: ModelIDInput | null,
  not?: ModelUserFilterInput | null,
  or?: Array< ModelUserFilterInput | null > | null,
  title?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  username?: ModelStringInput | null,
};

export type ModelUserConnection = {
  __typename: "ModelUserConnection",
  items:  Array<User | null >,
  nextToken?: string | null,
};

export type ModelCommentConditionInput = {
  and?: Array< ModelCommentConditionInput | null > | null,
  content?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  not?: ModelCommentConditionInput | null,
  or?: Array< ModelCommentConditionInput | null > | null,
  owner?: ModelStringInput | null,
  postId?: ModelIDInput | null,
  updatedAt?: ModelStringInput | null,
};

export type CreateCommentInput = {
  content: string,
  id?: string | null,
  postId?: string | null,
};

export type ModelPostConditionInput = {
  and?: Array< ModelPostConditionInput | null > | null,
  createdAt?: ModelStringInput | null,
  not?: ModelPostConditionInput | null,
  or?: Array< ModelPostConditionInput | null > | null,
  owner?: ModelStringInput | null,
  title?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type CreatePostInput = {
  id?: string | null,
  title: string,
};

export type ModelRoomConditionInput = {
  and?: Array< ModelRoomConditionInput | null > | null,
  createdAt?: ModelStringInput | null,
  name?: ModelStringInput | null,
  not?: ModelRoomConditionInput | null,
  or?: Array< ModelRoomConditionInput | null > | null,
  owner?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type CreateRoomInput = {
  id?: string | null,
  name: string,
};

export type ModelUserConditionInput = {
  and?: Array< ModelUserConditionInput | null > | null,
  avatar?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  email?: ModelStringInput | null,
  fullname?: ModelStringInput | null,
  id?: ModelStringInput | null,
  not?: ModelUserConditionInput | null,
  or?: Array< ModelUserConditionInput | null > | null,
  title?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  username?: ModelStringInput | null,
};

export type CreateUserInput = {
  avatar?: string | null,
  createdAt?: string | null,
  email: string,
  fullname?: string | null,
  id?: string | null,
  title?: string | null,
  updatedAt?: string | null,
  username?: string | null,
};

export type DeleteCommentInput = {
  id: string,
};

export type DeletePostInput = {
  id: string,
};

export type DeleteRoomInput = {
  id: string,
};

export type DeleteUserInput = {
  id: string,
};

export type UpdateCommentInput = {
  content?: string | null,
  id: string,
  postId?: string | null,
};

export type UpdatePostInput = {
  id: string,
  title?: string | null,
};

export type UpdateRoomInput = {
  id: string,
  name?: string | null,
};

export type UpdateUserInput = {
  avatar?: string | null,
  createdAt?: string | null,
  email?: string | null,
  fullname?: string | null,
  id: string,
  title?: string | null,
  updatedAt?: string | null,
  username?: string | null,
};

export type ModelSubscriptionCommentFilterInput = {
  and?: Array< ModelSubscriptionCommentFilterInput | null > | null,
  content?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  id?: ModelSubscriptionIDInput | null,
  or?: Array< ModelSubscriptionCommentFilterInput | null > | null,
  owner?: ModelStringInput | null,
  postId?: ModelSubscriptionIDInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
};

export type ModelSubscriptionStringInput = {
  beginsWith?: string | null,
  between?: Array< string | null > | null,
  contains?: string | null,
  eq?: string | null,
  ge?: string | null,
  gt?: string | null,
  in?: Array< string | null > | null,
  le?: string | null,
  lt?: string | null,
  ne?: string | null,
  notContains?: string | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionIDInput = {
  beginsWith?: string | null,
  between?: Array< string | null > | null,
  contains?: string | null,
  eq?: string | null,
  ge?: string | null,
  gt?: string | null,
  in?: Array< string | null > | null,
  le?: string | null,
  lt?: string | null,
  ne?: string | null,
  notContains?: string | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionPostFilterInput = {
  and?: Array< ModelSubscriptionPostFilterInput | null > | null,
  createdAt?: ModelSubscriptionStringInput | null,
  id?: ModelSubscriptionIDInput | null,
  or?: Array< ModelSubscriptionPostFilterInput | null > | null,
  owner?: ModelStringInput | null,
  title?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
};

export type ModelSubscriptionRoomFilterInput = {
  and?: Array< ModelSubscriptionRoomFilterInput | null > | null,
  createdAt?: ModelSubscriptionStringInput | null,
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  or?: Array< ModelSubscriptionRoomFilterInput | null > | null,
  owner?: ModelStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
};

export type ModelSubscriptionUserFilterInput = {
  and?: Array< ModelSubscriptionUserFilterInput | null > | null,
  avatar?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  email?: ModelSubscriptionStringInput | null,
  fullname?: ModelSubscriptionStringInput | null,
  id?: ModelStringInput | null,
  or?: Array< ModelSubscriptionUserFilterInput | null > | null,
  title?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  username?: ModelSubscriptionStringInput | null,
};

export type GetCommentQueryVariables = {
  id: string,
};

export type GetCommentQuery = {
  getComment?:  {
    __typename: "Comment",
    by?:  {
      __typename: "Post",
      createdAt: string,
      id: string,
      owner?: string | null,
      title: string,
      updatedAt: string,
    } | null,
    content: string,
    createdAt: string,
    id: string,
    owner?: string | null,
    postId?: string | null,
    updatedAt: string,
  } | null,
};

export type GetPostQueryVariables = {
  id: string,
};

export type GetPostQuery = {
  getPost?:  {
    __typename: "Post",
    comments?:  {
      __typename: "ModelCommentConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    id: string,
    owner?: string | null,
    title: string,
    updatedAt: string,
  } | null,
};

export type GetRoomQueryVariables = {
  id: string,
};

export type GetRoomQuery = {
  getRoom?:  {
    __typename: "Room",
    createdAt: string,
    id: string,
    name: string,
    owner?: string | null,
    updatedAt: string,
  } | null,
};

export type GetUserQueryVariables = {
  id: string,
};

export type GetUserQuery = {
  getUser?:  {
    __typename: "User",
    avatar?: string | null,
    createdAt?: string | null,
    email: string,
    fullname?: string | null,
    id: string,
    title?: string | null,
    updatedAt?: string | null,
    username?: string | null,
  } | null,
};

export type ListCommentsQueryVariables = {
  filter?: ModelCommentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCommentsQuery = {
  listComments?:  {
    __typename: "ModelCommentConnection",
    items:  Array< {
      __typename: "Comment",
      content: string,
      createdAt: string,
      id: string,
      owner?: string | null,
      postId?: string | null,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListPostsQueryVariables = {
  filter?: ModelPostFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPostsQuery = {
  listPosts?:  {
    __typename: "ModelPostConnection",
    items:  Array< {
      __typename: "Post",
      createdAt: string,
      id: string,
      owner?: string | null,
      title: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListRoomsQueryVariables = {
  filter?: ModelRoomFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListRoomsQuery = {
  listRooms?:  {
    __typename: "ModelRoomConnection",
    items:  Array< {
      __typename: "Room",
      createdAt: string,
      id: string,
      name: string,
      owner?: string | null,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListUsersQueryVariables = {
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUsersQuery = {
  listUsers?:  {
    __typename: "ModelUserConnection",
    items:  Array< {
      __typename: "User",
      avatar?: string | null,
      createdAt?: string | null,
      email: string,
      fullname?: string | null,
      id: string,
      title?: string | null,
      updatedAt?: string | null,
      username?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type CreateCommentMutationVariables = {
  condition?: ModelCommentConditionInput | null,
  input: CreateCommentInput,
};

export type CreateCommentMutation = {
  createComment?:  {
    __typename: "Comment",
    by?:  {
      __typename: "Post",
      createdAt: string,
      id: string,
      owner?: string | null,
      title: string,
      updatedAt: string,
    } | null,
    content: string,
    createdAt: string,
    id: string,
    owner?: string | null,
    postId?: string | null,
    updatedAt: string,
  } | null,
};

export type CreatePostMutationVariables = {
  condition?: ModelPostConditionInput | null,
  input: CreatePostInput,
};

export type CreatePostMutation = {
  createPost?:  {
    __typename: "Post",
    comments?:  {
      __typename: "ModelCommentConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    id: string,
    owner?: string | null,
    title: string,
    updatedAt: string,
  } | null,
};

export type CreateRoomMutationVariables = {
  condition?: ModelRoomConditionInput | null,
  input: CreateRoomInput,
};

export type CreateRoomMutation = {
  createRoom?:  {
    __typename: "Room",
    createdAt: string,
    id: string,
    name: string,
    owner?: string | null,
    updatedAt: string,
  } | null,
};

export type CreateUserMutationVariables = {
  condition?: ModelUserConditionInput | null,
  input: CreateUserInput,
};

export type CreateUserMutation = {
  createUser?:  {
    __typename: "User",
    avatar?: string | null,
    createdAt?: string | null,
    email: string,
    fullname?: string | null,
    id: string,
    title?: string | null,
    updatedAt?: string | null,
    username?: string | null,
  } | null,
};

export type DeleteCommentMutationVariables = {
  condition?: ModelCommentConditionInput | null,
  input: DeleteCommentInput,
};

export type DeleteCommentMutation = {
  deleteComment?:  {
    __typename: "Comment",
    by?:  {
      __typename: "Post",
      createdAt: string,
      id: string,
      owner?: string | null,
      title: string,
      updatedAt: string,
    } | null,
    content: string,
    createdAt: string,
    id: string,
    owner?: string | null,
    postId?: string | null,
    updatedAt: string,
  } | null,
};

export type DeletePostMutationVariables = {
  condition?: ModelPostConditionInput | null,
  input: DeletePostInput,
};

export type DeletePostMutation = {
  deletePost?:  {
    __typename: "Post",
    comments?:  {
      __typename: "ModelCommentConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    id: string,
    owner?: string | null,
    title: string,
    updatedAt: string,
  } | null,
};

export type DeleteRoomMutationVariables = {
  condition?: ModelRoomConditionInput | null,
  input: DeleteRoomInput,
};

export type DeleteRoomMutation = {
  deleteRoom?:  {
    __typename: "Room",
    createdAt: string,
    id: string,
    name: string,
    owner?: string | null,
    updatedAt: string,
  } | null,
};

export type DeleteUserMutationVariables = {
  condition?: ModelUserConditionInput | null,
  input: DeleteUserInput,
};

export type DeleteUserMutation = {
  deleteUser?:  {
    __typename: "User",
    avatar?: string | null,
    createdAt?: string | null,
    email: string,
    fullname?: string | null,
    id: string,
    title?: string | null,
    updatedAt?: string | null,
    username?: string | null,
  } | null,
};

export type UpdateCommentMutationVariables = {
  condition?: ModelCommentConditionInput | null,
  input: UpdateCommentInput,
};

export type UpdateCommentMutation = {
  updateComment?:  {
    __typename: "Comment",
    by?:  {
      __typename: "Post",
      createdAt: string,
      id: string,
      owner?: string | null,
      title: string,
      updatedAt: string,
    } | null,
    content: string,
    createdAt: string,
    id: string,
    owner?: string | null,
    postId?: string | null,
    updatedAt: string,
  } | null,
};

export type UpdatePostMutationVariables = {
  condition?: ModelPostConditionInput | null,
  input: UpdatePostInput,
};

export type UpdatePostMutation = {
  updatePost?:  {
    __typename: "Post",
    comments?:  {
      __typename: "ModelCommentConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    id: string,
    owner?: string | null,
    title: string,
    updatedAt: string,
  } | null,
};

export type UpdateRoomMutationVariables = {
  condition?: ModelRoomConditionInput | null,
  input: UpdateRoomInput,
};

export type UpdateRoomMutation = {
  updateRoom?:  {
    __typename: "Room",
    createdAt: string,
    id: string,
    name: string,
    owner?: string | null,
    updatedAt: string,
  } | null,
};

export type UpdateUserMutationVariables = {
  condition?: ModelUserConditionInput | null,
  input: UpdateUserInput,
};

export type UpdateUserMutation = {
  updateUser?:  {
    __typename: "User",
    avatar?: string | null,
    createdAt?: string | null,
    email: string,
    fullname?: string | null,
    id: string,
    title?: string | null,
    updatedAt?: string | null,
    username?: string | null,
  } | null,
};

export type OnCreateCommentSubscriptionVariables = {
  filter?: ModelSubscriptionCommentFilterInput | null,
  owner?: string | null,
};

export type OnCreateCommentSubscription = {
  onCreateComment?:  {
    __typename: "Comment",
    by?:  {
      __typename: "Post",
      createdAt: string,
      id: string,
      owner?: string | null,
      title: string,
      updatedAt: string,
    } | null,
    content: string,
    createdAt: string,
    id: string,
    owner?: string | null,
    postId?: string | null,
    updatedAt: string,
  } | null,
};

export type OnCreatePostSubscriptionVariables = {
  filter?: ModelSubscriptionPostFilterInput | null,
  owner?: string | null,
};

export type OnCreatePostSubscription = {
  onCreatePost?:  {
    __typename: "Post",
    comments?:  {
      __typename: "ModelCommentConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    id: string,
    owner?: string | null,
    title: string,
    updatedAt: string,
  } | null,
};

export type OnCreateRoomSubscriptionVariables = {
  filter?: ModelSubscriptionRoomFilterInput | null,
  owner?: string | null,
};

export type OnCreateRoomSubscription = {
  onCreateRoom?:  {
    __typename: "Room",
    createdAt: string,
    id: string,
    name: string,
    owner?: string | null,
    updatedAt: string,
  } | null,
};

export type OnCreateUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
  id?: string | null,
};

export type OnCreateUserSubscription = {
  onCreateUser?:  {
    __typename: "User",
    avatar?: string | null,
    createdAt?: string | null,
    email: string,
    fullname?: string | null,
    id: string,
    title?: string | null,
    updatedAt?: string | null,
    username?: string | null,
  } | null,
};

export type OnDeleteCommentSubscriptionVariables = {
  filter?: ModelSubscriptionCommentFilterInput | null,
  owner?: string | null,
};

export type OnDeleteCommentSubscription = {
  onDeleteComment?:  {
    __typename: "Comment",
    by?:  {
      __typename: "Post",
      createdAt: string,
      id: string,
      owner?: string | null,
      title: string,
      updatedAt: string,
    } | null,
    content: string,
    createdAt: string,
    id: string,
    owner?: string | null,
    postId?: string | null,
    updatedAt: string,
  } | null,
};

export type OnDeletePostSubscriptionVariables = {
  filter?: ModelSubscriptionPostFilterInput | null,
  owner?: string | null,
};

export type OnDeletePostSubscription = {
  onDeletePost?:  {
    __typename: "Post",
    comments?:  {
      __typename: "ModelCommentConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    id: string,
    owner?: string | null,
    title: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteRoomSubscriptionVariables = {
  filter?: ModelSubscriptionRoomFilterInput | null,
  owner?: string | null,
};

export type OnDeleteRoomSubscription = {
  onDeleteRoom?:  {
    __typename: "Room",
    createdAt: string,
    id: string,
    name: string,
    owner?: string | null,
    updatedAt: string,
  } | null,
};

export type OnDeleteUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
  id?: string | null,
};

export type OnDeleteUserSubscription = {
  onDeleteUser?:  {
    __typename: "User",
    avatar?: string | null,
    createdAt?: string | null,
    email: string,
    fullname?: string | null,
    id: string,
    title?: string | null,
    updatedAt?: string | null,
    username?: string | null,
  } | null,
};

export type OnUpdateCommentSubscriptionVariables = {
  filter?: ModelSubscriptionCommentFilterInput | null,
  owner?: string | null,
};

export type OnUpdateCommentSubscription = {
  onUpdateComment?:  {
    __typename: "Comment",
    by?:  {
      __typename: "Post",
      createdAt: string,
      id: string,
      owner?: string | null,
      title: string,
      updatedAt: string,
    } | null,
    content: string,
    createdAt: string,
    id: string,
    owner?: string | null,
    postId?: string | null,
    updatedAt: string,
  } | null,
};

export type OnUpdatePostSubscriptionVariables = {
  filter?: ModelSubscriptionPostFilterInput | null,
  owner?: string | null,
};

export type OnUpdatePostSubscription = {
  onUpdatePost?:  {
    __typename: "Post",
    comments?:  {
      __typename: "ModelCommentConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    id: string,
    owner?: string | null,
    title: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateRoomSubscriptionVariables = {
  filter?: ModelSubscriptionRoomFilterInput | null,
  owner?: string | null,
};

export type OnUpdateRoomSubscription = {
  onUpdateRoom?:  {
    __typename: "Room",
    createdAt: string,
    id: string,
    name: string,
    owner?: string | null,
    updatedAt: string,
  } | null,
};

export type OnUpdateUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
  id?: string | null,
};

export type OnUpdateUserSubscription = {
  onUpdateUser?:  {
    __typename: "User",
    avatar?: string | null,
    createdAt?: string | null,
    email: string,
    fullname?: string | null,
    id: string,
    title?: string | null,
    updatedAt?: string | null,
    username?: string | null,
  } | null,
};
