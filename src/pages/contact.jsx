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
      <section style={{width: '100%', maxWidth: '640px', margin: '0 auto'}}>
        <h1>Контакты</h1>
          { mail ? <Mail mail={mail} /> : null }
          { telegram ? <Telegram tg={telegram} /> : null }
          { github ? <Github gh={github} /> : null }
      </section>
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
