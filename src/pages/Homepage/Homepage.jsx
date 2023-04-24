import { BlockBecome } from "../../components/BlockBecome/BlockBecome";
import { GetSmarter } from "../../components/GetSmarter/GetSmarter";
import { Header } from "../../components/Header/Header";
import { Summary } from "../../components/Summary/Summary";
import { ReadOrListen } from "../../components/ReadOrListen/ReadOrListen";
import { PeopleLove } from "../../components/PeopleLove/PeopleLove";
import { MainWrapper, Wrapper } from "./Homepage.styled";
import { Determine } from "../../components/Determine/Determine";
import { Footer } from "../../components/Footer/Footer";

export const Homepage = () => {
  return (
    <MainWrapper>
      <Header />
      <Wrapper>
        <BlockBecome />
        <GetSmarter />
        <Summary />
        <Determine />
        <ReadOrListen />
        <PeopleLove />
        <Footer />
      </Wrapper>
    </MainWrapper>
  );
};
