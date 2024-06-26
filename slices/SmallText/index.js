import React from "react";
import { PrismicRichText } from "@prismicio/react";
import styled from "styled-components";
import { COLOR, StyledSection } from "../../pages/_app";

/* const StyledSectionContainer = styled.section`
  min-height: 25vh;
  display: flex;
  align-items: center;
  margin: 0 1em;
`; */

const StyledSectionContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  gap: 1em;
  margin: auto;
`;
const StyledParagraph = styled.span`
  font-size: 1.25em;
`;
const StyledHeading = styled.span`
  font-size: .75em;
  color:${COLOR.primary};
`;
const SmallText = ({ slice }) => (
  <StyledSection>
    <StyledSectionContainer>
      <StyledHeading>
        <PrismicRichText field={slice.primary.title} />
      </StyledHeading>
      <StyledParagraph>
        <PrismicRichText field={slice.primary.description} />
      </StyledParagraph>
    </StyledSectionContainer>
  </StyledSection>
);

export default SmallText;
