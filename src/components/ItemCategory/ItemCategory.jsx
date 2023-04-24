import { createElement } from "react";
import { StyledItemCategories } from "./ItemCategory.styled";
import { useState } from "react";

export const ItemCategory = ({ text, icon }) => {
  const [active, setActive] = useState(false);

  return (
    <StyledItemCategories
      onClick={() => {
        setActive((prev) => !prev);
      }}
      isActive={active}
    >
      {!!icon && createElement(icon)}
      {text}
    </StyledItemCategories>
  );
};
