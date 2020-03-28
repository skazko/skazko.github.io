import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import style from './blogTemplate.module.css';

export default function Template({ data }) {
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;
  console.log(frontmatter)
  return (
    <Layout>
      <main className={style.container}>
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
            // onMouseEnter={e => e.target.play()}
            // onMouseLeave={e => e.target.pause()}
            className={style.video} 
            loop
            autoPlay
            muted>
            <source src={frontmatter.video.publicURL} type="video/webm"/>
          </video>
          <div 
            dangerouslySetInnerHTML={{__html: html}}>
          </div>
        </article>
      </main>
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