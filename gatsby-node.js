exports.createPages = async ({ graphql, actions, reporter }) => {
  const result = await graphql(
    `
      {
        allContentfulBlogPost {
          edges {
            node {
              title
              slug
            }
          }
        }
      }
    `
  );
  if (result.errors) {
    reporter.panic("Failed to create posts");
  }
  const posts = result.data.allContentfulBlogPost.edges;
  posts.forEach((post) => {
    actions.createPage({
      path: `/blog/${post.node.slug}/`,
      component: require.resolve("./src/templates/blog-post.js"),
      context: {
        slug: post.node.slug,
      },
    });
  });
};
