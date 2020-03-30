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
              console.log('play');
              console.log(play)
            }
          }}
          onMouseLeave={e => {
            console.log('pause');
            console.log(play)
            const target = e.target;
            if (play) {
              play.then(_ => {
                target.pause();
                setPlay(false);
              }).catch(e => console.error(e))
            }
          }}
          loop
          muted
          playsInline
          poster={post.frontmatter.poster.publicURL}
          src={post.frontmatter.video.publicURL} >
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
