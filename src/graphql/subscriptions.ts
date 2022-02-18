/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreatePost = /* GraphQL */ `
  subscription OnCreatePost($owner: String) {
    onCreatePost(owner: $owner) {
      title
      comments {
        items {
          content
          id
          createdAt
          updatedAt
          postCommentsId
          owner
        }
        nextToken
      }
      id
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdatePost = /* GraphQL */ `
  subscription OnUpdatePost($owner: String) {
    onUpdatePost(owner: $owner) {
      title
      comments {
        items {
          content
          id
          createdAt
          updatedAt
          postCommentsId
          owner
        }
        nextToken
      }
      id
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeletePost = /* GraphQL */ `
  subscription OnDeletePost($owner: String) {
    onDeletePost(owner: $owner) {
      title
      comments {
        items {
          content
          id
          createdAt
          updatedAt
          postCommentsId
          owner
        }
        nextToken
      }
      id
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onCreateComment = /* GraphQL */ `
  subscription OnCreateComment($owner: String) {
    onCreateComment(owner: $owner) {
      post {
        title
        comments {
          nextToken
        }
        id
        createdAt
        updatedAt
        owner
      }
      content
      id
      createdAt
      updatedAt
      postCommentsId
      owner
    }
  }
`;
export const onUpdateComment = /* GraphQL */ `
  subscription OnUpdateComment($owner: String) {
    onUpdateComment(owner: $owner) {
      post {
        title
        comments {
          nextToken
        }
        id
        createdAt
        updatedAt
        owner
      }
      content
      id
      createdAt
      updatedAt
      postCommentsId
      owner
    }
  }
`;
export const onDeleteComment = /* GraphQL */ `
  subscription OnDeleteComment($owner: String) {
    onDeleteComment(owner: $owner) {
      post {
        title
        comments {
          nextToken
        }
        id
        createdAt
        updatedAt
        owner
      }
      content
      id
      createdAt
      updatedAt
      postCommentsId
      owner
    }
  }
`;
