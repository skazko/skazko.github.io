import React, { useState } from 'react';
import { Link } from 'gatsby';
import style from './ProjectLink.module.css';

const ProjectLink = ({ post }) => {
  const [play, setPlay] = useState(false);
  return (
    <li className={style.ProjectLink}>
      <Link to={post.frontmatter.path}>
        <video
          onMouseEnter={e => {
            if (!play) {
              setPlay(e.target.play());
            }
          }}
          onMouseLeave={e => {
            const target = e.target;
            if (play) {
              play.then(_ => {
                target.pause();
                setPlay(false);
              })
            }
          }}
          className={style.video} 
          loop
          muted
          >
          <source src={post.frontmatter.video.publicURL} type="video/mp4"/>
        </video>
      </Link>
      <Link to={post.frontmatter.path}>
        <h3>
          {post.frontmatter.title}
        </h3>
      </Link>
    </li>
  )
}

export default ProjectLink
