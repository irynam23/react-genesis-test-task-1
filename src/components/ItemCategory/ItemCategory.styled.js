import styled from "styled-components";

export const StyledItemCategories = styled.button`
  gap: 6px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.46;
  padding: 8px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${({ isActive }) => (isActive ? `#e6e9f5` : `#ffffff`)};
  border: 1px solid
    ${({ isActive }) => (isActive ? `#0066ff` : `rgba(0, 0, 0, 0.1)`)};
  border-radius: 8px;
  cursor: pointer;
`;
