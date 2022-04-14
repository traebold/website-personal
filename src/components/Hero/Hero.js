import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome to <br />
        My Personal Portofolio
      </SectionTitle>
      <SectionText>
        A web developer who loves modern interfaces with well code structure
      </SectionText>
      <Button onClick={() => window.location = "https://traebold.com/"}>
        Learn More
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;