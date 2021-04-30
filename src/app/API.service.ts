/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.
import { Injectable } from "@angular/core";
import API, { graphqlOperation, GraphQLResult } from "@aws-amplify/api-graphql";
import { Observable } from "zen-observable-ts";

export interface SubscriptionResponse<T> {
  value: GraphQLResult<T>;
}

export type CreateProfileInput = {
  id?: string | null;
  username: string;
  email: string;
  profilePictureURL?: string | null;
};

export type ModelProfileConditionInput = {
  username?: ModelStringInput | null;
  email?: ModelStringInput | null;
  profilePictureURL?: ModelStringInput | null;
  and?: Array<ModelProfileConditionInput | null> | null;
  or?: Array<ModelProfileConditionInput | null> | null;
  not?: ModelProfileConditionInput | null;
};

export type ModelStringInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null"
}

export type ModelSizeInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
};

export type Profile = {
  __typename: "Profile";
  id?: string;
  username?: string;
  email?: string;
  createdAt?: string;
  updatedAt?: string;
  profilePictureURL?: string | null;
  posts?: ModelPostConnection;
  comments?: ModelCommentConnection;
};

export type ModelPostConnection = {
  __typename: "ModelPostConnection";
  items?: Array<Post | null> | null;
  nextToken?: string | null;
};

export type Post = {
  __typename: "Post";
  id?: string;
  title?: string;
  content?: string;
  owner?: string | null;
  profileID?: string;
  createdAt?: string;
  updatedAt?: string;
  profile?: Profile;
  comments?: ModelCommentConnection;
  tags?: ModelTagPostConnection;
};

export type ModelCommentConnection = {
  __typename: "ModelCommentConnection";
  items?: Array<Comment | null> | null;
  nextToken?: string | null;
};

export type Comment = {
  __typename: "Comment";
  id?: string;
  postID?: string;
  content?: string;
  owner?: string | null;
  profileID?: string;
  createdAt?: string;
  updatedAt?: string;
  profile?: Profile;
  post?: Post;
};

export type ModelTagPostConnection = {
  __typename: "ModelTagPostConnection";
  items?: Array<TagPost | null> | null;
  nextToken?: string | null;
};

export type TagPost = {
  __typename: "TagPost";
  id?: string;
  postID?: string;
  tagID?: string;
  createdAt?: string;
  updatedAt?: string;
  post?: Post;
  tag?: Tag;
  owner?: string | null;
};

export type Tag = {
  __typename: "Tag";
  id?: string;
  tag?: string;
  createdAt?: string;
  updatedAt?: string;
  posts?: ModelTagPostConnection;
};

export type UpdateProfileInput = {
  id: string;
  username?: string | null;
  email?: string | null;
  profilePictureURL?: string | null;
};

export type DeleteProfileInput = {
  id?: string | null;
};

export type CreatePostInput = {
  id?: string | null;
  title: string;
  content: string;
  owner?: string | null;
  profileID: string;
};

export type ModelPostConditionInput = {
  title?: ModelStringInput | null;
  content?: ModelStringInput | null;
  profileID?: ModelIDInput | null;
  and?: Array<ModelPostConditionInput | null> | null;
  or?: Array<ModelPostConditionInput | null> | null;
  not?: ModelPostConditionInput | null;
};

export type ModelIDInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export type UpdatePostInput = {
  id: string;
  title?: string | null;
  content?: string | null;
  owner?: string | null;
  profileID?: string | null;
};

export type DeletePostInput = {
  id?: string | null;
};

export type CreateCommentInput = {
  id?: string | null;
  postID: string;
  content: string;
  owner?: string | null;
  profileID: string;
};

export type ModelCommentConditionInput = {
  postID?: ModelIDInput | null;
  content?: ModelStringInput | null;
  profileID?: ModelIDInput | null;
  and?: Array<ModelCommentConditionInput | null> | null;
  or?: Array<ModelCommentConditionInput | null> | null;
  not?: ModelCommentConditionInput | null;
};

export type UpdateCommentInput = {
  id: string;
  postID?: string | null;
  content?: string | null;
  owner?: string | null;
  profileID?: string | null;
};

export type DeleteCommentInput = {
  id?: string | null;
};

export type CreateTagInput = {
  id?: string | null;
  tag: string;
};

export type ModelTagConditionInput = {
  tag?: ModelStringInput | null;
  and?: Array<ModelTagConditionInput | null> | null;
  or?: Array<ModelTagConditionInput | null> | null;
  not?: ModelTagConditionInput | null;
};

export type UpdateTagInput = {
  id: string;
  tag?: string | null;
};

export type DeleteTagInput = {
  id?: string | null;
};

export type CreateTagPostInput = {
  id?: string | null;
  postID: string;
  tagID: string;
};

export type ModelTagPostConditionInput = {
  postID?: ModelIDInput | null;
  tagID?: ModelIDInput | null;
  and?: Array<ModelTagPostConditionInput | null> | null;
  or?: Array<ModelTagPostConditionInput | null> | null;
  not?: ModelTagPostConditionInput | null;
};

export type UpdateTagPostInput = {
  id: string;
  postID?: string | null;
  tagID?: string | null;
};

export type DeleteTagPostInput = {
  id?: string | null;
};

export type ModelProfileFilterInput = {
  id?: ModelIDInput | null;
  username?: ModelStringInput | null;
  email?: ModelStringInput | null;
  profilePictureURL?: ModelStringInput | null;
  and?: Array<ModelProfileFilterInput | null> | null;
  or?: Array<ModelProfileFilterInput | null> | null;
  not?: ModelProfileFilterInput | null;
};

export type ModelProfileConnection = {
  __typename: "ModelProfileConnection";
  items?: Array<Profile | null> | null;
  nextToken?: string | null;
};

export type ModelPostFilterInput = {
  id?: ModelIDInput | null;
  title?: ModelStringInput | null;
  content?: ModelStringInput | null;
  owner?: ModelStringInput | null;
  profileID?: ModelIDInput | null;
  and?: Array<ModelPostFilterInput | null> | null;
  or?: Array<ModelPostFilterInput | null> | null;
  not?: ModelPostFilterInput | null;
};

export type ModelCommentFilterInput = {
  id?: ModelIDInput | null;
  postID?: ModelIDInput | null;
  content?: ModelStringInput | null;
  owner?: ModelStringInput | null;
  profileID?: ModelIDInput | null;
  and?: Array<ModelCommentFilterInput | null> | null;
  or?: Array<ModelCommentFilterInput | null> | null;
  not?: ModelCommentFilterInput | null;
};

export type ModelTagFilterInput = {
  id?: ModelIDInput | null;
  tag?: ModelStringInput | null;
  and?: Array<ModelTagFilterInput | null> | null;
  or?: Array<ModelTagFilterInput | null> | null;
  not?: ModelTagFilterInput | null;
};

export type ModelTagConnection = {
  __typename: "ModelTagConnection";
  items?: Array<Tag | null> | null;
  nextToken?: string | null;
};

export type ModelTagPostFilterInput = {
  id?: ModelIDInput | null;
  postID?: ModelIDInput | null;
  tagID?: ModelIDInput | null;
  and?: Array<ModelTagPostFilterInput | null> | null;
  or?: Array<ModelTagPostFilterInput | null> | null;
  not?: ModelTagPostFilterInput | null;
};

export type CreateProfileMutation = {
  __typename: "Profile";
  id: string;
  username: string;
  email: string;
  createdAt: string;
  updatedAt: string;
  profilePictureURL?: string | null;
  posts?: {
    __typename: "ModelPostConnection";
    items?: Array<{
      __typename: "Post";
      id: string;
      title: string;
      content: string;
      owner?: string | null;
      profileID: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  comments?: {
    __typename: "ModelCommentConnection";
    items?: Array<{
      __typename: "Comment";
      id: string;
      postID: string;
      content: string;
      owner?: string | null;
      profileID: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken?: string | null;
  } | null;
};

export type UpdateProfileMutation = {
  __typename: "Profile";
  id: string;
  username: string;
  email: string;
  createdAt: string;
  updatedAt: string;
  profilePictureURL?: string | null;
  posts?: {
    __typename: "ModelPostConnection";
    items?: Array<{
      __typename: "Post";
      id: string;
      title: string;
      content: string;
      owner?: string | null;
      profileID: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  comments?: {
    __typename: "ModelCommentConnection";
    items?: Array<{
      __typename: "Comment";
      id: string;
      postID: string;
      content: string;
      owner?: string | null;
      profileID: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken?: string | null;
  } | null;
};

export type DeleteProfileMutation = {
  __typename: "Profile";
  id: string;
  username: string;
  email: string;
  createdAt: string;
  updatedAt: string;
  profilePictureURL?: string | null;
  posts?: {
    __typename: "ModelPostConnection";
    items?: Array<{
      __typename: "Post";
      id: string;
      title: string;
      content: string;
      owner?: string | null;
      profileID: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  comments?: {
    __typename: "ModelCommentConnection";
    items?: Array<{
      __typename: "Comment";
      id: string;
      postID: string;
      content: string;
      owner?: string | null;
      profileID: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken?: string | null;
  } | null;
};

export type CreatePostMutation = {
  __typename: "Post";
  id: string;
  title: string;
  content: string;
  owner?: string | null;
  profileID: string;
  createdAt: string;
  updatedAt: string;
  profile?: {
    __typename: "Profile";
    id: string;
    username: string;
    email: string;
    createdAt: string;
    updatedAt: string;
    profilePictureURL?: string | null;
    posts?: {
      __typename: "ModelPostConnection";
      nextToken?: string | null;
    } | null;
    comments?: {
      __typename: "ModelCommentConnection";
      nextToken?: string | null;
    } | null;
  } | null;
  comments?: {
    __typename: "ModelCommentConnection";
    items?: Array<{
      __typename: "Comment";
      id: string;
      postID: string;
      content: string;
      owner?: string | null;
      profileID: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  tags?: {
    __typename: "ModelTagPostConnection";
    items?: Array<{
      __typename: "TagPost";
      id: string;
      postID: string;
      tagID: string;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    } | null> | null;
    nextToken?: string | null;
  } | null;
};

export type UpdatePostMutation = {
  __typename: "Post";
  id: string;
  title: string;
  content: string;
  owner?: string | null;
  profileID: string;
  createdAt: string;
  updatedAt: string;
  profile?: {
    __typename: "Profile";
    id: string;
    username: string;
    email: string;
    createdAt: string;
    updatedAt: string;
    profilePictureURL?: string | null;
    posts?: {
      __typename: "ModelPostConnection";
      nextToken?: string | null;
    } | null;
    comments?: {
      __typename: "ModelCommentConnection";
      nextToken?: string | null;
    } | null;
  } | null;
  comments?: {
    __typename: "ModelCommentConnection";
    items?: Array<{
      __typename: "Comment";
      id: string;
      postID: string;
      content: string;
      owner?: string | null;
      profileID: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  tags?: {
    __typename: "ModelTagPostConnection";
    items?: Array<{
      __typename: "TagPost";
      id: string;
      postID: string;
      tagID: string;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    } | null> | null;
    nextToken?: string | null;
  } | null;
};

export type DeletePostMutation = {
  __typename: "Post";
  id: string;
  title: string;
  content: string;
  owner?: string | null;
  profileID: string;
  createdAt: string;
  updatedAt: string;
  profile?: {
    __typename: "Profile";
    id: string;
    username: string;
    email: string;
    createdAt: string;
    updatedAt: string;
    profilePictureURL?: string | null;
    posts?: {
      __typename: "ModelPostConnection";
      nextToken?: string | null;
    } | null;
    comments?: {
      __typename: "ModelCommentConnection";
      nextToken?: string | null;
    } | null;
  } | null;
  comments?: {
    __typename: "ModelCommentConnection";
    items?: Array<{
      __typename: "Comment";
      id: string;
      postID: string;
      content: string;
      owner?: string | null;
      profileID: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  tags?: {
    __typename: "ModelTagPostConnection";
    items?: Array<{
      __typename: "TagPost";
      id: string;
      postID: string;
      tagID: string;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    } | null> | null;
    nextToken?: string | null;
  } | null;
};

export type CreateCommentMutation = {
  __typename: "Comment";
  id: string;
  postID: string;
  content: string;
  owner?: string | null;
  profileID: string;
  createdAt: string;
  updatedAt: string;
  profile?: {
    __typename: "Profile";
    id: string;
    username: string;
    email: string;
    createdAt: string;
    updatedAt: string;
    profilePictureURL?: string | null;
    posts?: {
      __typename: "ModelPostConnection";
      nextToken?: string | null;
    } | null;
    comments?: {
      __typename: "ModelCommentConnection";
      nextToken?: string | null;
    } | null;
  } | null;
  post?: {
    __typename: "Post";
    id: string;
    title: string;
    content: string;
    owner?: string | null;
    profileID: string;
    createdAt: string;
    updatedAt: string;
    profile?: {
      __typename: "Profile";
      id: string;
      username: string;
      email: string;
      createdAt: string;
      updatedAt: string;
      profilePictureURL?: string | null;
    } | null;
    comments?: {
      __typename: "ModelCommentConnection";
      nextToken?: string | null;
    } | null;
    tags?: {
      __typename: "ModelTagPostConnection";
      nextToken?: string | null;
    } | null;
  } | null;
};

export type UpdateCommentMutation = {
  __typename: "Comment";
  id: string;
  postID: string;
  content: string;
  owner?: string | null;
  profileID: string;
  createdAt: string;
  updatedAt: string;
  profile?: {
    __typename: "Profile";
    id: string;
    username: string;
    email: string;
    createdAt: string;
    updatedAt: string;
    profilePictureURL?: string | null;
    posts?: {
      __typename: "ModelPostConnection";
      nextToken?: string | null;
    } | null;
    comments?: {
      __typename: "ModelCommentConnection";
      nextToken?: string | null;
    } | null;
  } | null;
  post?: {
    __typename: "Post";
    id: string;
    title: string;
    content: string;
    owner?: string | null;
    profileID: string;
    createdAt: string;
    updatedAt: string;
    profile?: {
      __typename: "Profile";
      id: string;
      username: string;
      email: string;
      createdAt: string;
      updatedAt: string;
      profilePictureURL?: string | null;
    } | null;
    comments?: {
      __typename: "ModelCommentConnection";
      nextToken?: string | null;
    } | null;
    tags?: {
      __typename: "ModelTagPostConnection";
      nextToken?: string | null;
    } | null;
  } | null;
};

export type DeleteCommentMutation = {
  __typename: "Comment";
  id: string;
  postID: string;
  content: string;
  owner?: string | null;
  profileID: string;
  createdAt: string;
  updatedAt: string;
  profile?: {
    __typename: "Profile";
    id: string;
    username: string;
    email: string;
    createdAt: string;
    updatedAt: string;
    profilePictureURL?: string | null;
    posts?: {
      __typename: "ModelPostConnection";
      nextToken?: string | null;
    } | null;
    comments?: {
      __typename: "ModelCommentConnection";
      nextToken?: string | null;
    } | null;
  } | null;
  post?: {
    __typename: "Post";
    id: string;
    title: string;
    content: string;
    owner?: string | null;
    profileID: string;
    createdAt: string;
    updatedAt: string;
    profile?: {
      __typename: "Profile";
      id: string;
      username: string;
      email: string;
      createdAt: string;
      updatedAt: string;
      profilePictureURL?: string | null;
    } | null;
    comments?: {
      __typename: "ModelCommentConnection";
      nextToken?: string | null;
    } | null;
    tags?: {
      __typename: "ModelTagPostConnection";
      nextToken?: string | null;
    } | null;
  } | null;
};

export type CreateTagMutation = {
  __typename: "Tag";
  id: string;
  tag: string;
  createdAt: string;
  updatedAt: string;
  posts?: {
    __typename: "ModelTagPostConnection";
    items?: Array<{
      __typename: "TagPost";
      id: string;
      postID: string;
      tagID: string;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    } | null> | null;
    nextToken?: string | null;
  } | null;
};

export type UpdateTagMutation = {
  __typename: "Tag";
  id: string;
  tag: string;
  createdAt: string;
  updatedAt: string;
  posts?: {
    __typename: "ModelTagPostConnection";
    items?: Array<{
      __typename: "TagPost";
      id: string;
      postID: string;
      tagID: string;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    } | null> | null;
    nextToken?: string | null;
  } | null;
};

export type DeleteTagMutation = {
  __typename: "Tag";
  id: string;
  tag: string;
  createdAt: string;
  updatedAt: string;
  posts?: {
    __typename: "ModelTagPostConnection";
    items?: Array<{
      __typename: "TagPost";
      id: string;
      postID: string;
      tagID: string;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    } | null> | null;
    nextToken?: string | null;
  } | null;
};

export type CreateTagPostMutation = {
  __typename: "TagPost";
  id: string;
  postID: string;
  tagID: string;
  createdAt: string;
  updatedAt: string;
  post: {
    __typename: "Post";
    id: string;
    title: string;
    content: string;
    owner?: string | null;
    profileID: string;
    createdAt: string;
    updatedAt: string;
    profile?: {
      __typename: "Profile";
      id: string;
      username: string;
      email: string;
      createdAt: string;
      updatedAt: string;
      profilePictureURL?: string | null;
    } | null;
    comments?: {
      __typename: "ModelCommentConnection";
      nextToken?: string | null;
    } | null;
    tags?: {
      __typename: "ModelTagPostConnection";
      nextToken?: string | null;
    } | null;
  };
  tag: {
    __typename: "Tag";
    id: string;
    tag: string;
    createdAt: string;
    updatedAt: string;
    posts?: {
      __typename: "ModelTagPostConnection";
      nextToken?: string | null;
    } | null;
  };
  owner?: string | null;
};

export type UpdateTagPostMutation = {
  __typename: "TagPost";
  id: string;
  postID: string;
  tagID: string;
  createdAt: string;
  updatedAt: string;
  post: {
    __typename: "Post";
    id: string;
    title: string;
    content: string;
    owner?: string | null;
    profileID: string;
    createdAt: string;
    updatedAt: string;
    profile?: {
      __typename: "Profile";
      id: string;
      username: string;
      email: string;
      createdAt: string;
      updatedAt: string;
      profilePictureURL?: string | null;
    } | null;
    comments?: {
      __typename: "ModelCommentConnection";
      nextToken?: string | null;
    } | null;
    tags?: {
      __typename: "ModelTagPostConnection";
      nextToken?: string | null;
    } | null;
  };
  tag: {
    __typename: "Tag";
    id: string;
    tag: string;
    createdAt: string;
    updatedAt: string;
    posts?: {
      __typename: "ModelTagPostConnection";
      nextToken?: string | null;
    } | null;
  };
  owner?: string | null;
};

export type DeleteTagPostMutation = {
  __typename: "TagPost";
  id: string;
  postID: string;
  tagID: string;
  createdAt: string;
  updatedAt: string;
  post: {
    __typename: "Post";
    id: string;
    title: string;
    content: string;
    owner?: string | null;
    profileID: string;
    createdAt: string;
    updatedAt: string;
    profile?: {
      __typename: "Profile";
      id: string;
      username: string;
      email: string;
      createdAt: string;
      updatedAt: string;
      profilePictureURL?: string | null;
    } | null;
    comments?: {
      __typename: "ModelCommentConnection";
      nextToken?: string | null;
    } | null;
    tags?: {
      __typename: "ModelTagPostConnection";
      nextToken?: string | null;
    } | null;
  };
  tag: {
    __typename: "Tag";
    id: string;
    tag: string;
    createdAt: string;
    updatedAt: string;
    posts?: {
      __typename: "ModelTagPostConnection";
      nextToken?: string | null;
    } | null;
  };
  owner?: string | null;
};

export type GetProfileQuery = {
  __typename: "Profile";
  id: string;
  username: string;
  email: string;
  createdAt: string;
  updatedAt: string;
  profilePictureURL?: string | null;
  posts?: {
    __typename: "ModelPostConnection";
    items?: Array<{
      __typename: "Post";
      id: string;
      title: string;
      content: string;
      owner?: string | null;
      profileID: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  comments?: {
    __typename: "ModelCommentConnection";
    items?: Array<{
      __typename: "Comment";
      id: string;
      postID: string;
      content: string;
      owner?: string | null;
      profileID: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken?: string | null;
  } | null;
};

export type ListProfilesQuery = {
  __typename: "ModelProfileConnection";
  items?: Array<{
    __typename: "Profile";
    id: string;
    username: string;
    email: string;
    createdAt: string;
    updatedAt: string;
    profilePictureURL?: string | null;
    posts?: {
      __typename: "ModelPostConnection";
      nextToken?: string | null;
    } | null;
    comments?: {
      __typename: "ModelCommentConnection";
      nextToken?: string | null;
    } | null;
  } | null> | null;
  nextToken?: string | null;
};

export type ListPostsQuery = {
  __typename: "ModelPostConnection";
  items?: Array<{
    __typename: "Post";
    id: string;
    title: string;
    content: string;
    owner?: string | null;
    profileID: string;
    createdAt: string;
    updatedAt: string;
    profile?: {
      __typename: "Profile";
      id: string;
      username: string;
      email: string;
      createdAt: string;
      updatedAt: string;
      profilePictureURL?: string | null;
    } | null;
    comments?: {
      __typename: "ModelCommentConnection";
      nextToken?: string | null;
    } | null;
    tags?: {
      __typename: "ModelTagPostConnection";
      nextToken?: string | null;
    } | null;
  } | null> | null;
  nextToken?: string | null;
};

export type GetPostQuery = {
  __typename: "Post";
  id: string;
  title: string;
  content: string;
  owner?: string | null;
  profileID: string;
  createdAt: string;
  updatedAt: string;
  profile?: {
    __typename: "Profile";
    id: string;
    username: string;
    email: string;
    createdAt: string;
    updatedAt: string;
    profilePictureURL?: string | null;
    posts?: {
      __typename: "ModelPostConnection";
      nextToken?: string | null;
    } | null;
    comments?: {
      __typename: "ModelCommentConnection";
      nextToken?: string | null;
    } | null;
  } | null;
  comments?: {
    __typename: "ModelCommentConnection";
    items?: Array<{
      __typename: "Comment";
      id: string;
      postID: string;
      content: string;
      owner?: string | null;
      profileID: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  tags?: {
    __typename: "ModelTagPostConnection";
    items?: Array<{
      __typename: "TagPost";
      id: string;
      postID: string;
      tagID: string;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    } | null> | null;
    nextToken?: string | null;
  } | null;
};

export type GetCommentQuery = {
  __typename: "Comment";
  id: string;
  postID: string;
  content: string;
  owner?: string | null;
  profileID: string;
  createdAt: string;
  updatedAt: string;
  profile?: {
    __typename: "Profile";
    id: string;
    username: string;
    email: string;
    createdAt: string;
    updatedAt: string;
    profilePictureURL?: string | null;
    posts?: {
      __typename: "ModelPostConnection";
      nextToken?: string | null;
    } | null;
    comments?: {
      __typename: "ModelCommentConnection";
      nextToken?: string | null;
    } | null;
  } | null;
  post?: {
    __typename: "Post";
    id: string;
    title: string;
    content: string;
    owner?: string | null;
    profileID: string;
    createdAt: string;
    updatedAt: string;
    profile?: {
      __typename: "Profile";
      id: string;
      username: string;
      email: string;
      createdAt: string;
      updatedAt: string;
      profilePictureURL?: string | null;
    } | null;
    comments?: {
      __typename: "ModelCommentConnection";
      nextToken?: string | null;
    } | null;
    tags?: {
      __typename: "ModelTagPostConnection";
      nextToken?: string | null;
    } | null;
  } | null;
};

export type ListCommentsQuery = {
  __typename: "ModelCommentConnection";
  items?: Array<{
    __typename: "Comment";
    id: string;
    postID: string;
    content: string;
    owner?: string | null;
    profileID: string;
    createdAt: string;
    updatedAt: string;
    profile?: {
      __typename: "Profile";
      id: string;
      username: string;
      email: string;
      createdAt: string;
      updatedAt: string;
      profilePictureURL?: string | null;
    } | null;
    post?: {
      __typename: "Post";
      id: string;
      title: string;
      content: string;
      owner?: string | null;
      profileID: string;
      createdAt: string;
      updatedAt: string;
    } | null;
  } | null> | null;
  nextToken?: string | null;
};

export type ListTagsQuery = {
  __typename: "ModelTagConnection";
  items?: Array<{
    __typename: "Tag";
    id: string;
    tag: string;
    createdAt: string;
    updatedAt: string;
    posts?: {
      __typename: "ModelTagPostConnection";
      nextToken?: string | null;
    } | null;
  } | null> | null;
  nextToken?: string | null;
};

export type GetTagQuery = {
  __typename: "Tag";
  id: string;
  tag: string;
  createdAt: string;
  updatedAt: string;
  posts?: {
    __typename: "ModelTagPostConnection";
    items?: Array<{
      __typename: "TagPost";
      id: string;
      postID: string;
      tagID: string;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    } | null> | null;
    nextToken?: string | null;
  } | null;
};

export type GetTagPostQuery = {
  __typename: "TagPost";
  id: string;
  postID: string;
  tagID: string;
  createdAt: string;
  updatedAt: string;
  post: {
    __typename: "Post";
    id: string;
    title: string;
    content: string;
    owner?: string | null;
    profileID: string;
    createdAt: string;
    updatedAt: string;
    profile?: {
      __typename: "Profile";
      id: string;
      username: string;
      email: string;
      createdAt: string;
      updatedAt: string;
      profilePictureURL?: string | null;
    } | null;
    comments?: {
      __typename: "ModelCommentConnection";
      nextToken?: string | null;
    } | null;
    tags?: {
      __typename: "ModelTagPostConnection";
      nextToken?: string | null;
    } | null;
  };
  tag: {
    __typename: "Tag";
    id: string;
    tag: string;
    createdAt: string;
    updatedAt: string;
    posts?: {
      __typename: "ModelTagPostConnection";
      nextToken?: string | null;
    } | null;
  };
  owner?: string | null;
};

export type ListTagPostsQuery = {
  __typename: "ModelTagPostConnection";
  items?: Array<{
    __typename: "TagPost";
    id: string;
    postID: string;
    tagID: string;
    createdAt: string;
    updatedAt: string;
    post: {
      __typename: "Post";
      id: string;
      title: string;
      content: string;
      owner?: string | null;
      profileID: string;
      createdAt: string;
      updatedAt: string;
    };
    tag: {
      __typename: "Tag";
      id: string;
      tag: string;
      createdAt: string;
      updatedAt: string;
    };
    owner?: string | null;
  } | null> | null;
  nextToken?: string | null;
};

export type OnCreateProfileSubscription = {
  __typename: "Profile";
  id: string;
  username: string;
  email: string;
  createdAt: string;
  updatedAt: string;
  profilePictureURL?: string | null;
  posts?: {
    __typename: "ModelPostConnection";
    items?: Array<{
      __typename: "Post";
      id: string;
      title: string;
      content: string;
      owner?: string | null;
      profileID: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  comments?: {
    __typename: "ModelCommentConnection";
    items?: Array<{
      __typename: "Comment";
      id: string;
      postID: string;
      content: string;
      owner?: string | null;
      profileID: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken?: string | null;
  } | null;
};

export type OnUpdateProfileSubscription = {
  __typename: "Profile";
  id: string;
  username: string;
  email: string;
  createdAt: string;
  updatedAt: string;
  profilePictureURL?: string | null;
  posts?: {
    __typename: "ModelPostConnection";
    items?: Array<{
      __typename: "Post";
      id: string;
      title: string;
      content: string;
      owner?: string | null;
      profileID: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  comments?: {
    __typename: "ModelCommentConnection";
    items?: Array<{
      __typename: "Comment";
      id: string;
      postID: string;
      content: string;
      owner?: string | null;
      profileID: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken?: string | null;
  } | null;
};

export type OnDeleteProfileSubscription = {
  __typename: "Profile";
  id: string;
  username: string;
  email: string;
  createdAt: string;
  updatedAt: string;
  profilePictureURL?: string | null;
  posts?: {
    __typename: "ModelPostConnection";
    items?: Array<{
      __typename: "Post";
      id: string;
      title: string;
      content: string;
      owner?: string | null;
      profileID: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  comments?: {
    __typename: "ModelCommentConnection";
    items?: Array<{
      __typename: "Comment";
      id: string;
      postID: string;
      content: string;
      owner?: string | null;
      profileID: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken?: string | null;
  } | null;
};

export type OnCreatePostSubscription = {
  __typename: "Post";
  id: string;
  title: string;
  content: string;
  owner?: string | null;
  profileID: string;
  createdAt: string;
  updatedAt: string;
  profile?: {
    __typename: "Profile";
    id: string;
    username: string;
    email: string;
    createdAt: string;
    updatedAt: string;
    profilePictureURL?: string | null;
    posts?: {
      __typename: "ModelPostConnection";
      nextToken?: string | null;
    } | null;
    comments?: {
      __typename: "ModelCommentConnection";
      nextToken?: string | null;
    } | null;
  } | null;
  comments?: {
    __typename: "ModelCommentConnection";
    items?: Array<{
      __typename: "Comment";
      id: string;
      postID: string;
      content: string;
      owner?: string | null;
      profileID: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  tags?: {
    __typename: "ModelTagPostConnection";
    items?: Array<{
      __typename: "TagPost";
      id: string;
      postID: string;
      tagID: string;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    } | null> | null;
    nextToken?: string | null;
  } | null;
};

export type OnUpdatePostSubscription = {
  __typename: "Post";
  id: string;
  title: string;
  content: string;
  owner?: string | null;
  profileID: string;
  createdAt: string;
  updatedAt: string;
  profile?: {
    __typename: "Profile";
    id: string;
    username: string;
    email: string;
    createdAt: string;
    updatedAt: string;
    profilePictureURL?: string | null;
    posts?: {
      __typename: "ModelPostConnection";
      nextToken?: string | null;
    } | null;
    comments?: {
      __typename: "ModelCommentConnection";
      nextToken?: string | null;
    } | null;
  } | null;
  comments?: {
    __typename: "ModelCommentConnection";
    items?: Array<{
      __typename: "Comment";
      id: string;
      postID: string;
      content: string;
      owner?: string | null;
      profileID: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  tags?: {
    __typename: "ModelTagPostConnection";
    items?: Array<{
      __typename: "TagPost";
      id: string;
      postID: string;
      tagID: string;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    } | null> | null;
    nextToken?: string | null;
  } | null;
};

export type OnDeletePostSubscription = {
  __typename: "Post";
  id: string;
  title: string;
  content: string;
  owner?: string | null;
  profileID: string;
  createdAt: string;
  updatedAt: string;
  profile?: {
    __typename: "Profile";
    id: string;
    username: string;
    email: string;
    createdAt: string;
    updatedAt: string;
    profilePictureURL?: string | null;
    posts?: {
      __typename: "ModelPostConnection";
      nextToken?: string | null;
    } | null;
    comments?: {
      __typename: "ModelCommentConnection";
      nextToken?: string | null;
    } | null;
  } | null;
  comments?: {
    __typename: "ModelCommentConnection";
    items?: Array<{
      __typename: "Comment";
      id: string;
      postID: string;
      content: string;
      owner?: string | null;
      profileID: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  tags?: {
    __typename: "ModelTagPostConnection";
    items?: Array<{
      __typename: "TagPost";
      id: string;
      postID: string;
      tagID: string;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    } | null> | null;
    nextToken?: string | null;
  } | null;
};

export type OnCreateCommentSubscription = {
  __typename: "Comment";
  id: string;
  postID: string;
  content: string;
  owner?: string | null;
  profileID: string;
  createdAt: string;
  updatedAt: string;
  profile?: {
    __typename: "Profile";
    id: string;
    username: string;
    email: string;
    createdAt: string;
    updatedAt: string;
    profilePictureURL?: string | null;
    posts?: {
      __typename: "ModelPostConnection";
      nextToken?: string | null;
    } | null;
    comments?: {
      __typename: "ModelCommentConnection";
      nextToken?: string | null;
    } | null;
  } | null;
  post?: {
    __typename: "Post";
    id: string;
    title: string;
    content: string;
    owner?: string | null;
    profileID: string;
    createdAt: string;
    updatedAt: string;
    profile?: {
      __typename: "Profile";
      id: string;
      username: string;
      email: string;
      createdAt: string;
      updatedAt: string;
      profilePictureURL?: string | null;
    } | null;
    comments?: {
      __typename: "ModelCommentConnection";
      nextToken?: string | null;
    } | null;
    tags?: {
      __typename: "ModelTagPostConnection";
      nextToken?: string | null;
    } | null;
  } | null;
};

export type OnUpdateCommentSubscription = {
  __typename: "Comment";
  id: string;
  postID: string;
  content: string;
  owner?: string | null;
  profileID: string;
  createdAt: string;
  updatedAt: string;
  profile?: {
    __typename: "Profile";
    id: string;
    username: string;
    email: string;
    createdAt: string;
    updatedAt: string;
    profilePictureURL?: string | null;
    posts?: {
      __typename: "ModelPostConnection";
      nextToken?: string | null;
    } | null;
    comments?: {
      __typename: "ModelCommentConnection";
      nextToken?: string | null;
    } | null;
  } | null;
  post?: {
    __typename: "Post";
    id: string;
    title: string;
    content: string;
    owner?: string | null;
    profileID: string;
    createdAt: string;
    updatedAt: string;
    profile?: {
      __typename: "Profile";
      id: string;
      username: string;
      email: string;
      createdAt: string;
      updatedAt: string;
      profilePictureURL?: string | null;
    } | null;
    comments?: {
      __typename: "ModelCommentConnection";
      nextToken?: string | null;
    } | null;
    tags?: {
      __typename: "ModelTagPostConnection";
      nextToken?: string | null;
    } | null;
  } | null;
};

export type OnDeleteCommentSubscription = {
  __typename: "Comment";
  id: string;
  postID: string;
  content: string;
  owner?: string | null;
  profileID: string;
  createdAt: string;
  updatedAt: string;
  profile?: {
    __typename: "Profile";
    id: string;
    username: string;
    email: string;
    createdAt: string;
    updatedAt: string;
    profilePictureURL?: string | null;
    posts?: {
      __typename: "ModelPostConnection";
      nextToken?: string | null;
    } | null;
    comments?: {
      __typename: "ModelCommentConnection";
      nextToken?: string | null;
    } | null;
  } | null;
  post?: {
    __typename: "Post";
    id: string;
    title: string;
    content: string;
    owner?: string | null;
    profileID: string;
    createdAt: string;
    updatedAt: string;
    profile?: {
      __typename: "Profile";
      id: string;
      username: string;
      email: string;
      createdAt: string;
      updatedAt: string;
      profilePictureURL?: string | null;
    } | null;
    comments?: {
      __typename: "ModelCommentConnection";
      nextToken?: string | null;
    } | null;
    tags?: {
      __typename: "ModelTagPostConnection";
      nextToken?: string | null;
    } | null;
  } | null;
};

export type OnCreateTagSubscription = {
  __typename: "Tag";
  id: string;
  tag: string;
  createdAt: string;
  updatedAt: string;
  posts?: {
    __typename: "ModelTagPostConnection";
    items?: Array<{
      __typename: "TagPost";
      id: string;
      postID: string;
      tagID: string;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    } | null> | null;
    nextToken?: string | null;
  } | null;
};

export type OnUpdateTagSubscription = {
  __typename: "Tag";
  id: string;
  tag: string;
  createdAt: string;
  updatedAt: string;
  posts?: {
    __typename: "ModelTagPostConnection";
    items?: Array<{
      __typename: "TagPost";
      id: string;
      postID: string;
      tagID: string;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    } | null> | null;
    nextToken?: string | null;
  } | null;
};

export type OnDeleteTagSubscription = {
  __typename: "Tag";
  id: string;
  tag: string;
  createdAt: string;
  updatedAt: string;
  posts?: {
    __typename: "ModelTagPostConnection";
    items?: Array<{
      __typename: "TagPost";
      id: string;
      postID: string;
      tagID: string;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    } | null> | null;
    nextToken?: string | null;
  } | null;
};

export type OnCreateTagPostSubscription = {
  __typename: "TagPost";
  id: string;
  postID: string;
  tagID: string;
  createdAt: string;
  updatedAt: string;
  post: {
    __typename: "Post";
    id: string;
    title: string;
    content: string;
    owner?: string | null;
    profileID: string;
    createdAt: string;
    updatedAt: string;
    profile?: {
      __typename: "Profile";
      id: string;
      username: string;
      email: string;
      createdAt: string;
      updatedAt: string;
      profilePictureURL?: string | null;
    } | null;
    comments?: {
      __typename: "ModelCommentConnection";
      nextToken?: string | null;
    } | null;
    tags?: {
      __typename: "ModelTagPostConnection";
      nextToken?: string | null;
    } | null;
  };
  tag: {
    __typename: "Tag";
    id: string;
    tag: string;
    createdAt: string;
    updatedAt: string;
    posts?: {
      __typename: "ModelTagPostConnection";
      nextToken?: string | null;
    } | null;
  };
  owner?: string | null;
};

export type OnUpdateTagPostSubscription = {
  __typename: "TagPost";
  id: string;
  postID: string;
  tagID: string;
  createdAt: string;
  updatedAt: string;
  post: {
    __typename: "Post";
    id: string;
    title: string;
    content: string;
    owner?: string | null;
    profileID: string;
    createdAt: string;
    updatedAt: string;
    profile?: {
      __typename: "Profile";
      id: string;
      username: string;
      email: string;
      createdAt: string;
      updatedAt: string;
      profilePictureURL?: string | null;
    } | null;
    comments?: {
      __typename: "ModelCommentConnection";
      nextToken?: string | null;
    } | null;
    tags?: {
      __typename: "ModelTagPostConnection";
      nextToken?: string | null;
    } | null;
  };
  tag: {
    __typename: "Tag";
    id: string;
    tag: string;
    createdAt: string;
    updatedAt: string;
    posts?: {
      __typename: "ModelTagPostConnection";
      nextToken?: string | null;
    } | null;
  };
  owner?: string | null;
};

export type OnDeleteTagPostSubscription = {
  __typename: "TagPost";
  id: string;
  postID: string;
  tagID: string;
  createdAt: string;
  updatedAt: string;
  post: {
    __typename: "Post";
    id: string;
    title: string;
    content: string;
    owner?: string | null;
    profileID: string;
    createdAt: string;
    updatedAt: string;
    profile?: {
      __typename: "Profile";
      id: string;
      username: string;
      email: string;
      createdAt: string;
      updatedAt: string;
      profilePictureURL?: string | null;
    } | null;
    comments?: {
      __typename: "ModelCommentConnection";
      nextToken?: string | null;
    } | null;
    tags?: {
      __typename: "ModelTagPostConnection";
      nextToken?: string | null;
    } | null;
  };
  tag: {
    __typename: "Tag";
    id: string;
    tag: string;
    createdAt: string;
    updatedAt: string;
    posts?: {
      __typename: "ModelTagPostConnection";
      nextToken?: string | null;
    } | null;
  };
  owner?: string | null;
};

@Injectable({
  providedIn: "root"
})
export class APIService {
  async CreateProfile(
    input: CreateProfileInput,
    condition?: ModelProfileConditionInput
  ): Promise<CreateProfileMutation> {
    const statement = `mutation CreateProfile($input: CreateProfileInput!, $condition: ModelProfileConditionInput) {
        createProfile(input: $input, condition: $condition) {
          __typename
          id
          username
          email
          createdAt
          updatedAt
          profilePictureURL
          posts {
            __typename
            items {
              __typename
              id
              title
              content
              owner
              profileID
              createdAt
              updatedAt
            }
            nextToken
          }
          comments {
            __typename
            items {
              __typename
              id
              postID
              content
              owner
              profileID
              createdAt
              updatedAt
            }
            nextToken
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateProfileMutation>response.data.createProfile;
  }
  async UpdateProfile(
    input: UpdateProfileInput,
    condition?: ModelProfileConditionInput
  ): Promise<UpdateProfileMutation> {
    const statement = `mutation UpdateProfile($input: UpdateProfileInput!, $condition: ModelProfileConditionInput) {
        updateProfile(input: $input, condition: $condition) {
          __typename
          id
          username
          email
          createdAt
          updatedAt
          profilePictureURL
          posts {
            __typename
            items {
              __typename
              id
              title
              content
              owner
              profileID
              createdAt
              updatedAt
            }
            nextToken
          }
          comments {
            __typename
            items {
              __typename
              id
              postID
              content
              owner
              profileID
              createdAt
              updatedAt
            }
            nextToken
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateProfileMutation>response.data.updateProfile;
  }
  async DeleteProfile(
    input: DeleteProfileInput,
    condition?: ModelProfileConditionInput
  ): Promise<DeleteProfileMutation> {
    const statement = `mutation DeleteProfile($input: DeleteProfileInput!, $condition: ModelProfileConditionInput) {
        deleteProfile(input: $input, condition: $condition) {
          __typename
          id
          username
          email
          createdAt
          updatedAt
          profilePictureURL
          posts {
            __typename
            items {
              __typename
              id
              title
              content
              owner
              profileID
              createdAt
              updatedAt
            }
            nextToken
          }
          comments {
            __typename
            items {
              __typename
              id
              postID
              content
              owner
              profileID
              createdAt
              updatedAt
            }
            nextToken
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteProfileMutation>response.data.deleteProfile;
  }
  async CreatePost(
    input: CreatePostInput,
    condition?: ModelPostConditionInput
  ): Promise<CreatePostMutation> {
    const statement = `mutation CreatePost($input: CreatePostInput!, $condition: ModelPostConditionInput) {
        createPost(input: $input, condition: $condition) {
          __typename
          id
          title
          content
          owner
          profileID
          createdAt
          updatedAt
          profile {
            __typename
            id
            username
            email
            createdAt
            updatedAt
            profilePictureURL
            posts {
              __typename
              nextToken
            }
            comments {
              __typename
              nextToken
            }
          }
          comments {
            __typename
            items {
              __typename
              id
              postID
              content
              owner
              profileID
              createdAt
              updatedAt
            }
            nextToken
          }
          tags {
            __typename
            items {
              __typename
              id
              postID
              tagID
              createdAt
              updatedAt
              owner
            }
            nextToken
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreatePostMutation>response.data.createPost;
  }
  async UpdatePost(
    input: UpdatePostInput,
    condition?: ModelPostConditionInput
  ): Promise<UpdatePostMutation> {
    const statement = `mutation UpdatePost($input: UpdatePostInput!, $condition: ModelPostConditionInput) {
        updatePost(input: $input, condition: $condition) {
          __typename
          id
          title
          content
          owner
          profileID
          createdAt
          updatedAt
          profile {
            __typename
            id
            username
            email
            createdAt
            updatedAt
            profilePictureURL
            posts {
              __typename
              nextToken
            }
            comments {
              __typename
              nextToken
            }
          }
          comments {
            __typename
            items {
              __typename
              id
              postID
              content
              owner
              profileID
              createdAt
              updatedAt
            }
            nextToken
          }
          tags {
            __typename
            items {
              __typename
              id
              postID
              tagID
              createdAt
              updatedAt
              owner
            }
            nextToken
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdatePostMutation>response.data.updatePost;
  }
  async DeletePost(
    input: DeletePostInput,
    condition?: ModelPostConditionInput
  ): Promise<DeletePostMutation> {
    const statement = `mutation DeletePost($input: DeletePostInput!, $condition: ModelPostConditionInput) {
        deletePost(input: $input, condition: $condition) {
          __typename
          id
          title
          content
          owner
          profileID
          createdAt
          updatedAt
          profile {
            __typename
            id
            username
            email
            createdAt
            updatedAt
            profilePictureURL
            posts {
              __typename
              nextToken
            }
            comments {
              __typename
              nextToken
            }
          }
          comments {
            __typename
            items {
              __typename
              id
              postID
              content
              owner
              profileID
              createdAt
              updatedAt
            }
            nextToken
          }
          tags {
            __typename
            items {
              __typename
              id
              postID
              tagID
              createdAt
              updatedAt
              owner
            }
            nextToken
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeletePostMutation>response.data.deletePost;
  }
  async CreateComment(
    input: CreateCommentInput,
    condition?: ModelCommentConditionInput
  ): Promise<CreateCommentMutation> {
    const statement = `mutation CreateComment($input: CreateCommentInput!, $condition: ModelCommentConditionInput) {
        createComment(input: $input, condition: $condition) {
          __typename
          id
          postID
          content
          owner
          profileID
          createdAt
          updatedAt
          profile {
            __typename
            id
            username
            email
            createdAt
            updatedAt
            profilePictureURL
            posts {
              __typename
              nextToken
            }
            comments {
              __typename
              nextToken
            }
          }
          post {
            __typename
            id
            title
            content
            owner
            profileID
            createdAt
            updatedAt
            profile {
              __typename
              id
              username
              email
              createdAt
              updatedAt
              profilePictureURL
            }
            comments {
              __typename
              nextToken
            }
            tags {
              __typename
              nextToken
            }
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateCommentMutation>response.data.createComment;
  }
  async UpdateComment(
    input: UpdateCommentInput,
    condition?: ModelCommentConditionInput
  ): Promise<UpdateCommentMutation> {
    const statement = `mutation UpdateComment($input: UpdateCommentInput!, $condition: ModelCommentConditionInput) {
        updateComment(input: $input, condition: $condition) {
          __typename
          id
          postID
          content
          owner
          profileID
          createdAt
          updatedAt
          profile {
            __typename
            id
            username
            email
            createdAt
            updatedAt
            profilePictureURL
            posts {
              __typename
              nextToken
            }
            comments {
              __typename
              nextToken
            }
          }
          post {
            __typename
            id
            title
            content
            owner
            profileID
            createdAt
            updatedAt
            profile {
              __typename
              id
              username
              email
              createdAt
              updatedAt
              profilePictureURL
            }
            comments {
              __typename
              nextToken
            }
            tags {
              __typename
              nextToken
            }
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateCommentMutation>response.data.updateComment;
  }
  async DeleteComment(
    input: DeleteCommentInput,
    condition?: ModelCommentConditionInput
  ): Promise<DeleteCommentMutation> {
    const statement = `mutation DeleteComment($input: DeleteCommentInput!, $condition: ModelCommentConditionInput) {
        deleteComment(input: $input, condition: $condition) {
          __typename
          id
          postID
          content
          owner
          profileID
          createdAt
          updatedAt
          profile {
            __typename
            id
            username
            email
            createdAt
            updatedAt
            profilePictureURL
            posts {
              __typename
              nextToken
            }
            comments {
              __typename
              nextToken
            }
          }
          post {
            __typename
            id
            title
            content
            owner
            profileID
            createdAt
            updatedAt
            profile {
              __typename
              id
              username
              email
              createdAt
              updatedAt
              profilePictureURL
            }
            comments {
              __typename
              nextToken
            }
            tags {
              __typename
              nextToken
            }
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteCommentMutation>response.data.deleteComment;
  }
  async CreateTag(
    input: CreateTagInput,
    condition?: ModelTagConditionInput
  ): Promise<CreateTagMutation> {
    const statement = `mutation CreateTag($input: CreateTagInput!, $condition: ModelTagConditionInput) {
        createTag(input: $input, condition: $condition) {
          __typename
          id
          tag
          createdAt
          updatedAt
          posts {
            __typename
            items {
              __typename
              id
              postID
              tagID
              createdAt
              updatedAt
              owner
            }
            nextToken
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateTagMutation>response.data.createTag;
  }
  async UpdateTag(
    input: UpdateTagInput,
    condition?: ModelTagConditionInput
  ): Promise<UpdateTagMutation> {
    const statement = `mutation UpdateTag($input: UpdateTagInput!, $condition: ModelTagConditionInput) {
        updateTag(input: $input, condition: $condition) {
          __typename
          id
          tag
          createdAt
          updatedAt
          posts {
            __typename
            items {
              __typename
              id
              postID
              tagID
              createdAt
              updatedAt
              owner
            }
            nextToken
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateTagMutation>response.data.updateTag;
  }
  async DeleteTag(
    input: DeleteTagInput,
    condition?: ModelTagConditionInput
  ): Promise<DeleteTagMutation> {
    const statement = `mutation DeleteTag($input: DeleteTagInput!, $condition: ModelTagConditionInput) {
        deleteTag(input: $input, condition: $condition) {
          __typename
          id
          tag
          createdAt
          updatedAt
          posts {
            __typename
            items {
              __typename
              id
              postID
              tagID
              createdAt
              updatedAt
              owner
            }
            nextToken
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteTagMutation>response.data.deleteTag;
  }
  async CreateTagPost(
    input: CreateTagPostInput,
    condition?: ModelTagPostConditionInput
  ): Promise<CreateTagPostMutation> {
    const statement = `mutation CreateTagPost($input: CreateTagPostInput!, $condition: ModelTagPostConditionInput) {
        createTagPost(input: $input, condition: $condition) {
          __typename
          id
          postID
          tagID
          createdAt
          updatedAt
          post {
            __typename
            id
            title
            content
            owner
            profileID
            createdAt
            updatedAt
            profile {
              __typename
              id
              username
              email
              createdAt
              updatedAt
              profilePictureURL
            }
            comments {
              __typename
              nextToken
            }
            tags {
              __typename
              nextToken
            }
          }
          tag {
            __typename
            id
            tag
            createdAt
            updatedAt
            posts {
              __typename
              nextToken
            }
          }
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateTagPostMutation>response.data.createTagPost;
  }
  async UpdateTagPost(
    input: UpdateTagPostInput,
    condition?: ModelTagPostConditionInput
  ): Promise<UpdateTagPostMutation> {
    const statement = `mutation UpdateTagPost($input: UpdateTagPostInput!, $condition: ModelTagPostConditionInput) {
        updateTagPost(input: $input, condition: $condition) {
          __typename
          id
          postID
          tagID
          createdAt
          updatedAt
          post {
            __typename
            id
            title
            content
            owner
            profileID
            createdAt
            updatedAt
            profile {
              __typename
              id
              username
              email
              createdAt
              updatedAt
              profilePictureURL
            }
            comments {
              __typename
              nextToken
            }
            tags {
              __typename
              nextToken
            }
          }
          tag {
            __typename
            id
            tag
            createdAt
            updatedAt
            posts {
              __typename
              nextToken
            }
          }
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateTagPostMutation>response.data.updateTagPost;
  }
  async DeleteTagPost(
    input: DeleteTagPostInput,
    condition?: ModelTagPostConditionInput
  ): Promise<DeleteTagPostMutation> {
    const statement = `mutation DeleteTagPost($input: DeleteTagPostInput!, $condition: ModelTagPostConditionInput) {
        deleteTagPost(input: $input, condition: $condition) {
          __typename
          id
          postID
          tagID
          createdAt
          updatedAt
          post {
            __typename
            id
            title
            content
            owner
            profileID
            createdAt
            updatedAt
            profile {
              __typename
              id
              username
              email
              createdAt
              updatedAt
              profilePictureURL
            }
            comments {
              __typename
              nextToken
            }
            tags {
              __typename
              nextToken
            }
          }
          tag {
            __typename
            id
            tag
            createdAt
            updatedAt
            posts {
              __typename
              nextToken
            }
          }
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteTagPostMutation>response.data.deleteTagPost;
  }
  async GetProfile(id: string): Promise<GetProfileQuery> {
    const statement = `query GetProfile($id: ID!) {
        getProfile(id: $id) {
          __typename
          id
          username
          email
          createdAt
          updatedAt
          profilePictureURL
          posts {
            __typename
            items {
              __typename
              id
              title
              content
              owner
              profileID
              createdAt
              updatedAt
            }
            nextToken
          }
          comments {
            __typename
            items {
              __typename
              id
              postID
              content
              owner
              profileID
              createdAt
              updatedAt
            }
            nextToken
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetProfileQuery>response.data.getProfile;
  }
  async ListProfiles(
    filter?: ModelProfileFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListProfilesQuery> {
    const statement = `query ListProfiles($filter: ModelProfileFilterInput, $limit: Int, $nextToken: String) {
        listProfiles(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            username
            email
            createdAt
            updatedAt
            profilePictureURL
            posts {
              __typename
              nextToken
            }
            comments {
              __typename
              nextToken
            }
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListProfilesQuery>response.data.listProfiles;
  }
  async ListPosts(
    filter?: ModelPostFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListPostsQuery> {
    const statement = `query ListPosts($filter: ModelPostFilterInput, $limit: Int, $nextToken: String) {
        listPosts(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            title
            content
            owner
            profileID
            createdAt
            updatedAt
            profile {
              __typename
              id
              username
              email
              createdAt
              updatedAt
              profilePictureURL
            }
            comments {
              __typename
              nextToken
            }
            tags {
              __typename
              nextToken
            }
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListPostsQuery>response.data.listPosts;
  }
  async GetPost(id: string): Promise<GetPostQuery> {
    const statement = `query GetPost($id: ID!) {
        getPost(id: $id) {
          __typename
          id
          title
          content
          owner
          profileID
          createdAt
          updatedAt
          profile {
            __typename
            id
            username
            email
            createdAt
            updatedAt
            profilePictureURL
            posts {
              __typename
              nextToken
            }
            comments {
              __typename
              nextToken
            }
          }
          comments {
            __typename
            items {
              __typename
              id
              postID
              content
              owner
              profileID
              createdAt
              updatedAt
            }
            nextToken
          }
          tags {
            __typename
            items {
              __typename
              id
              postID
              tagID
              createdAt
              updatedAt
              owner
            }
            nextToken
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetPostQuery>response.data.getPost;
  }
  async GetComment(id: string): Promise<GetCommentQuery> {
    const statement = `query GetComment($id: ID!) {
        getComment(id: $id) {
          __typename
          id
          postID
          content
          owner
          profileID
          createdAt
          updatedAt
          profile {
            __typename
            id
            username
            email
            createdAt
            updatedAt
            profilePictureURL
            posts {
              __typename
              nextToken
            }
            comments {
              __typename
              nextToken
            }
          }
          post {
            __typename
            id
            title
            content
            owner
            profileID
            createdAt
            updatedAt
            profile {
              __typename
              id
              username
              email
              createdAt
              updatedAt
              profilePictureURL
            }
            comments {
              __typename
              nextToken
            }
            tags {
              __typename
              nextToken
            }
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetCommentQuery>response.data.getComment;
  }
  async ListComments(
    filter?: ModelCommentFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListCommentsQuery> {
    const statement = `query ListComments($filter: ModelCommentFilterInput, $limit: Int, $nextToken: String) {
        listComments(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            postID
            content
            owner
            profileID
            createdAt
            updatedAt
            profile {
              __typename
              id
              username
              email
              createdAt
              updatedAt
              profilePictureURL
            }
            post {
              __typename
              id
              title
              content
              owner
              profileID
              createdAt
              updatedAt
            }
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListCommentsQuery>response.data.listComments;
  }
  async ListTags(
    filter?: ModelTagFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListTagsQuery> {
    const statement = `query ListTags($filter: ModelTagFilterInput, $limit: Int, $nextToken: String) {
        listTags(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            tag
            createdAt
            updatedAt
            posts {
              __typename
              nextToken
            }
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListTagsQuery>response.data.listTags;
  }
  async GetTag(id: string): Promise<GetTagQuery> {
    const statement = `query GetTag($id: ID!) {
        getTag(id: $id) {
          __typename
          id
          tag
          createdAt
          updatedAt
          posts {
            __typename
            items {
              __typename
              id
              postID
              tagID
              createdAt
              updatedAt
              owner
            }
            nextToken
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetTagQuery>response.data.getTag;
  }
  async GetTagPost(id: string): Promise<GetTagPostQuery> {
    const statement = `query GetTagPost($id: ID!) {
        getTagPost(id: $id) {
          __typename
          id
          postID
          tagID
          createdAt
          updatedAt
          post {
            __typename
            id
            title
            content
            owner
            profileID
            createdAt
            updatedAt
            profile {
              __typename
              id
              username
              email
              createdAt
              updatedAt
              profilePictureURL
            }
            comments {
              __typename
              nextToken
            }
            tags {
              __typename
              nextToken
            }
          }
          tag {
            __typename
            id
            tag
            createdAt
            updatedAt
            posts {
              __typename
              nextToken
            }
          }
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetTagPostQuery>response.data.getTagPost;
  }
  async ListTagPosts(
    filter?: ModelTagPostFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListTagPostsQuery> {
    const statement = `query ListTagPosts($filter: ModelTagPostFilterInput, $limit: Int, $nextToken: String) {
        listTagPosts(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            postID
            tagID
            createdAt
            updatedAt
            post {
              __typename
              id
              title
              content
              owner
              profileID
              createdAt
              updatedAt
            }
            tag {
              __typename
              id
              tag
              createdAt
              updatedAt
            }
            owner
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListTagPostsQuery>response.data.listTagPosts;
  }
  OnCreateProfileListener: Observable<
    SubscriptionResponse<OnCreateProfileSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateProfile {
        onCreateProfile {
          __typename
          id
          username
          email
          createdAt
          updatedAt
          profilePictureURL
          posts {
            __typename
            items {
              __typename
              id
              title
              content
              owner
              profileID
              createdAt
              updatedAt
            }
            nextToken
          }
          comments {
            __typename
            items {
              __typename
              id
              postID
              content
              owner
              profileID
              createdAt
              updatedAt
            }
            nextToken
          }
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnCreateProfileSubscription>>;

  OnUpdateProfileListener: Observable<
    SubscriptionResponse<OnUpdateProfileSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateProfile {
        onUpdateProfile {
          __typename
          id
          username
          email
          createdAt
          updatedAt
          profilePictureURL
          posts {
            __typename
            items {
              __typename
              id
              title
              content
              owner
              profileID
              createdAt
              updatedAt
            }
            nextToken
          }
          comments {
            __typename
            items {
              __typename
              id
              postID
              content
              owner
              profileID
              createdAt
              updatedAt
            }
            nextToken
          }
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnUpdateProfileSubscription>>;

  OnDeleteProfileListener: Observable<
    SubscriptionResponse<OnDeleteProfileSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteProfile {
        onDeleteProfile {
          __typename
          id
          username
          email
          createdAt
          updatedAt
          profilePictureURL
          posts {
            __typename
            items {
              __typename
              id
              title
              content
              owner
              profileID
              createdAt
              updatedAt
            }
            nextToken
          }
          comments {
            __typename
            items {
              __typename
              id
              postID
              content
              owner
              profileID
              createdAt
              updatedAt
            }
            nextToken
          }
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnDeleteProfileSubscription>>;

  OnCreatePostListener: Observable<
    SubscriptionResponse<OnCreatePostSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreatePost {
        onCreatePost {
          __typename
          id
          title
          content
          owner
          profileID
          createdAt
          updatedAt
          profile {
            __typename
            id
            username
            email
            createdAt
            updatedAt
            profilePictureURL
            posts {
              __typename
              nextToken
            }
            comments {
              __typename
              nextToken
            }
          }
          comments {
            __typename
            items {
              __typename
              id
              postID
              content
              owner
              profileID
              createdAt
              updatedAt
            }
            nextToken
          }
          tags {
            __typename
            items {
              __typename
              id
              postID
              tagID
              createdAt
              updatedAt
              owner
            }
            nextToken
          }
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnCreatePostSubscription>>;

  OnUpdatePostListener: Observable<
    SubscriptionResponse<OnUpdatePostSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdatePost {
        onUpdatePost {
          __typename
          id
          title
          content
          owner
          profileID
          createdAt
          updatedAt
          profile {
            __typename
            id
            username
            email
            createdAt
            updatedAt
            profilePictureURL
            posts {
              __typename
              nextToken
            }
            comments {
              __typename
              nextToken
            }
          }
          comments {
            __typename
            items {
              __typename
              id
              postID
              content
              owner
              profileID
              createdAt
              updatedAt
            }
            nextToken
          }
          tags {
            __typename
            items {
              __typename
              id
              postID
              tagID
              createdAt
              updatedAt
              owner
            }
            nextToken
          }
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnUpdatePostSubscription>>;

  OnDeletePostListener: Observable<
    SubscriptionResponse<OnDeletePostSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeletePost {
        onDeletePost {
          __typename
          id
          title
          content
          owner
          profileID
          createdAt
          updatedAt
          profile {
            __typename
            id
            username
            email
            createdAt
            updatedAt
            profilePictureURL
            posts {
              __typename
              nextToken
            }
            comments {
              __typename
              nextToken
            }
          }
          comments {
            __typename
            items {
              __typename
              id
              postID
              content
              owner
              profileID
              createdAt
              updatedAt
            }
            nextToken
          }
          tags {
            __typename
            items {
              __typename
              id
              postID
              tagID
              createdAt
              updatedAt
              owner
            }
            nextToken
          }
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnDeletePostSubscription>>;

  OnCreateCommentListener: Observable<
    SubscriptionResponse<OnCreateCommentSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateComment {
        onCreateComment {
          __typename
          id
          postID
          content
          owner
          profileID
          createdAt
          updatedAt
          profile {
            __typename
            id
            username
            email
            createdAt
            updatedAt
            profilePictureURL
            posts {
              __typename
              nextToken
            }
            comments {
              __typename
              nextToken
            }
          }
          post {
            __typename
            id
            title
            content
            owner
            profileID
            createdAt
            updatedAt
            profile {
              __typename
              id
              username
              email
              createdAt
              updatedAt
              profilePictureURL
            }
            comments {
              __typename
              nextToken
            }
            tags {
              __typename
              nextToken
            }
          }
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnCreateCommentSubscription>>;

  OnUpdateCommentListener: Observable<
    SubscriptionResponse<OnUpdateCommentSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateComment {
        onUpdateComment {
          __typename
          id
          postID
          content
          owner
          profileID
          createdAt
          updatedAt
          profile {
            __typename
            id
            username
            email
            createdAt
            updatedAt
            profilePictureURL
            posts {
              __typename
              nextToken
            }
            comments {
              __typename
              nextToken
            }
          }
          post {
            __typename
            id
            title
            content
            owner
            profileID
            createdAt
            updatedAt
            profile {
              __typename
              id
              username
              email
              createdAt
              updatedAt
              profilePictureURL
            }
            comments {
              __typename
              nextToken
            }
            tags {
              __typename
              nextToken
            }
          }
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnUpdateCommentSubscription>>;

  OnDeleteCommentListener: Observable<
    SubscriptionResponse<OnDeleteCommentSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteComment {
        onDeleteComment {
          __typename
          id
          postID
          content
          owner
          profileID
          createdAt
          updatedAt
          profile {
            __typename
            id
            username
            email
            createdAt
            updatedAt
            profilePictureURL
            posts {
              __typename
              nextToken
            }
            comments {
              __typename
              nextToken
            }
          }
          post {
            __typename
            id
            title
            content
            owner
            profileID
            createdAt
            updatedAt
            profile {
              __typename
              id
              username
              email
              createdAt
              updatedAt
              profilePictureURL
            }
            comments {
              __typename
              nextToken
            }
            tags {
              __typename
              nextToken
            }
          }
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnDeleteCommentSubscription>>;

  OnCreateTagListener: Observable<
    SubscriptionResponse<OnCreateTagSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateTag {
        onCreateTag {
          __typename
          id
          tag
          createdAt
          updatedAt
          posts {
            __typename
            items {
              __typename
              id
              postID
              tagID
              createdAt
              updatedAt
              owner
            }
            nextToken
          }
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnCreateTagSubscription>>;

  OnUpdateTagListener: Observable<
    SubscriptionResponse<OnUpdateTagSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateTag {
        onUpdateTag {
          __typename
          id
          tag
          createdAt
          updatedAt
          posts {
            __typename
            items {
              __typename
              id
              postID
              tagID
              createdAt
              updatedAt
              owner
            }
            nextToken
          }
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnUpdateTagSubscription>>;

  OnDeleteTagListener: Observable<
    SubscriptionResponse<OnDeleteTagSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteTag {
        onDeleteTag {
          __typename
          id
          tag
          createdAt
          updatedAt
          posts {
            __typename
            items {
              __typename
              id
              postID
              tagID
              createdAt
              updatedAt
              owner
            }
            nextToken
          }
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnDeleteTagSubscription>>;

  OnCreateTagPostListener: Observable<
    SubscriptionResponse<OnCreateTagPostSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateTagPost {
        onCreateTagPost {
          __typename
          id
          postID
          tagID
          createdAt
          updatedAt
          post {
            __typename
            id
            title
            content
            owner
            profileID
            createdAt
            updatedAt
            profile {
              __typename
              id
              username
              email
              createdAt
              updatedAt
              profilePictureURL
            }
            comments {
              __typename
              nextToken
            }
            tags {
              __typename
              nextToken
            }
          }
          tag {
            __typename
            id
            tag
            createdAt
            updatedAt
            posts {
              __typename
              nextToken
            }
          }
          owner
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnCreateTagPostSubscription>>;

  OnUpdateTagPostListener: Observable<
    SubscriptionResponse<OnUpdateTagPostSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateTagPost {
        onUpdateTagPost {
          __typename
          id
          postID
          tagID
          createdAt
          updatedAt
          post {
            __typename
            id
            title
            content
            owner
            profileID
            createdAt
            updatedAt
            profile {
              __typename
              id
              username
              email
              createdAt
              updatedAt
              profilePictureURL
            }
            comments {
              __typename
              nextToken
            }
            tags {
              __typename
              nextToken
            }
          }
          tag {
            __typename
            id
            tag
            createdAt
            updatedAt
            posts {
              __typename
              nextToken
            }
          }
          owner
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnUpdateTagPostSubscription>>;

  OnDeleteTagPostListener: Observable<
    SubscriptionResponse<OnDeleteTagPostSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteTagPost {
        onDeleteTagPost {
          __typename
          id
          postID
          tagID
          createdAt
          updatedAt
          post {
            __typename
            id
            title
            content
            owner
            profileID
            createdAt
            updatedAt
            profile {
              __typename
              id
              username
              email
              createdAt
              updatedAt
              profilePictureURL
            }
            comments {
              __typename
              nextToken
            }
            tags {
              __typename
              nextToken
            }
          }
          tag {
            __typename
            id
            tag
            createdAt
            updatedAt
            posts {
              __typename
              nextToken
            }
          }
          owner
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnDeleteTagPostSubscription>>;
}
