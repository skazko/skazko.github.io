import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';

const SocialLink = ({item, children}) => (
  <a
    style={{fontSize: '1.5rem', fontWeight: '500'}}
    title={`${item.name} - ${item.value}`}
    href={item.link} 
    target="_blank" 
    rel="noopener noreferrer">
    {children}
  </a>
)

const Mail = ({mail}) => (
  <div>
    <p>Напишите мне письмо:</p>
    <SocialLink item={mail}>
      {mail.value}
    </SocialLink>
  </div>
);

const Telegram = ({tg}) => (
  <div>
    <p>или сообщение в Telegram:</p>
    <SocialLink item={tg}>
      @{tg.value}
    </SocialLink>
  </div>
);

const Github = ({gh}) => (
  <div>
    <p>Посмотрите мои работы на Github:</p>
    <SocialLink item={gh}>
      {gh.link.replace('https://', '')}
    </SocialLink>
  </div>
);

export default (props) => {
  const contacts = props.data.site.siteMetadata.social;
  const mail = contacts.find(item => item.name === 'email');
  const github = contacts.find(item => item.name === 'github');
  const telegram = contacts.find(item => item.name === 'telegram');
  
  return (
    <Layout >
      <h1 style={{fontSize: '2.5rem', textAlign: 'center'}}>Буду рад вашему сообщению</h1>
      <div style={{textAlign: 'center'}}>
        { mail ? <Mail mail={mail} /> : null }
        { telegram ? <Telegram tg={telegram} /> : null }
        { github ? <Github gh={github} /> : null }
      </div>
      
    </Layout>
  )
};

export const pageQuery = graphql`
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
`;
