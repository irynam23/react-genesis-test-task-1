import { React } from "react";

import {
  StyledBox,
  StyledHeading,
  StyledTitle,
  StyledSub,
  StyledWrapper,
  StyledItem,
  StyledText,
  StyledContacts,
  StyledName,
  StyledRatingList,
  StyledRatingItem,
  StyledNumberA,
  StyledNumberG,
  StyledInfo,
} from "./PeopleLove.styled";

import { ReactComponent as Stars } from "../../icons/stars.svg";
import { ReactComponent as Instagram } from "../../icons/instagram.svg";
import { ReactComponent as AppStore } from "../../icons/AppStore.svg";
import { ReactComponent as GooglePlay } from "../../icons/GooglePlay.svg";
import { ReactComponent as AppStars } from "../../icons/a-stars.svg";
import { ReactComponent as GoogleStars } from "../../icons/g-stars.svg";

import av1 from "../../images/avatars/av1.png";
import av2 from "../../images/avatars/av2.png";
import av3 from "../../images/avatars/av3.png";
import av4 from "../../images/avatars/av4.png";

export const PeopleLove = () => {
  return (
    <StyledBox>
      <StyledHeading>People love the Headway app</StyledHeading>
      <StyledTitle>
        Become a member of our global community of
        <StyledSub> 7 million people</StyledSub>
      </StyledTitle>
      <StyledWrapper>
        <StyledItem>
          <Stars />
          <StyledText>
            This app simplifies books into super condensed but easy-to-digest
            snippets. Listened to almost all of the Art of Saying No during my
            warm up/stretch sesh today. A powerful tool I recommend to anyone
            who’s busy and can’t find time to sit down to read!
          </StyledText>
          <StyledContacts>
            <img src={av4} alt="av4" />
            <StyledName>mr.rageright</StyledName>
            <Instagram />
          </StyledContacts>
        </StyledItem>
        <StyledItem>
          <Stars />
          <StyledText>
            Headway app is one of the best investments I've ever made into
            myself outside of spiritual stuff. Summarized books that you can
            read or listen to!
          </StyledText>
          <StyledContacts>
            <img src={av2} alt="av2" />
            <StyledName>mcogbonna</StyledName>
            <Instagram />
          </StyledContacts>
        </StyledItem>
        <StyledItem>
          <Stars />
          <StyledText>
            In case you often find a book you just started — the Headway app is
            for you. It’s an audiobook reader that summarized all the key
            lessons in that great book you’ve been aspiring to read, but you
            didn’t finish.
          </StyledText>
          <StyledContacts>
            <img src={av3} alt="av3" />
            <StyledName>thefinestyler</StyledName>
            <Instagram />
          </StyledContacts>
        </StyledItem>
        <StyledItem>
          <Stars />
          <StyledText>
            So excited for my latest app subscription for self-growth! You can
            set reading goals, take challenges or read offline! 🤓
          </StyledText>
          <StyledContacts>
            <img src={av1} alt="av1" />
            <StyledName>thisinnagirl</StyledName>
            <Instagram />
          </StyledContacts>
        </StyledItem>
      </StyledWrapper>
      <StyledRatingList>
        <StyledRatingItem>
          <StyledNumberA>
            4.7
            <AppStore />
          </StyledNumberA>
          <AppStars />
          <StyledInfo>50K ratings</StyledInfo>
        </StyledRatingItem>
        <StyledRatingItem>
          <StyledNumberG>
            4.2
            <GooglePlay />
          </StyledNumberG>
          <GoogleStars />
          <StyledInfo>31k ratings</StyledInfo>
        </StyledRatingItem>
      </StyledRatingList>
    </StyledBox>
  );
};
