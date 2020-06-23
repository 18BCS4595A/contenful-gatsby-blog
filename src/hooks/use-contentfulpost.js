import { graphql, useStaticQuery } from "gatsby";

const useContentfulPost = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulBlogPost(sort: { fields: [publishDate], order: DESC }) {
        posts: edges {
          post: node {
            title
            slug
            publishDate(formatString: "MMMM Do, YYYY")
            tags
            heroImage {
              fluid(maxWidth: 350, maxHeight: 196, resizingBehavior: SCALE) {
                ...GatsbyContentfulFluid_tracedSVG
              }
            }
            description {
              childMarkdownRemark {
                html
              }
            }
          }
        }
      }
    }
  `);
  return data.allContentfulBlogPost.posts;
};

export default useContentfulPost;
