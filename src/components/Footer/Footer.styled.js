import styled from "styled-components";

export const StyledBox = styled.div`
  padding: 24px 16px 16px;
  width: 359px;
  background-color: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 12px;
  @media screen and (min-width: 375px) {
    width: 368px;
  }
`;

export const StyledLogo = styled.div`
  width: 122px;
  height: 24px;
`;

export const StyledHeading = styled.div`
  width: 327px;
  height: 72px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 28px;
  line-height: 1.3;
  color: #000000;
  margin-top: 20px;
  @media screen and (min-width: 375px) {
    width: 334px;
  }
`;
export const StyledTitle = styled.div`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.5;
  color: #000000;
  margin-top: 20px;
`;

export const StyledMedia = styled.div`
  display: flex;
  flex-direction: row;
  gap: 12px;
  margin-top: 8px;
`;
