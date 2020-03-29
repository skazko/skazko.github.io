import React from 'react';
import { Link } from 'gatsby';
import style from './ProjectLink.module.css';

const ProjectLink = ({ post }) => (
  <li className={style.ProjectLink}>
    <Link to={post.frontmatter.path}>
      <video
        onMouseEnter={e => e.target.play()}
        onMouseLeave={e => e.target.pause()}
        className={style.video} 
        loop
        muted>
        <source src={post.frontmatter.video.publicURL} type="video/webm"/>
      </video>
    </Link>
    <Link to={post.frontmatter.path}>
      <h3>
        {post.frontmatter.title}
      </h3>
    </Link>
  </li>
)

export default ProjectLink
