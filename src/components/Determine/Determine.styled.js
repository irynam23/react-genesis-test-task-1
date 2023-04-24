import styled from "styled-components";

export const StyledBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px 0 16px 0;
  width: 359px;
  background-color: rgba(122, 0, 218, 0.1);
  border: 1px solid rgba(122, 0, 218, 0.1);
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

export const StyledWrapperCategories = styled.div`
  margin-top: 24px;
  width: 327px;
  overflow-x: scroll;
  @media screen and (min-width: 375px) {
    width: 336px;
  }
`;

export const StyledListCategories = styled.div`
  width: 800px;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

export const StyledItemCategories = styled.button`
  gap: 6px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.46;
  padding: 8px;
  height: 40px;
  background-color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  cursor: pointer;

  &:focus,
  &:hover {
    background-color: #e6e9f5;
    border: 1px solid #0066ff;
  }
`;

export const StyledWrapperBooks = styled.div`
  margin-top: 24px;
  width: 100%;
`;

export const StyledListBooks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
`;

export const StyledRow = styled.div`
  display: flex;

  gap: 12px;
  align-items: center;
  justify-content: center;
  overflow-x: scroll;
`;

export const StyledItemBooks = styled.div`
  width: 72px;
  height: 108px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: none;
`;
