import { React } from "react";

import {
  StyledBox,
  StyledHeading,
  StyledTitle,
  StyledLogo,
  StyledMedia,
} from "./Footer.styled";

import { ReactComponent as Logo } from "../../icons/Logo.svg";
import { ReactComponent as Instagram } from "../../icons/footer/instagram.svg";
import { ReactComponent as Facebook } from "../../icons/footer/facebook.svg";
import { ReactComponent as Twitter } from "../../icons/footer/twitter.svg";

export const Footer = () => {
  return (
    <StyledBox>
      <StyledLogo>
        <Logo />
      </StyledLogo>
      <StyledHeading>
        Empower yourself with the best books insights
      </StyledHeading>
      <StyledTitle>Social media:</StyledTitle>
      <StyledMedia>
        <Instagram />
        <Facebook />
        <Twitter />
      </StyledMedia>
    </StyledBox>
  );
};
