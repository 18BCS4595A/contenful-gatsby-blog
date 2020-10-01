import { graphql, useStaticQuery } from "gatsby";

/* this component is a custom hook for pulling out the author details */
const useContentfulPerson = ({ authorID }) => {
  /* usign a hook from gatsby to source graphql and find the author based on the author id recieved */
  const data = useStaticQuery(
    graphql`
      query($authorID: String) {
        allContentfulPerson(filter: { contentful_id: { eq: $authorID } }) {
          personData: edges {
            persons: node {
              name
              shortBio {
                shortBio
              }
              title
              heroImage: image {
                fluid {
                  ...GatsbyContentfulFluid_withWebp
                }
              }
            }
          }
        }
      }
    `,
    { authorID: authorID }
  );
  /* cleaning the recieved data and serving the all details of person as result of the author id passed TODO:if user is not found return relevant message*/
  return data.allContentfulPerson.personData[0];
};

export default useContentfulPerson;
