/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type Channel = {
  __typename: "Channel",
  createdAt: string,
  id: string,
  name?: string | null,
  updatedAt: string,
};

export type ChatMessage = {
  __typename: "ChatMessage",
  content: string,
  createdAt: string,
  files?: string | null,
  id: string,
  identifier: string,
  receiver: string,
  relationshipId: string,
  relationshipSource?: UserRelationships | null,
  updatedAt?: string | null,
};

export type UserRelationships = {
  __typename: "UserRelationships",
  createdAt: string,
  id: string,
  messages?: ModelChatMessageConnection | null,
  status?: string | null,
  updatedAt: string,
  user1?: User | null,
  user1_id: string,
  user2?: User | null,
  user2_id: string,
};

export type ModelChatMessageConnection = {
  __typename: "ModelChatMessageConnection",
  items:  Array<ChatMessage | null >,
  nextToken?: string | null,
};

export type User = {
  __typename: "User",
  avatar?: string | null,
  createdAt?: string | null,
  email: string,
  fullname?: string | null,
  id: string,
  notifications?: ModelNotificationCenterConnection | null,
  relationship1?: ModelUserRelationshipsConnection | null,
  relationship2?: ModelUserRelationshipsConnection | null,
  rooms?: ModelUserRoomConnection | null,
  title?: string | null,
  updatedAt?: string | null,
  username?: string | null,
};

export type ModelNotificationCenterConnection = {
  __typename: "ModelNotificationCenterConnection",
  items:  Array<NotificationCenter | null >,
  nextToken?: string | null,
};

export type NotificationCenter = {
  __typename: "NotificationCenter",
  belongsTo?: User | null,
  createdAt: string,
  from: string,
  id: string,
  idSource: string,
  status: string,
  table: string,
  target: string,
  type: string,
  updatedAt: string,
};

export type ModelUserRelationshipsConnection = {
  __typename: "ModelUserRelationshipsConnection",
  items:  Array<UserRelationships | null >,
  nextToken?: string | null,
};

export type ModelUserRoomConnection = {
  __typename: "ModelUserRoomConnection",
  items:  Array<UserRoom | null >,
  nextToken?: string | null,
};

export type UserRoom = {
  __typename: "UserRoom",
  createdAt: string,
  id: string,
  room?: Room | null,
  roomId: string,
  updatedAt: string,
  user?: User | null,
  userId: string,
};

export type Room = {
  __typename: "Room",
  background?: string | null,
  createdAt: string,
  description?: string | null,
  id: string,
  name: string,
  owner?: string | null,
  updatedAt: string,
  users?: ModelUserRoomConnection | null,
};

export type ModelChannelFilterInput = {
  and?: Array< ModelChannelFilterInput | null > | null,
  createdAt?: ModelStringInput | null,
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  not?: ModelChannelFilterInput | null,
  or?: Array< ModelChannelFilterInput | null > | null,
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

export type ModelChannelConnection = {
  __typename: "ModelChannelConnection",
  items:  Array<Channel | null >,
  nextToken?: string | null,
};

export type ModelStringKeyConditionInput = {
  beginsWith?: string | null,
  between?: Array< string | null > | null,
  eq?: string | null,
  ge?: string | null,
  gt?: string | null,
  le?: string | null,
  lt?: string | null,
};

export type ModelChatMessageFilterInput = {
  and?: Array< ModelChatMessageFilterInput | null > | null,
  content?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  files?: ModelStringInput | null,
  id?: ModelIDInput | null,
  identifier?: ModelStringInput | null,
  not?: ModelChatMessageFilterInput | null,
  or?: Array< ModelChatMessageFilterInput | null > | null,
  receiver?: ModelStringInput | null,
  relationshipId?: ModelIDInput | null,
  updatedAt?: ModelStringInput | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelNotificationCenterFilterInput = {
  and?: Array< ModelNotificationCenterFilterInput | null > | null,
  createdAt?: ModelStringInput | null,
  from?: ModelIDInput | null,
  id?: ModelIDInput | null,
  idSource?: ModelIDInput | null,
  not?: ModelNotificationCenterFilterInput | null,
  or?: Array< ModelNotificationCenterFilterInput | null > | null,
  status?: ModelStringInput | null,
  table?: ModelStringInput | null,
  target?: ModelStringInput | null,
  type?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelRoomFilterInput = {
  and?: Array< ModelRoomFilterInput | null > | null,
  background?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  description?: ModelStringInput | null,
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

export type ModelUserRelationshipsFilterInput = {
  and?: Array< ModelUserRelationshipsFilterInput | null > | null,
  createdAt?: ModelStringInput | null,
  id?: ModelIDInput | null,
  not?: ModelUserRelationshipsFilterInput | null,
  or?: Array< ModelUserRelationshipsFilterInput | null > | null,
  status?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  user1_id?: ModelIDInput | null,
  user2_id?: ModelIDInput | null,
};

export type ModelUserRoomFilterInput = {
  and?: Array< ModelUserRoomFilterInput | null > | null,
  createdAt?: ModelStringInput | null,
  id?: ModelIDInput | null,
  not?: ModelUserRoomFilterInput | null,
  or?: Array< ModelUserRoomFilterInput | null > | null,
  roomId?: ModelIDInput | null,
  updatedAt?: ModelStringInput | null,
  userId?: ModelIDInput | null,
};

export type ModelChannelConditionInput = {
  and?: Array< ModelChannelConditionInput | null > | null,
  createdAt?: ModelStringInput | null,
  name?: ModelStringInput | null,
  not?: ModelChannelConditionInput | null,
  or?: Array< ModelChannelConditionInput | null > | null,
  updatedAt?: ModelStringInput | null,
};

export type CreateChannelInput = {
  id?: string | null,
  name?: string | null,
};

export type ModelChatMessageConditionInput = {
  and?: Array< ModelChatMessageConditionInput | null > | null,
  content?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  files?: ModelStringInput | null,
  identifier?: ModelStringInput | null,
  not?: ModelChatMessageConditionInput | null,
  or?: Array< ModelChatMessageConditionInput | null > | null,
  receiver?: ModelStringInput | null,
  relationshipId?: ModelIDInput | null,
  updatedAt?: ModelStringInput | null,
};

export type CreateChatMessageInput = {
  content: string,
  createdAt?: string | null,
  files?: string | null,
  id?: string | null,
  identifier: string,
  receiver: string,
  relationshipId: string,
  updatedAt?: string | null,
};

export type ModelNotificationCenterConditionInput = {
  and?: Array< ModelNotificationCenterConditionInput | null > | null,
  createdAt?: ModelStringInput | null,
  from?: ModelIDInput | null,
  idSource?: ModelIDInput | null,
  not?: ModelNotificationCenterConditionInput | null,
  or?: Array< ModelNotificationCenterConditionInput | null > | null,
  status?: ModelStringInput | null,
  table?: ModelStringInput | null,
  target?: ModelStringInput | null,
  type?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type CreateNotificationCenterInput = {
  from: string,
  id?: string | null,
  idSource: string,
  status: string,
  table: string,
  target: string,
  type: string,
};

export type ModelRoomConditionInput = {
  and?: Array< ModelRoomConditionInput | null > | null,
  background?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  description?: ModelStringInput | null,
  name?: ModelStringInput | null,
  not?: ModelRoomConditionInput | null,
  or?: Array< ModelRoomConditionInput | null > | null,
  owner?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type CreateRoomInput = {
  background?: string | null,
  description?: string | null,
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

export type ModelUserRelationshipsConditionInput = {
  and?: Array< ModelUserRelationshipsConditionInput | null > | null,
  createdAt?: ModelStringInput | null,
  not?: ModelUserRelationshipsConditionInput | null,
  or?: Array< ModelUserRelationshipsConditionInput | null > | null,
  status?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  user1_id?: ModelIDInput | null,
  user2_id?: ModelIDInput | null,
};

export type CreateUserRelationshipsInput = {
  id?: string | null,
  status?: string | null,
  user1_id: string,
  user2_id: string,
};

export type ModelUserRoomConditionInput = {
  and?: Array< ModelUserRoomConditionInput | null > | null,
  createdAt?: ModelStringInput | null,
  not?: ModelUserRoomConditionInput | null,
  or?: Array< ModelUserRoomConditionInput | null > | null,
  roomId?: ModelIDInput | null,
  updatedAt?: ModelStringInput | null,
  userId?: ModelIDInput | null,
};

export type CreateUserRoomInput = {
  id?: string | null,
  roomId: string,
  userId: string,
};

export type DeleteChannelInput = {
  id: string,
};

export type DeleteChatMessageInput = {
  id: string,
};

export type DeleteNotificationCenterInput = {
  id: string,
};

export type DeleteRoomInput = {
  id: string,
};

export type DeleteUserInput = {
  id: string,
};

export type DeleteUserRelationshipsInput = {
  id: string,
};

export type DeleteUserRoomInput = {
  id: string,
};

export type Message = {
  __typename: "Message",
  content: string,
  files?: string | null,
  identifier: string,
  receiver: string,
};

export type UpdateChannelInput = {
  id: string,
  name?: string | null,
};

export type UpdateChatMessageInput = {
  content?: string | null,
  createdAt?: string | null,
  files?: string | null,
  id: string,
  identifier?: string | null,
  receiver?: string | null,
  relationshipId?: string | null,
  updatedAt?: string | null,
};

export type UpdateNotificationCenterInput = {
  from?: string | null,
  id: string,
  idSource?: string | null,
  status?: string | null,
  table?: string | null,
  target?: string | null,
  type?: string | null,
};

export type UpdateRoomInput = {
  background?: string | null,
  description?: string | null,
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

export type UpdateUserRelationshipsInput = {
  id: string,
  status?: string | null,
  user1_id?: string | null,
  user2_id?: string | null,
};

export type UpdateUserRoomInput = {
  id: string,
  roomId?: string | null,
  userId?: string | null,
};

export type ModelSubscriptionChannelFilterInput = {
  and?: Array< ModelSubscriptionChannelFilterInput | null > | null,
  createdAt?: ModelSubscriptionStringInput | null,
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  or?: Array< ModelSubscriptionChannelFilterInput | null > | null,
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

export type ModelSubscriptionChatMessageFilterInput = {
  and?: Array< ModelSubscriptionChatMessageFilterInput | null > | null,
  content?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  files?: ModelSubscriptionStringInput | null,
  id?: ModelSubscriptionIDInput | null,
  identifier?: ModelStringInput | null,
  or?: Array< ModelSubscriptionChatMessageFilterInput | null > | null,
  receiver?: ModelStringInput | null,
  relationshipId?: ModelSubscriptionIDInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
};

export type ModelSubscriptionNotificationCenterFilterInput = {
  and?: Array< ModelSubscriptionNotificationCenterFilterInput | null > | null,
  createdAt?: ModelSubscriptionStringInput | null,
  from?: ModelSubscriptionIDInput | null,
  id?: ModelSubscriptionIDInput | null,
  idSource?: ModelSubscriptionIDInput | null,
  or?: Array< ModelSubscriptionNotificationCenterFilterInput | null > | null,
  status?: ModelSubscriptionStringInput | null,
  table?: ModelSubscriptionStringInput | null,
  target?: ModelStringInput | null,
  type?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
};

export type ModelSubscriptionRoomFilterInput = {
  and?: Array< ModelSubscriptionRoomFilterInput | null > | null,
  background?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
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

export type ModelSubscriptionUserRelationshipsFilterInput = {
  and?: Array< ModelSubscriptionUserRelationshipsFilterInput | null > | null,
  createdAt?: ModelSubscriptionStringInput | null,
  id?: ModelSubscriptionIDInput | null,
  or?: Array< ModelSubscriptionUserRelationshipsFilterInput | null > | null,
  status?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  user1_id?: ModelSubscriptionIDInput | null,
  user2_id?: ModelSubscriptionIDInput | null,
};

export type ModelSubscriptionUserRoomFilterInput = {
  and?: Array< ModelSubscriptionUserRoomFilterInput | null > | null,
  createdAt?: ModelSubscriptionStringInput | null,
  id?: ModelSubscriptionIDInput | null,
  or?: Array< ModelSubscriptionUserRoomFilterInput | null > | null,
  roomId?: ModelSubscriptionIDInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  userId?: ModelSubscriptionIDInput | null,
};

export type GetChannelQueryVariables = {
  id: string,
};

export type GetChannelQuery = {
  getChannel?:  {
    __typename: "Channel",
    createdAt: string,
    id: string,
    name?: string | null,
    updatedAt: string,
  } | null,
};

export type GetChatMessageQueryVariables = {
  id: string,
};

export type GetChatMessageQuery = {
  getChatMessage?:  {
    __typename: "ChatMessage",
    content: string,
    createdAt: string,
    files?: string | null,
    id: string,
    identifier: string,
    receiver: string,
    relationshipId: string,
    relationshipSource?:  {
      __typename: "UserRelationships",
      createdAt: string,
      id: string,
      status?: string | null,
      updatedAt: string,
      user1_id: string,
      user2_id: string,
    } | null,
    updatedAt?: string | null,
  } | null,
};

export type GetNotificationCenterQueryVariables = {
  id: string,
};

export type GetNotificationCenterQuery = {
  getNotificationCenter?:  {
    __typename: "NotificationCenter",
    belongsTo?:  {
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
    createdAt: string,
    from: string,
    id: string,
    idSource: string,
    status: string,
    table: string,
    target: string,
    type: string,
    updatedAt: string,
  } | null,
};

export type GetRoomQueryVariables = {
  id: string,
};

export type GetRoomQuery = {
  getRoom?:  {
    __typename: "Room",
    background?: string | null,
    createdAt: string,
    description?: string | null,
    id: string,
    name: string,
    owner?: string | null,
    updatedAt: string,
    users?:  {
      __typename: "ModelUserRoomConnection",
      nextToken?: string | null,
    } | null,
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
    notifications?:  {
      __typename: "ModelNotificationCenterConnection",
      nextToken?: string | null,
    } | null,
    relationship1?:  {
      __typename: "ModelUserRelationshipsConnection",
      nextToken?: string | null,
    } | null,
    relationship2?:  {
      __typename: "ModelUserRelationshipsConnection",
      nextToken?: string | null,
    } | null,
    rooms?:  {
      __typename: "ModelUserRoomConnection",
      nextToken?: string | null,
    } | null,
    title?: string | null,
    updatedAt?: string | null,
    username?: string | null,
  } | null,
};

export type GetUserRelationshipsQueryVariables = {
  id: string,
};

export type GetUserRelationshipsQuery = {
  getUserRelationships?:  {
    __typename: "UserRelationships",
    createdAt: string,
    id: string,
    messages?:  {
      __typename: "ModelChatMessageConnection",
      nextToken?: string | null,
    } | null,
    status?: string | null,
    updatedAt: string,
    user1?:  {
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
    user1_id: string,
    user2?:  {
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
    user2_id: string,
  } | null,
};

export type GetUserRoomQueryVariables = {
  id: string,
};

export type GetUserRoomQuery = {
  getUserRoom?:  {
    __typename: "UserRoom",
    createdAt: string,
    id: string,
    room?:  {
      __typename: "Room",
      background?: string | null,
      createdAt: string,
      description?: string | null,
      id: string,
      name: string,
      owner?: string | null,
      updatedAt: string,
    } | null,
    roomId: string,
    updatedAt: string,
    user?:  {
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
    userId: string,
  } | null,
};

export type ListChannelsQueryVariables = {
  filter?: ModelChannelFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListChannelsQuery = {
  listChannels?:  {
    __typename: "ModelChannelConnection",
    items:  Array< {
      __typename: "Channel",
      createdAt: string,
      id: string,
      name?: string | null,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListChatMessageByRelationshipIdAndCreatedAtQueryVariables = {
  createdAt?: ModelStringKeyConditionInput | null,
  filter?: ModelChatMessageFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  relationshipId: string,
  sortDirection?: ModelSortDirection | null,
};

export type ListChatMessageByRelationshipIdAndCreatedAtQuery = {
  listChatMessageByRelationshipIdAndCreatedAt?:  {
    __typename: "ModelChatMessageConnection",
    items:  Array< {
      __typename: "ChatMessage",
      content: string,
      createdAt: string,
      files?: string | null,
      id: string,
      identifier: string,
      receiver: string,
      relationshipId: string,
      updatedAt?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListChatMessagesQueryVariables = {
  filter?: ModelChatMessageFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListChatMessagesQuery = {
  listChatMessages?:  {
    __typename: "ModelChatMessageConnection",
    items:  Array< {
      __typename: "ChatMessage",
      content: string,
      createdAt: string,
      files?: string | null,
      id: string,
      identifier: string,
      receiver: string,
      relationshipId: string,
      updatedAt?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListNotificationCenterByTargetQueryVariables = {
  filter?: ModelNotificationCenterFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
  target: string,
};

export type ListNotificationCenterByTargetQuery = {
  listNotificationCenterByTarget?:  {
    __typename: "ModelNotificationCenterConnection",
    items:  Array< {
      __typename: "NotificationCenter",
      createdAt: string,
      from: string,
      id: string,
      idSource: string,
      status: string,
      table: string,
      target: string,
      type: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListNotificationCentersQueryVariables = {
  filter?: ModelNotificationCenterFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListNotificationCentersQuery = {
  listNotificationCenters?:  {
    __typename: "ModelNotificationCenterConnection",
    items:  Array< {
      __typename: "NotificationCenter",
      createdAt: string,
      from: string,
      id: string,
      idSource: string,
      status: string,
      table: string,
      target: string,
      type: string,
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
      background?: string | null,
      createdAt: string,
      description?: string | null,
      id: string,
      name: string,
      owner?: string | null,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListUserByEmailQueryVariables = {
  email: string,
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListUserByEmailQuery = {
  listUserByEmail?:  {
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

export type ListUserByUsernameQueryVariables = {
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
  username: string,
};

export type ListUserByUsernameQuery = {
  listUserByUsername?:  {
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

export type ListUserRelationshipsQueryVariables = {
  filter?: ModelUserRelationshipsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUserRelationshipsQuery = {
  listUserRelationships?:  {
    __typename: "ModelUserRelationshipsConnection",
    items:  Array< {
      __typename: "UserRelationships",
      createdAt: string,
      id: string,
      status?: string | null,
      updatedAt: string,
      user1_id: string,
      user2_id: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListUserRelationshipsByUser1_idQueryVariables = {
  filter?: ModelUserRelationshipsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
  user1_id: string,
};

export type ListUserRelationshipsByUser1_idQuery = {
  listUserRelationshipsByUser1_id?:  {
    __typename: "ModelUserRelationshipsConnection",
    items:  Array< {
      __typename: "UserRelationships",
      createdAt: string,
      id: string,
      status?: string | null,
      updatedAt: string,
      user1_id: string,
      user2_id: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListUserRelationshipsByUser2_idQueryVariables = {
  filter?: ModelUserRelationshipsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
  user2_id: string,
};

export type ListUserRelationshipsByUser2_idQuery = {
  listUserRelationshipsByUser2_id?:  {
    __typename: "ModelUserRelationshipsConnection",
    items:  Array< {
      __typename: "UserRelationships",
      createdAt: string,
      id: string,
      status?: string | null,
      updatedAt: string,
      user1_id: string,
      user2_id: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListUserRoomsQueryVariables = {
  filter?: ModelUserRoomFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUserRoomsQuery = {
  listUserRooms?:  {
    __typename: "ModelUserRoomConnection",
    items:  Array< {
      __typename: "UserRoom",
      createdAt: string,
      id: string,
      roomId: string,
      updatedAt: string,
      userId: string,
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

export type CreateChannelMutationVariables = {
  condition?: ModelChannelConditionInput | null,
  input: CreateChannelInput,
};

export type CreateChannelMutation = {
  createChannel?:  {
    __typename: "Channel",
    createdAt: string,
    id: string,
    name?: string | null,
    updatedAt: string,
  } | null,
};

export type CreateChatMessageMutationVariables = {
  condition?: ModelChatMessageConditionInput | null,
  input: CreateChatMessageInput,
};

export type CreateChatMessageMutation = {
  createChatMessage?:  {
    __typename: "ChatMessage",
    content: string,
    createdAt: string,
    files?: string | null,
    id: string,
    identifier: string,
    receiver: string,
    relationshipId: string,
    relationshipSource?:  {
      __typename: "UserRelationships",
      createdAt: string,
      id: string,
      status?: string | null,
      updatedAt: string,
      user1_id: string,
      user2_id: string,
    } | null,
    updatedAt?: string | null,
  } | null,
};

export type CreateNotificationCenterMutationVariables = {
  condition?: ModelNotificationCenterConditionInput | null,
  input: CreateNotificationCenterInput,
};

export type CreateNotificationCenterMutation = {
  createNotificationCenter?:  {
    __typename: "NotificationCenter",
    belongsTo?:  {
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
    createdAt: string,
    from: string,
    id: string,
    idSource: string,
    status: string,
    table: string,
    target: string,
    type: string,
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
    background?: string | null,
    createdAt: string,
    description?: string | null,
    id: string,
    name: string,
    owner?: string | null,
    updatedAt: string,
    users?:  {
      __typename: "ModelUserRoomConnection",
      nextToken?: string | null,
    } | null,
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
    notifications?:  {
      __typename: "ModelNotificationCenterConnection",
      nextToken?: string | null,
    } | null,
    relationship1?:  {
      __typename: "ModelUserRelationshipsConnection",
      nextToken?: string | null,
    } | null,
    relationship2?:  {
      __typename: "ModelUserRelationshipsConnection",
      nextToken?: string | null,
    } | null,
    rooms?:  {
      __typename: "ModelUserRoomConnection",
      nextToken?: string | null,
    } | null,
    title?: string | null,
    updatedAt?: string | null,
    username?: string | null,
  } | null,
};

export type CreateUserRelationshipsMutationVariables = {
  condition?: ModelUserRelationshipsConditionInput | null,
  input: CreateUserRelationshipsInput,
};

export type CreateUserRelationshipsMutation = {
  createUserRelationships?:  {
    __typename: "UserRelationships",
    createdAt: string,
    id: string,
    messages?:  {
      __typename: "ModelChatMessageConnection",
      nextToken?: string | null,
    } | null,
    status?: string | null,
    updatedAt: string,
    user1?:  {
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
    user1_id: string,
    user2?:  {
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
    user2_id: string,
  } | null,
};

export type CreateUserRoomMutationVariables = {
  condition?: ModelUserRoomConditionInput | null,
  input: CreateUserRoomInput,
};

export type CreateUserRoomMutation = {
  createUserRoom?:  {
    __typename: "UserRoom",
    createdAt: string,
    id: string,
    room?:  {
      __typename: "Room",
      background?: string | null,
      createdAt: string,
      description?: string | null,
      id: string,
      name: string,
      owner?: string | null,
      updatedAt: string,
    } | null,
    roomId: string,
    updatedAt: string,
    user?:  {
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
    userId: string,
  } | null,
};

export type DeleteChannelMutationVariables = {
  condition?: ModelChannelConditionInput | null,
  input: DeleteChannelInput,
};

export type DeleteChannelMutation = {
  deleteChannel?:  {
    __typename: "Channel",
    createdAt: string,
    id: string,
    name?: string | null,
    updatedAt: string,
  } | null,
};

export type DeleteChatMessageMutationVariables = {
  condition?: ModelChatMessageConditionInput | null,
  input: DeleteChatMessageInput,
};

export type DeleteChatMessageMutation = {
  deleteChatMessage?:  {
    __typename: "ChatMessage",
    content: string,
    createdAt: string,
    files?: string | null,
    id: string,
    identifier: string,
    receiver: string,
    relationshipId: string,
    relationshipSource?:  {
      __typename: "UserRelationships",
      createdAt: string,
      id: string,
      status?: string | null,
      updatedAt: string,
      user1_id: string,
      user2_id: string,
    } | null,
    updatedAt?: string | null,
  } | null,
};

export type DeleteNotificationCenterMutationVariables = {
  condition?: ModelNotificationCenterConditionInput | null,
  input: DeleteNotificationCenterInput,
};

export type DeleteNotificationCenterMutation = {
  deleteNotificationCenter?:  {
    __typename: "NotificationCenter",
    belongsTo?:  {
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
    createdAt: string,
    from: string,
    id: string,
    idSource: string,
    status: string,
    table: string,
    target: string,
    type: string,
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
    background?: string | null,
    createdAt: string,
    description?: string | null,
    id: string,
    name: string,
    owner?: string | null,
    updatedAt: string,
    users?:  {
      __typename: "ModelUserRoomConnection",
      nextToken?: string | null,
    } | null,
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
    notifications?:  {
      __typename: "ModelNotificationCenterConnection",
      nextToken?: string | null,
    } | null,
    relationship1?:  {
      __typename: "ModelUserRelationshipsConnection",
      nextToken?: string | null,
    } | null,
    relationship2?:  {
      __typename: "ModelUserRelationshipsConnection",
      nextToken?: string | null,
    } | null,
    rooms?:  {
      __typename: "ModelUserRoomConnection",
      nextToken?: string | null,
    } | null,
    title?: string | null,
    updatedAt?: string | null,
    username?: string | null,
  } | null,
};

export type DeleteUserRelationshipsMutationVariables = {
  condition?: ModelUserRelationshipsConditionInput | null,
  input: DeleteUserRelationshipsInput,
};

export type DeleteUserRelationshipsMutation = {
  deleteUserRelationships?:  {
    __typename: "UserRelationships",
    createdAt: string,
    id: string,
    messages?:  {
      __typename: "ModelChatMessageConnection",
      nextToken?: string | null,
    } | null,
    status?: string | null,
    updatedAt: string,
    user1?:  {
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
    user1_id: string,
    user2?:  {
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
    user2_id: string,
  } | null,
};

export type DeleteUserRoomMutationVariables = {
  condition?: ModelUserRoomConditionInput | null,
  input: DeleteUserRoomInput,
};

export type DeleteUserRoomMutation = {
  deleteUserRoom?:  {
    __typename: "UserRoom",
    createdAt: string,
    id: string,
    room?:  {
      __typename: "Room",
      background?: string | null,
      createdAt: string,
      description?: string | null,
      id: string,
      name: string,
      owner?: string | null,
      updatedAt: string,
    } | null,
    roomId: string,
    updatedAt: string,
    user?:  {
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
    userId: string,
  } | null,
};

export type PublishMutationVariables = {
  content: string,
  files?: string | null,
  identifier: string,
  receiver: string,
};

export type PublishMutation = {
  publish?:  {
    __typename: "Message",
    content: string,
    files?: string | null,
    identifier: string,
    receiver: string,
  } | null,
};

export type UpdateChannelMutationVariables = {
  condition?: ModelChannelConditionInput | null,
  input: UpdateChannelInput,
};

export type UpdateChannelMutation = {
  updateChannel?:  {
    __typename: "Channel",
    createdAt: string,
    id: string,
    name?: string | null,
    updatedAt: string,
  } | null,
};

export type UpdateChatMessageMutationVariables = {
  condition?: ModelChatMessageConditionInput | null,
  input: UpdateChatMessageInput,
};

export type UpdateChatMessageMutation = {
  updateChatMessage?:  {
    __typename: "ChatMessage",
    content: string,
    createdAt: string,
    files?: string | null,
    id: string,
    identifier: string,
    receiver: string,
    relationshipId: string,
    relationshipSource?:  {
      __typename: "UserRelationships",
      createdAt: string,
      id: string,
      status?: string | null,
      updatedAt: string,
      user1_id: string,
      user2_id: string,
    } | null,
    updatedAt?: string | null,
  } | null,
};

export type UpdateNotificationCenterMutationVariables = {
  condition?: ModelNotificationCenterConditionInput | null,
  input: UpdateNotificationCenterInput,
};

export type UpdateNotificationCenterMutation = {
  updateNotificationCenter?:  {
    __typename: "NotificationCenter",
    belongsTo?:  {
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
    createdAt: string,
    from: string,
    id: string,
    idSource: string,
    status: string,
    table: string,
    target: string,
    type: string,
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
    background?: string | null,
    createdAt: string,
    description?: string | null,
    id: string,
    name: string,
    owner?: string | null,
    updatedAt: string,
    users?:  {
      __typename: "ModelUserRoomConnection",
      nextToken?: string | null,
    } | null,
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
    notifications?:  {
      __typename: "ModelNotificationCenterConnection",
      nextToken?: string | null,
    } | null,
    relationship1?:  {
      __typename: "ModelUserRelationshipsConnection",
      nextToken?: string | null,
    } | null,
    relationship2?:  {
      __typename: "ModelUserRelationshipsConnection",
      nextToken?: string | null,
    } | null,
    rooms?:  {
      __typename: "ModelUserRoomConnection",
      nextToken?: string | null,
    } | null,
    title?: string | null,
    updatedAt?: string | null,
    username?: string | null,
  } | null,
};

export type UpdateUserRelationshipsMutationVariables = {
  condition?: ModelUserRelationshipsConditionInput | null,
  input: UpdateUserRelationshipsInput,
};

export type UpdateUserRelationshipsMutation = {
  updateUserRelationships?:  {
    __typename: "UserRelationships",
    createdAt: string,
    id: string,
    messages?:  {
      __typename: "ModelChatMessageConnection",
      nextToken?: string | null,
    } | null,
    status?: string | null,
    updatedAt: string,
    user1?:  {
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
    user1_id: string,
    user2?:  {
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
    user2_id: string,
  } | null,
};

export type UpdateUserRoomMutationVariables = {
  condition?: ModelUserRoomConditionInput | null,
  input: UpdateUserRoomInput,
};

export type UpdateUserRoomMutation = {
  updateUserRoom?:  {
    __typename: "UserRoom",
    createdAt: string,
    id: string,
    room?:  {
      __typename: "Room",
      background?: string | null,
      createdAt: string,
      description?: string | null,
      id: string,
      name: string,
      owner?: string | null,
      updatedAt: string,
    } | null,
    roomId: string,
    updatedAt: string,
    user?:  {
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
    userId: string,
  } | null,
};

export type OnCreateChannelSubscriptionVariables = {
  filter?: ModelSubscriptionChannelFilterInput | null,
};

export type OnCreateChannelSubscription = {
  onCreateChannel?:  {
    __typename: "Channel",
    createdAt: string,
    id: string,
    name?: string | null,
    updatedAt: string,
  } | null,
};

export type OnCreateChatMessageSubscriptionVariables = {
  filter?: ModelSubscriptionChatMessageFilterInput | null,
  identifier?: string | null,
  receiver?: string | null,
};

export type OnCreateChatMessageSubscription = {
  onCreateChatMessage?:  {
    __typename: "ChatMessage",
    content: string,
    createdAt: string,
    files?: string | null,
    id: string,
    identifier: string,
    receiver: string,
    relationshipId: string,
    relationshipSource?:  {
      __typename: "UserRelationships",
      createdAt: string,
      id: string,
      status?: string | null,
      updatedAt: string,
      user1_id: string,
      user2_id: string,
    } | null,
    updatedAt?: string | null,
  } | null,
};

export type OnCreateNotificationCenterSubscriptionVariables = {
  filter?: ModelSubscriptionNotificationCenterFilterInput | null,
  target?: string | null,
};

export type OnCreateNotificationCenterSubscription = {
  onCreateNotificationCenter?:  {
    __typename: "NotificationCenter",
    belongsTo?:  {
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
    createdAt: string,
    from: string,
    id: string,
    idSource: string,
    status: string,
    table: string,
    target: string,
    type: string,
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
    background?: string | null,
    createdAt: string,
    description?: string | null,
    id: string,
    name: string,
    owner?: string | null,
    updatedAt: string,
    users?:  {
      __typename: "ModelUserRoomConnection",
      nextToken?: string | null,
    } | null,
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
    notifications?:  {
      __typename: "ModelNotificationCenterConnection",
      nextToken?: string | null,
    } | null,
    relationship1?:  {
      __typename: "ModelUserRelationshipsConnection",
      nextToken?: string | null,
    } | null,
    relationship2?:  {
      __typename: "ModelUserRelationshipsConnection",
      nextToken?: string | null,
    } | null,
    rooms?:  {
      __typename: "ModelUserRoomConnection",
      nextToken?: string | null,
    } | null,
    title?: string | null,
    updatedAt?: string | null,
    username?: string | null,
  } | null,
};

export type OnCreateUserRelationshipsSubscriptionVariables = {
  filter?: ModelSubscriptionUserRelationshipsFilterInput | null,
};

export type OnCreateUserRelationshipsSubscription = {
  onCreateUserRelationships?:  {
    __typename: "UserRelationships",
    createdAt: string,
    id: string,
    messages?:  {
      __typename: "ModelChatMessageConnection",
      nextToken?: string | null,
    } | null,
    status?: string | null,
    updatedAt: string,
    user1?:  {
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
    user1_id: string,
    user2?:  {
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
    user2_id: string,
  } | null,
};

export type OnCreateUserRoomSubscriptionVariables = {
  filter?: ModelSubscriptionUserRoomFilterInput | null,
};

export type OnCreateUserRoomSubscription = {
  onCreateUserRoom?:  {
    __typename: "UserRoom",
    createdAt: string,
    id: string,
    room?:  {
      __typename: "Room",
      background?: string | null,
      createdAt: string,
      description?: string | null,
      id: string,
      name: string,
      owner?: string | null,
      updatedAt: string,
    } | null,
    roomId: string,
    updatedAt: string,
    user?:  {
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
    userId: string,
  } | null,
};

export type OnDeleteChannelSubscriptionVariables = {
  filter?: ModelSubscriptionChannelFilterInput | null,
};

export type OnDeleteChannelSubscription = {
  onDeleteChannel?:  {
    __typename: "Channel",
    createdAt: string,
    id: string,
    name?: string | null,
    updatedAt: string,
  } | null,
};

export type OnDeleteChatMessageSubscriptionVariables = {
  filter?: ModelSubscriptionChatMessageFilterInput | null,
  identifier?: string | null,
  receiver?: string | null,
};

export type OnDeleteChatMessageSubscription = {
  onDeleteChatMessage?:  {
    __typename: "ChatMessage",
    content: string,
    createdAt: string,
    files?: string | null,
    id: string,
    identifier: string,
    receiver: string,
    relationshipId: string,
    relationshipSource?:  {
      __typename: "UserRelationships",
      createdAt: string,
      id: string,
      status?: string | null,
      updatedAt: string,
      user1_id: string,
      user2_id: string,
    } | null,
    updatedAt?: string | null,
  } | null,
};

export type OnDeleteNotificationCenterSubscriptionVariables = {
  filter?: ModelSubscriptionNotificationCenterFilterInput | null,
  target?: string | null,
};

export type OnDeleteNotificationCenterSubscription = {
  onDeleteNotificationCenter?:  {
    __typename: "NotificationCenter",
    belongsTo?:  {
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
    createdAt: string,
    from: string,
    id: string,
    idSource: string,
    status: string,
    table: string,
    target: string,
    type: string,
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
    background?: string | null,
    createdAt: string,
    description?: string | null,
    id: string,
    name: string,
    owner?: string | null,
    updatedAt: string,
    users?:  {
      __typename: "ModelUserRoomConnection",
      nextToken?: string | null,
    } | null,
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
    notifications?:  {
      __typename: "ModelNotificationCenterConnection",
      nextToken?: string | null,
    } | null,
    relationship1?:  {
      __typename: "ModelUserRelationshipsConnection",
      nextToken?: string | null,
    } | null,
    relationship2?:  {
      __typename: "ModelUserRelationshipsConnection",
      nextToken?: string | null,
    } | null,
    rooms?:  {
      __typename: "ModelUserRoomConnection",
      nextToken?: string | null,
    } | null,
    title?: string | null,
    updatedAt?: string | null,
    username?: string | null,
  } | null,
};

export type OnDeleteUserRelationshipsSubscriptionVariables = {
  filter?: ModelSubscriptionUserRelationshipsFilterInput | null,
};

export type OnDeleteUserRelationshipsSubscription = {
  onDeleteUserRelationships?:  {
    __typename: "UserRelationships",
    createdAt: string,
    id: string,
    messages?:  {
      __typename: "ModelChatMessageConnection",
      nextToken?: string | null,
    } | null,
    status?: string | null,
    updatedAt: string,
    user1?:  {
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
    user1_id: string,
    user2?:  {
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
    user2_id: string,
  } | null,
};

export type OnDeleteUserRoomSubscriptionVariables = {
  filter?: ModelSubscriptionUserRoomFilterInput | null,
};

export type OnDeleteUserRoomSubscription = {
  onDeleteUserRoom?:  {
    __typename: "UserRoom",
    createdAt: string,
    id: string,
    room?:  {
      __typename: "Room",
      background?: string | null,
      createdAt: string,
      description?: string | null,
      id: string,
      name: string,
      owner?: string | null,
      updatedAt: string,
    } | null,
    roomId: string,
    updatedAt: string,
    user?:  {
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
    userId: string,
  } | null,
};

export type OnUpdateChannelSubscriptionVariables = {
  filter?: ModelSubscriptionChannelFilterInput | null,
};

export type OnUpdateChannelSubscription = {
  onUpdateChannel?:  {
    __typename: "Channel",
    createdAt: string,
    id: string,
    name?: string | null,
    updatedAt: string,
  } | null,
};

export type OnUpdateChatMessageSubscriptionVariables = {
  filter?: ModelSubscriptionChatMessageFilterInput | null,
  identifier?: string | null,
  receiver?: string | null,
};

export type OnUpdateChatMessageSubscription = {
  onUpdateChatMessage?:  {
    __typename: "ChatMessage",
    content: string,
    createdAt: string,
    files?: string | null,
    id: string,
    identifier: string,
    receiver: string,
    relationshipId: string,
    relationshipSource?:  {
      __typename: "UserRelationships",
      createdAt: string,
      id: string,
      status?: string | null,
      updatedAt: string,
      user1_id: string,
      user2_id: string,
    } | null,
    updatedAt?: string | null,
  } | null,
};

export type OnUpdateNotificationCenterSubscriptionVariables = {
  filter?: ModelSubscriptionNotificationCenterFilterInput | null,
  target?: string | null,
};

export type OnUpdateNotificationCenterSubscription = {
  onUpdateNotificationCenter?:  {
    __typename: "NotificationCenter",
    belongsTo?:  {
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
    createdAt: string,
    from: string,
    id: string,
    idSource: string,
    status: string,
    table: string,
    target: string,
    type: string,
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
    background?: string | null,
    createdAt: string,
    description?: string | null,
    id: string,
    name: string,
    owner?: string | null,
    updatedAt: string,
    users?:  {
      __typename: "ModelUserRoomConnection",
      nextToken?: string | null,
    } | null,
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
    notifications?:  {
      __typename: "ModelNotificationCenterConnection",
      nextToken?: string | null,
    } | null,
    relationship1?:  {
      __typename: "ModelUserRelationshipsConnection",
      nextToken?: string | null,
    } | null,
    relationship2?:  {
      __typename: "ModelUserRelationshipsConnection",
      nextToken?: string | null,
    } | null,
    rooms?:  {
      __typename: "ModelUserRoomConnection",
      nextToken?: string | null,
    } | null,
    title?: string | null,
    updatedAt?: string | null,
    username?: string | null,
  } | null,
};

export type OnUpdateUserRelationshipsSubscriptionVariables = {
  filter?: ModelSubscriptionUserRelationshipsFilterInput | null,
};

export type OnUpdateUserRelationshipsSubscription = {
  onUpdateUserRelationships?:  {
    __typename: "UserRelationships",
    createdAt: string,
    id: string,
    messages?:  {
      __typename: "ModelChatMessageConnection",
      nextToken?: string | null,
    } | null,
    status?: string | null,
    updatedAt: string,
    user1?:  {
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
    user1_id: string,
    user2?:  {
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
    user2_id: string,
  } | null,
};

export type OnUpdateUserRoomSubscriptionVariables = {
  filter?: ModelSubscriptionUserRoomFilterInput | null,
};

export type OnUpdateUserRoomSubscription = {
  onUpdateUserRoom?:  {
    __typename: "UserRoom",
    createdAt: string,
    id: string,
    room?:  {
      __typename: "Room",
      background?: string | null,
      createdAt: string,
      description?: string | null,
      id: string,
      name: string,
      owner?: string | null,
      updatedAt: string,
    } | null,
    roomId: string,
    updatedAt: string,
    user?:  {
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
    userId: string,
  } | null,
};

export type ReceiveSubscriptionVariables = {
  identifier?: string | null,
  receiver?: string | null,
};

export type ReceiveSubscription = {
  receive?:  {
    __typename: "Message",
    content: string,
    files?: string | null,
    identifier: string,
    receiver: string,
  } | null,
};
