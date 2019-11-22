import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout';

import { FaGithub, FaEye } from "react-icons/fa";

const PostTemplate = ({ data }) => {
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;
  return (
    <Layout>
      <article className="single--container">
          <h2>{frontmatter.title}</h2>
          <div className="social--links">
            <a 
              href={frontmatter.preview}
              target="_blank"
              rel="noopener noreferrer"
              title={`${frontmatter.title} project preview`}>
            <FaEye className="icon__links" />
              </a>
            <a 
              href={frontmatter.github}
              target="_blank"
              rel="noopener noreferrer"
              title={`${frontmatter.title} project preview`}><FaGithub className="icon__links" />
              </a>
          </div>
        
        <div dangerouslySetInnerHTML={{ __html: html }}/>
      </article>
    </Layout>
  );
};

export default PostTemplate;

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
        preview
        github
      }
    }
  }
`;