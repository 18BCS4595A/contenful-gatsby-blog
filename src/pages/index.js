import React from "react";
import Helmet from "react-helmet";
import Hero from "../components/hero";
import Layout from "../components/layout";
import ArticlePreview from "../components/article-preview";
import useSiteMetaData from "../hooks/use-sitemetadata";
import useContentfulPost from "../hooks/use-contentfulpost";
import useContentfulPerson from "../hooks/use-contentfulperson";

const RootIndex = () => {
  const posts = useContentfulPost();
  const { persons: author } = useContentfulPerson({
    authorID: "15jwOBqpxqSAOy2eOO4S0m",
  });
  const { title } = useSiteMetaData();
  return (
    <Layout>
      <div style={{ background: "#fff" }}>
        <Helmet title={title} />
        <Hero data={author} />
        <div className="wrapper">
          <h2 className="section-headline">Recent articles</h2>
          <ul className="article-list">
            {posts.map(({ post }) => {
              return (
                <li key={post.slug}>
                  <ArticlePreview article={post} />
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </Layout>
  );
};

export default RootIndex;
