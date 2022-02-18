/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getPost = /* GraphQL */ `
  query GetPost($id: ID!) {
    getPost(id: $id) {
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
export const listPosts = /* GraphQL */ `
  query ListPosts($filter: ModelPostFilterInput, $limit: Int, $nextToken: String) {
    listPosts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        title
        comments {
          nextToken
        }
        id
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getComment = /* GraphQL */ `
  query GetComment($id: ID!) {
    getComment(id: $id) {
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
export const listComments = /* GraphQL */ `
  query ListComments($filter: ModelCommentFilterInput, $limit: Int, $nextToken: String) {
    listComments(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        post {
          title
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
      nextToken
    }
  }
`;
