import React from 'react';
import styled from 'styled-components';
import SocialLink from './SocialLink';
import { IconGithub, IconTelegram, IconEMail } from './Icons';

const StyledFooter = styled.footer`
  margin-top: auto;
  padding: 40px;
`;

const Navigation = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SocialLinkList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const SocialLinkItem = styled.li`
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: center;
`;

 const Footer = () => (
  <StyledFooter>
    <Navigation>
      <SocialLinkList>
        <SocialLinkItem>
          <SocialLink href='https://github.com/skazko'>
            <IconGithub />
          </SocialLink>
          <SocialLink href='mailto:kreeon@ya.ru'>
            <IconEMail />
          </SocialLink>
          <SocialLink href='tg://resolve?domain=YaSlava'>
            <IconTelegram />
          </SocialLink>
        </SocialLinkItem>
      </SocialLinkList>
    </Navigation>
  </StyledFooter>
);

export default Footer;
