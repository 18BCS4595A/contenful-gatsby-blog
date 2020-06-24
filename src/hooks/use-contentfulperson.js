import { graphql, useStaticQuery } from "gatsby";

const useContentfulPerson = ({ authorID }) => {
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
  return data.allContentfulPerson.personData[0];
};

export default useContentfulPerson;
