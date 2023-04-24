import styled from "styled-components";

import bs from "../../images/BestSellers.png";

import form from "../../images/Form.png";

import habit from "../../images/Habit.png";

export const StyledBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px 16px 16px;
  width: 359px;
  background-color: #e6f2e7;
  border: 1px solid rgba(0, 187, 119, 0.4);
  border-radius: 12px;
  @media screen and (min-width: 375px) {
    width: 368px;
  }
`;

export const StyledHeading = styled.div`
  width: 327px;
  height: 72px;
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

export const StyledImage1 = styled.div`
  margin-top: 24px;
  width: 327px;
  height: 180px;
  background-image: url(${bs});
  background-size: contain;
`;

export const StyledImage2 = styled.div`
  margin-top: 32px;
  width: 336px;
  height: 180px;
  background-image: url(${form});
  background-size: contain;
`;

export const StyledImage3 = styled.div`
  margin-top: 32px;
  width: 336px;
  height: 180px;
  background-image: url(${habit});
  background-size: contain;
`;

export const StyledTitle = styled.div`
  width: 327px;
  height: 28px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 1.38;
  text-align: center;
  color: #000000;
  margin-top: 8px;
  @media screen and (min-width: 375px) {
    width: 336px;
  }
`;

export const StyledText = styled.div`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.5;
  text-align: center;
  color: #000000;
  padding: 0 20px;
  margin-top: 8px;
`;
