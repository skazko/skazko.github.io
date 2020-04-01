import React, {useState} from 'react';
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
            title
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

  const [menuOpen, setMenuOpen] = useState(false);

  const icons = {
    github: <IconGithub />,
    telegram: <IconTelegram />,
    email: <IconEMail />
  }

  const overflowHidden = {
    position: 'relative',
    height: '100vh',
    overflow: 'hidden',
    display: 'block'
  }

  return (
    <>
      <div 
        className={body}
        style={menuOpen ? overflowHidden : null}>
        <Header 
          path={path} 
          title={data.site.siteMetadata.title}
          setMenuOpen={setMenuOpen}
          menuOpen={menuOpen} />
        <main>{children}</main>
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
