import React from "react";

import Helmet from "react-helmet";
import styles from "./blog.module.css";
import Layout from "../components/layout";
import ArticlePreview from "../components/article-preview";
import useSiteMetaData from "../hooks/use-sitemetadata";
import useContentfulPost from "../hooks/use-contentfulpost";

const BlogIndex = () => {
  const { title } = useSiteMetaData();
  const posts = useContentfulPost();

  return (
    <Layout>
      <div style={{ background: "#fff" }}>
        <Helmet title={title} />
        <div className={styles.hero}>Blog</div>
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

export default BlogIndex;
