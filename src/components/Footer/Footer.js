import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
      <LinkColumn>
      <LinkTitle>Call</LinkTitle>
        <LinkItem href="tel:604-715-4750">604-715-4750</LinkItem>
      </LinkColumn>
      <LinkColumn>
        <LinkTitle>Email</LinkTitle>
        <LinkItem href="mailto:contact@traebold.com">contact@traebold.com</LinkItem>
      </LinkColumn>
      <LinkColumn>
        <LinkTitle>Location</LinkTitle>
        <LinkItem>Vancouver, BC</LinkItem>
      </LinkColumn>
     </LinkList>
     <SocialIconsContainer>
      <CompanyContainer>
        <Slogan>Innovating one project at a time</Slogan>
      </CompanyContainer>
      <SocialContainer>
      <SocialIcons href="https://github.com/traebold?tab=repositories">
        <AiFillGithub size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://www.linkedin.com/in/trae-bold/">
        <AiFillLinkedin size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://www.instagram.com/traewasabi/">
        <AiFillInstagram size="3rem" />
      </SocialIcons>
      </SocialContainer>
     </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
