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
                fluid(
                  maxWidth: 1180
                  maxHeight: 480
                  resizingBehavior: PAD
                  background: "rgb:000000"
                ) {
                  ...GatsbyContentfulFluid_tracedSVG
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
