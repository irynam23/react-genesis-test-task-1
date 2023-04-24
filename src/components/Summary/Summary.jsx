import { React } from "react";

import {
  StyledBox,
  StyledHeading,
  StyledImage1,
  StyledImage2,
  StyledTitle,
  StyledText,
} from "./Summary.styled";

import { ReactComponent as Book } from "../../icons/Book.svg";
import { ReactComponent as Iphone } from "../../icons/Iphone.svg";

export const Summary = () => {
  return (
    <StyledBox>
      <StyledHeading>Summary is the new black</StyledHeading>
      <StyledTitle>
        Use summaries: comprehensive 15-min abstracts from nonfiction books with
        the main concepts and recommendations.
      </StyledTitle>
      <StyledImage1 />
      <StyledTitle>Typical book</StyledTitle>
      <StyledText>320 pages ~ 20 hours</StyledText>
      <Book />
      <StyledTitle>Key ideas & insights</StyledTitle>
      <Iphone />
      <StyledImage2 />
      <StyledTitle>Summary</StyledTitle>
      <StyledText>~ 15 minutes</StyledText>
    </StyledBox>
  );
};
