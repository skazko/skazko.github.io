import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import style from './blogTemplate.module.css';

export default function Template({ data }) {
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;

  return (
    <Layout>
      <article className={style.project}>
        <h1>{frontmatter.title}</h1>
        <div className={style.links}>
          <a
            href={frontmatter.repo}
            target="_blank"
            rel="noopener noreferrer"
          >Репозиторий</a> 
          <a
            href={frontmatter.url}
            target="_blank"
            rel="noopener noreferrer"
          >Деплой</a>
        </div>
        <video
          className={style.video} 
          loop
          autoPlay
          muted
          playsinline
          src={frontmatter.video.publicURL} 
          type="video/mp4" >
        </video>
        <div 
          dangerouslySetInnerHTML={{__html: html}}>
        </div>
      </article>
    </Layout>
  );
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: {path: {eq: $path}}) {
      html
      frontmatter {
        url
        repo
        path
        title
        video {
          publicURL
        }
      }
    }
  }
`;