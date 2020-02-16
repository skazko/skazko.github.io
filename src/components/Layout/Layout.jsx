import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Header from '../Header';
import { IconGithub, IconTelegram, IconEMail } from '../Icons';
import { body, footer, social, socialList, socialItem, socialLink } from './layout.module.css';

const Layout = ({children, path}) => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            social {
              link
              name
              value
            }
          }
        }
      }
    `
  );

  const icons = {
    github: <IconGithub />,
    telegram: <IconTelegram />,
    email: <IconEMail />
  }

  return (
    <>
      <div className={body}>
        <Header path={path} />
        {children}
        <footer className={footer}>
          <nav className={social}>
            <ul className={socialList}>
              {data.site.siteMetadata.social.map(item => {
                return (
                  <li className={socialItem} key={item.name}>
                    <a 
                      className={socialLink}
                      title={`${item.name} - ${item.value}`}
                      href={item.link} 
                      target="_blank" 
                      rel="noopener noreferrer">
                        {icons[item.name]}
                      </a>
                  </li>
                )
              })}
            </ul>
          </nav>
        </footer>
      </div>
    </>
  );
};

export default Layout;
