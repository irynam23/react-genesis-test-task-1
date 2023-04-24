import { React } from "react";

import {
  StyledHeaderWrapper,
  StyledLogo,
  StyledMenu,
  StyledUser,
  StyledButtonsWrapper,
} from "./Header.styled";

import { ReactComponent as Logo } from "../../icons/Logo.svg";
import { ReactComponent as Menu } from "../../icons/Menu.svg";
import { ReactComponent as User } from "../../icons/User.svg";

export const Header = () => {
  return (
    <StyledHeaderWrapper>
      <StyledLogo>
        <Logo />
      </StyledLogo>
      <StyledButtonsWrapper>
        <StyledUser>
          <User />
        </StyledUser>
        <StyledMenu>
          <Menu />
        </StyledMenu>
      </StyledButtonsWrapper>
    </StyledHeaderWrapper>
  );
};
