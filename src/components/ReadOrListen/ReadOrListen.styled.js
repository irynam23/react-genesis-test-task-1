import styled from "styled-components";

import image from "../../images/Listen.png";

export const StyledBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px 16px 0 16px;
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

  & span {
    font-weight: ${({ isListen }) => (isListen ? 600 : 400)};
  }
`;

export const StyledWrapper = styled.div`
  width: 327px;
  height: 56px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin-top: 16px;
  @media screen and (min-width: 375px) {
    width: 336px;
  }
`;

export const StyledToggler = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 4px;
  width: 116px;
  background-color: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 40px;

  @media screen and (min-width: 375px) {
    width: 116px;
  }
`;

export const StyledBtn = styled.button`
  border: none;
  background-color: transparent;
  padding: 0;
  display: flex;
  cursor: pointer;
`;

export const StyledImage = styled.div`
  width: 327px;
  height: 304px;
  background-image: url(${image});
  background-size: contain;
  margin-top: 24px;
`;
