import styled from "styled-components";

export const StyledHeaderWrapper = styled.div`
  height: 64px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 8px 16px 0 16px;

  @media screen and (min-width: 375px) {
    padding: 8px 76px 0 76px;
  }
`;

export const StyledLogo = styled.div`
  width: 122px;
  height: 24px;
`;

export const StyledButtonsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  gap: 8px;
  width: 104px;
  height: 48px;
`;

export const StyledUser = styled.div``;

export const StyledMenu = styled.div``;
