import React from 'react';
import style from './ProjectList.module.css';

const ProjectList = ({ children }) => (
  <ul className={style.ProjectList}>
    {children}
  </ul>
)

export default ProjectList;
