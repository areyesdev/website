import { gql, GraphQLClient } from "graphql-request";

const endpoint = process.env.CONTENT_API;

const graphQLClient = new GraphQLClient(endpoint);

export const getPostsAndPortfolio = async () => {
  const query = gql`
    {
      posts(first: 3, orderBy: date_DESC) {
        title
        slug
        description
        date
        tags
        author {
          name
          image {
            url
            width
            height
          }
        }
      }
    }
  `;

  return await graphQLClient.request(query);
};

export const getPosts = async () => {
  const query = gql`
    {
      posts(orderBy: date_DESC) {
        title
        slug
        description
        date
        tags
        author {
          name
          image {
            url
            width
            height
          }
        }
      }
    }
  `;

  return await graphQLClient.request(query);
};

export const getBlogSlugs = async () => {
  const query = gql`
    {
      posts {
        slug
      }
    }
  `;

  return await graphQLClient.request(query);
};

export const getPost = async (slug) => {
  const query = gql`
    query getPost($slug: String!) {
      posts(where: { slug: $slug }) {
        title
        slug
        description
        date
        content
        tags
        author {
          name
          image {
            url
            width
            height
          }
        }
      }
    }
  `;

  const variables = {
    slug,
  };

  return await graphQLClient.request(query, variables);
};
