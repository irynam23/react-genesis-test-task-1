import styled from "styled-components";

export const StyledBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px 16px 16px;
  width: 359px;
  background-color: #e6e9f5;
  border: 1px solid rgba(0, 102, 255, 0.2);
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
    width: 334px;
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

export const StyledSub = styled.a`
  color: #0066ff;
`;

export const StyledWrapper = styled.div`
  margin-top: 24px;
  gap: 16px;
  display: flex;
  flex-direction: column;
`;

export const StyledItem = styled.div`
  padding: 12px;
  gap: 12px;
  width: 327px;

  background-color: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 12px;

  @media screen and (min-width: 375px) {
    width: 336px;
  }
`;

export const StyledText = styled.div`
  margin-top: 8px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.46;
  color: #000000;
`;

export const StyledContacts = styled.div`
  display: flex;
  align-items: center;
  margin-top: 12px;
`;

export const StyledName = styled.div`
  margin-left: 8px;
  margin-right: 4px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.46;
  color: rgba(0, 0, 0, 0.4);
`;

export const StyledRatingList = styled.div`
  margin-top: 16px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 12px;
  width: 327px;
  @media screen and (min-width: 375px) {
    width: 336px;
  }
`;

export const StyledRatingItem = styled.div`
  width: 157.5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  background-color: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 12px;
  gap: 6px;
  @media screen and (min-width: 375px) {
    width: 162px;
  }
`;

export const StyledNumberA = styled.div`
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 28px;
  line-height: 1.3;
  color: #0066ff;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
`;

export const StyledNumberG = styled.div`
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 28px;
  line-height: 1.3;
  color: #00bb77;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
`;

export const StyledInfo = styled.div`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.46;
  color: rgba(0, 0, 0, 0.4);
`;
