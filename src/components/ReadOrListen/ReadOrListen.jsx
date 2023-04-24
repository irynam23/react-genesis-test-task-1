import { React } from "react";
import { useState } from "react";
import {
  StyledBox,
  StyledHeading,
  StyledTitle,
  StyledWrapper,
  StyledImage,
  StyledToggler,
  StyledBtn,
} from "./ReadOrListen.styled";

import { ReactComponent as Read } from "../../icons/toggler/read.svg";
import { ReactComponent as ReadActive } from "../../icons/toggler/active-read.svg";
import { ReactComponent as Listen } from "../../icons/toggler/listen.svg";
import { ReactComponent as ListenActive } from "../../icons/toggler/active-listen.svg";

export const ReadOrListen = () => {
  const [listen, setListen] = useState(true);
  return (
    <StyledBox>
      <StyledHeading>Read or Listen</StyledHeading>
      <StyledTitle>
        Commuting, jogging, or stuck in line? Enjoy the best books in a
        condensed format. Summaries have an audio version, narrated by
        professional voice actors.
      </StyledTitle>
      <StyledWrapper>
        <StyledTitle isListen={listen}>
          <span>Listen</span>
        </StyledTitle>
        <StyledToggler>
          <StyledBtn
            onClick={() => {
              setListen(true);
            }}
            isListen={listen}
          >
            {listen ? <ListenActive /> : <Listen />}
          </StyledBtn>
          <StyledBtn
            onClick={() => {
              setListen(false);
            }}
            isListen={listen}
          >
            {listen ? <Read /> : <ReadActive />}
          </StyledBtn>
        </StyledToggler>
        <StyledTitle isListen={!listen}>
          <span>Read</span>
        </StyledTitle>
      </StyledWrapper>
      <StyledImage />
    </StyledBox>
  );
};
