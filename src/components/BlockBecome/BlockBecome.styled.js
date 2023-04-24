import styled from "styled-components";

import image from "../../images/Phones.png";

import lines from "../../images/Lines.png";

export const StyledBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px 16px 0px;
  gap: 24px;
  width: 359px;
  background: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 12px;

  @media screen and (min-width: 375px) {
    width: 368px;
  }
`;

export const StyledTitles = styled.div`
  gap: 8px;
`;
export const StyledHeading = styled.div`
  width: 327px;
  height: 36px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 28px;
  line-height: 1.3;
  text-align: center;
  color: #000000;

  @media screen and (min-width: 375px) {
    width: 336px;
  }
`;
export const StyledSub = styled.div`
  width: 327px;
  height: 48px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.5;
  text-align: center;
  color: #000000;

  @media screen and (min-width: 375px) {
    width: 336px;
  }
`;

export const StyledChart = styled.div`
  width: 327px;
  height: 272px;
  padding: 12px 12px 0px 12px;
  position: relative;

  @media screen and (min-width: 375px) {
    width: 336px;
  }
`;

export const StyledChartTitle = styled.div`
  width: 239px;
  height: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const StyledChartText = styled.div`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 11px;
  line-height: 1.34;
  color: rgba(0, 0, 0, 0.4);
`;

export const StyledChartArrow = styled.div`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 11px;
  line-height: 1.34;
  color: rgba(0, 0, 0, 0.4);
  margin-top: -1%;
`;

export const StyledFirstItem = styled.div`
  position: absolute;
  top: 152px;
  left: 14px;
  display: flex;
  justify-content: center;
`;
export const StyledFirstBubbleText = styled.div`
  top: 12px;
  position: absolute;
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 15.0592px;
  line-height: 1;
  text-align: center;
  color: #000000;
  z-index: 1;
`;
export const StyledFirstBubblePoint = styled.div`
  top: 205px;
  left: 38.5px;
  position: absolute;
  width: 15px;
  height: 15px;
  background-color: #0066ff;
  border: none;
  border-radius: 50%;
`;
export const StyledFirstBubbleTitle = styled.div`
  position: absolute;
  width: 50px;
  height: 12px;
  left: 12px;
  top: 260px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 1;
  letter-spacing: 0.96px;
  text-transform: uppercase;
  color: #0066ff;
  mix-blend-mode: normal;
`;

export const StyledLinesFirstItem = styled.div`
  position: absolute;
  left: 44.7px;
  top: 214px;
  height: 37px;
  width: 3px;
`;

export const StyledLastItem = styled.div`
  position: absolute;
  top: 0px;
  left: 255px;
  display: flex;
  justify-content: center;
`;
export const StyledLastBubbleText = styled.div`
  top: 6px;
  position: absolute;
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 1;
  text-align: center;
  color: #ffffff;
  z-index: 1;
`;
export const StyledLastBubblePoint = styled.div`
  top: 53px;
  left: 281.5px;
  position: absolute;
  width: 15px;
  height: 15px;
  background-color: #ff8833;
  border: none;
  border-radius: 50%;
`;
export const StyledLastBubbleTitle = styled.div`
  position: absolute;
  width: 52px;
  height: 12px;
  left: 272px;
  top: 260px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 1;
  letter-spacing: 0.96px;
  text-transform: uppercase;
  color: #ff8833;
  mix-blend-mode: normal;
`;

export const StyledLinesLastItem = styled.div`
  position: absolute;
  left: 287.5px;
  top: 65px;
`;
export const StyledLines = styled.div`
  width: 311px;
  height: 191px;
  position: absolute;
  left: 12px;
  top: 61px;
  background-image: url(${lines});
`;
export const StyledPath = styled.div`
  position: absolute;
  left: 52px;
  top: 68px;
  width: 236px;
  height: 151px;
`;
export const StyledButton = styled.button`
  width: 336px;
  height: 56px;
  background-color: #0066ff;
  border-radius: 8px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 1;
  color: #ffffff;
  align-items: center;
  justify-content: center;
  display: flex;
  cursor: pointer;
  border: none;
  position: fixed;
  left: 16px;
  bottom: 24px;

  @media screen and (min-width: 375px) {
    width: 336px;
    position: static;
  }
`;
export const StyledImage = styled.div`
  width: 327px;
  height: 304px;
  background-image: url(${image});
  background-size: contain;
`;
