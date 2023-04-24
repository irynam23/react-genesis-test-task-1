import styled from "styled-components";

import book from "../../images/Book.png";

import iphone from "../../images/iPhone.png";

export const StyledBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px 16px 16px;
  width: 359px;
  background-color: #ffede1;
  border: 1px solid rgba(255, 136, 51, 0.2);
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
  height: 163.5px;
  background-image: url(${book});
  background-size: contain;
  @media screen and (min-width: 375px) {
    width: 336px;
    height: 168px;
  }
`;

export const StyledImage2 = styled.div`
  margin-top: 8px;
  width: 327px;
  height: 175.8px;
  background-image: url(${iphone});
  background-size: contain;
  @media screen and (min-width: 375px) {
    width: 336px;
    height: 180px;
  }
`;

export const StyledTitle = styled.div`
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

export const StyledText = styled.div`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.5;
  text-align: center;
  color: rgba(0, 0, 0, 0.4);
  padding: 0 20px;
  margin-top: 8px;
`;
