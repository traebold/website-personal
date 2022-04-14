import React from 'react';
import { DiBootstrap, DiCode, DiCss3, DiDatabase, DiFirebase, DiGhostSmall, DiGithubAlt, DiIllustrator, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id='tech'>
    <SectionDivider/>
    <br />
    <SectionTitle>Technlogies</SectionTitle>
    <SectionText>
      I've worked with a range of technologies in the web development word. From front-end development to UX/UI Design.
    </SectionText>
    <List>
      <ListItem>
        <DiReact size="3rem"/>
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Javascipt <br/>
            React.js  <br/>
            HTML5/CSS3  <br/>
            Bootstrap <br/>
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <DiCode size="3rem"/>
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Python <br />
            Node.js <br />
            Java <br/>
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <DiDatabase size="3rem"/>
        <ListContainer>
          <ListTitle>Data</ListTitle>
          <ListParagraph>
            mongoDB <br />
            MySQL <br />
            Firebase <br/>
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <DiGhostSmall size="3rem"/>
        <ListContainer>
          <ListTitle>Misc</ListTitle>
          <ListParagraph>
            Version Control/Git <br />
            RESTful Services/APIs <br />
            Problem Solving <br/>
            Testing/Debugging
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <DiGithubAlt size="3rem"/>
        <ListContainer>
          <ListTitle>Learning</ListTitle>
          <ListParagraph>
            Redux <br />
            TypeScript <br />
            AWS <br/>
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
