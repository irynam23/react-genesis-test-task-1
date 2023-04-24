import { React } from "react";

import {
  StyledBox,
  StyledHeading,
  StyledImage1,
  StyledImage2,
  StyledTitle,
  StyledText,
  StyledImage3,
} from "./GetSmarter.styled";

export const GetSmarter = () => {
  return (
    <StyledBox>
      <StyledHeading>Get smarter with the least effort</StyledHeading>
      <StyledImage1 />
      <StyledTitle>Learn from the best</StyledTitle>
      <StyledText>
        Highlighted by top reviewers, we picked only the most outstanding
        bestsellers for you.
      </StyledText>
      <StyledImage2 />
      <StyledTitle>Get key insights</StyledTitle>
      <StyledText>
        Major ideas in a bite-sized form. Long reads no more!
      </StyledText>
      <StyledImage3 />
      <StyledTitle>Build a reading habit</StyledTitle>
      <StyledText>
        Consistency is the key to top performance. Only 15 minutes per day to
        make reading your brand new habit!
      </StyledText>
    </StyledBox>
  );
};
