import styled from "styled-components";
import db from "../db.json";

import QuizLogo from "../src/components/QuizLogo";
import Widget from "../src/components/Widget";

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`;

const BackgroundImage = styled.div`
  background-image: url(${db.bg});
  flex: 1;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

export const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;

export default function Home() {
  return (
    <BackgroundImage>
      <QuizContainer>
        <QuizLogo />
        <Widget>
          <Widget.Header>
            <h1>Teste Quiz</h1>
          </Widget.Header>
          <Widget.Content>
            <h1>Teste Quiz</h1>
            <p>Lorem ipsum</p>
          </Widget.Content>
        </Widget>
        <Widget>
          <Widget.Header>
            <h1>Teste Quiz</h1>
          </Widget.Header>
          <Widget.Content>
            <h1>Teste Quiz</h1>
            <p>Lorem ipsum</p>
          </Widget.Content>
        </Widget>
      </QuizContainer>
    </BackgroundImage>
  );
}
