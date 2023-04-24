import { React } from "react";

import {
  StyledBox,
  StyledHeading,
  StyledListCategories,
  StyledTitle,
  StyledWrapperCategories,
  StyledWrapperBooks,
  StyledListBooks,
  StyledItemBooks,
  StyledRow,
} from "./Determine.styled";

import { ReactComponent as Apple } from "../../icons/items/apple.svg";
import { ReactComponent as Ball } from "../../icons/items/ball.svg";
import { ReactComponent as Credit } from "../../icons/items/credit-card.svg";
import { ReactComponent as Heart } from "../../icons/items/heart.svg";
import { ReactComponent as Hour } from "../../icons/items/hourglass.svg";

import { ReactComponent as Lock } from "../../icons/items/lock.svg";
import { ReactComponent as Mountain } from "../../icons/items/mountain.svg";
import { ReactComponent as Planet } from "../../icons/items/planet.svg";
import { ReactComponent as Smile } from "../../icons/items/smile.svg";
import { ReactComponent as Speaker } from "../../icons/items/speaker.svg";

import b0 from "../../images/books/book-snippet.png";
import b1 from "../../images/books/book-snippet-1.png";
import b3 from "../../images/books/book-snippet-3.png";
import b2 from "../../images/books/book-snippet-2.png";
import b4 from "../../images/books/book-snippet-4.png";
import b5 from "../../images/books/book-snippet-5.png";
import b6 from "../../images/books/book-snippet-6.png";
import b7 from "../../images/books/book-snippet-7.png";
import b8 from "../../images/books/book-snippet-8.png";
import b9 from "../../images/books/book-snippet-9.png";
import b10 from "../../images/books/book-snippet-10.png";
import b11 from "../../images/books/book-snippet-11.png";
import b12 from "../../images/books/book-snippet-12.png";
import b13 from "../../images/books/book-snippet-13.png";
import b14 from "../../images/books/book-snippet-14.png";
import b15 from "../../images/books/book-snippet-15.png";
import { ItemCategory } from "../ItemCategory/ItemCategory";

const categories = [
  { text: "All categories" },
  { text: "Self-Growth", icon: Mountain },
  { text: "Happiness", icon: Smile },
  { text: "Money & Investment", icon: Credit },
  { text: "Negotiation", icon: Speaker },
  { text: "Health", icon: Apple },
  { text: "Spirituality", icon: Planet },
  { text: "Productivity", icon: Hour },
  { text: "Business & Career", icon: Lock },
  { text: "Love & Sex", icon: Heart },
  { text: "Sports & Fitness", icon: Ball },
];

export const Determine = () => {
  return (
    <StyledBox>
      <StyledHeading>Determine your goal and go ahead!</StyledHeading>
      <StyledTitle>
        Learn something new every day from Self-Growth, Happiness, Money,
        Health, and many other categories. Benefit from unlimited access to
        world best thoughts.
      </StyledTitle>
      <StyledWrapperCategories>
        <StyledListCategories>
          {categories.map(({ text, icon }) => {
            return <ItemCategory key={text} text={text} icon={icon} />;
          })}
        </StyledListCategories>
      </StyledWrapperCategories>
      <StyledWrapperBooks>
        <StyledListBooks>
          <StyledRow>
            <StyledItemBooks>
              <img src={b0} alt="b0" />
            </StyledItemBooks>
            <StyledItemBooks>
              <img src={b2} alt="b2" />
            </StyledItemBooks>
            <StyledItemBooks>
              <img src={b6} alt="b6" />
            </StyledItemBooks>
            <StyledItemBooks>
              <img src={b9} alt="b9" />
            </StyledItemBooks>
            <StyledItemBooks>
              <img src={b12} alt="b12" />
            </StyledItemBooks>
          </StyledRow>
          <StyledRow>
            <StyledItemBooks>
              <img src={b5} alt="b5" />
            </StyledItemBooks>
            <StyledItemBooks>
              <img src={b4} alt="b4" />
            </StyledItemBooks>
            <StyledItemBooks>
              <img src={b8} alt="b8" />
            </StyledItemBooks>
            <StyledItemBooks>
              <img src={b11} alt="b11" />
            </StyledItemBooks>
            <StyledItemBooks>
              <img src={b14} alt="b14" />
            </StyledItemBooks>
            <StyledItemBooks>
              <img src={b15} alt="b15" />
            </StyledItemBooks>
          </StyledRow>
          <StyledRow>
            <StyledItemBooks>
              <img src={b1} alt="b1" />
            </StyledItemBooks>
            <StyledItemBooks>
              <img src={b3} alt="b3" />
            </StyledItemBooks>
            <StyledItemBooks>
              <img src={b7} alt="b7" />
            </StyledItemBooks>
            <StyledItemBooks>
              <img src={b10} alt="b10" />
            </StyledItemBooks>
            <StyledItemBooks>
              <img src={b13} alt="b13" />
            </StyledItemBooks>
          </StyledRow>
        </StyledListBooks>
      </StyledWrapperBooks>
    </StyledBox>
  );
};
