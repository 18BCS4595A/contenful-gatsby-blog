import React from "react";
import Helmet from "react-helmet";
import styles from "./blog.module.css";
import Layout from "../components/layout";
import ArticlePreview from "../components/article-preview";
import useSiteMetaData from "../hooks/use-sitemetadata";
import useContentfulPost from "../hooks/use-contentfulpost";


/* this is a blog index page */

const BlogIndex = () => {
  /* extracting the title from a customhook for post details */
  
  const { title } = useSiteMetaData();
  const posts = useContentfulPost();
 
  /* rendering out the post component on the basis of data recieved */
  
  return (
    <Layout>
      <div style={{ background: "#fff" }}>
        <Helmet title={title} />
        <div className={styles.hero}>Blog</div>
        <div className="wrapper">
          <h2 className="section-headline">Recent articles</h2>
          <ul className="article-list">
    {/* mapping through posts array */}
            {posts.map(({ post }) => {
              return (
                <li key={post.slug}>
                {/* rendering all the article preview component for more details ArticlePreview component will render the individual post from posts array */}
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

/* exporting the component */
export default BlogIndex;
