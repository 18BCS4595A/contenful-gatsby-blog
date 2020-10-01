import { graphql, useStaticQuery } from "gatsby";

/* this component is a custom hook for sourcing graphql data on contentfull data */
const useContentfulPost = () => {
  /* storing the sourced infromation into data variable */
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
                ...GatsbyContentfulFluid_withWebp
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
  /* returning the all the post informaation sourced to the higher component */
  return data.allContentfulBlogPost.posts;
};
/* exporting the hook */
export default useContentfulPost;
