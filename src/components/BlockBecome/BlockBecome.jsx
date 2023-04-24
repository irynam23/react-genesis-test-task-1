import { React } from "react";

import {
  StyledBox,
  StyledTitles,
  StyledHeading,
  StyledSub,
  StyledChart,
  StyledChartText,
  StyledFirstItem,
  StyledFirstBubbleText,
  StyledFirstBubblePoint,
  StyledFirstBubbleTitle,
  StyledLastItem,
  StyledLastBubbleText,
  StyledLastBubblePoint,
  StyledLastBubbleTitle,
  StyledLines,
  StyledPath,
  StyledButton,
  StyledImage,
  StyledChartTitle,
  StyledChartArrow,
} from "./BlockBecome.styled";

import { ReactComponent as FirstBubble } from "../../icons/FirstBubble.svg";

import { ReactComponent as LastBubble } from "../../icons/LastBubble.svg";

import { ReactComponent as Path } from "../../icons/Path.svg";

export const BlockBecome = () => {
  return (
    <StyledBox>
      <StyledTitles>
        <StyledHeading>Become a better you</StyledHeading>
        <StyledSub>
          with 15-min bite-sized reads and audios of the world's best nonfiction
          books
        </StyledSub>
      </StyledTitles>
      <StyledChart>
        <StyledChartTitle>
          <StyledChartText>
            Take the quiz to get a personalized result
          </StyledChartText>
          <StyledChartArrow>⟶</StyledChartArrow>
        </StyledChartTitle>
        <StyledFirstItem>
          <StyledFirstBubbleText>Now</StyledFirstBubbleText>
          <FirstBubble />
        </StyledFirstItem>
        <StyledFirstBubblePoint />
        <StyledFirstBubbleTitle>week 1</StyledFirstBubbleTitle>

        <StyledLastItem>
          <StyledLastBubbleText>15+ books per week</StyledLastBubbleText>
          <LastBubble />
        </StyledLastItem>
        <StyledLastBubblePoint />
        <StyledLastBubbleTitle>week 4</StyledLastBubbleTitle>

        <StyledLines></StyledLines>
        <StyledPath>
          <Path />
        </StyledPath>
      </StyledChart>
      <StyledButton>Get Started</StyledButton>
      <StyledImage />
    </StyledBox>
  );
};
