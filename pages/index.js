import styled from "styled-components";
import db from "../db.json";
import { useRouter } from "next/router";

import QuizLogo from "../src/components/QuizLogo";
import Widget from "../src/components/Widget";
import Footer from "../src/components/Footer";

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
  const router = useRouter();
  const [name, setName] = React.useState("");

  return (
    <BackgroundImage>
      <QuizContainer>
        <QuizLogo />
        <Widget>
          <Widget.Header>
            <h1>{db.title}</h1>
          </Widget.Header>
          <Widget.Content>
            <form
              onSubmit={function (infosDoEvento) {
                infosDoEvento.preventDefault();
                router.push(`/quiz?name=${name}`);
                console.log("Fazendo uma submissão por meio do react");
              }}
            >
              <input
                onChange={function (infosDoEvento) {
                  console.log(infosDoEvento.target.value);
                  setName(infosDoEvento.target.value);
                }}
                placeholder="Diz ai seu nome"
              />
              <button type="submit" disabled={name.length === 0}>
                Jogar {name}
              </button>
            </form>
          </Widget.Content>
        </Widget>
        <Widget>
          <Widget.Header>
            <h1>Quizes da Galera</h1>
          </Widget.Header>
          <Widget.Content>
            <p>lorem ipsum dolor sit amet...</p>
          </Widget.Content>
        </Widget>
        <Footer />
      </QuizContainer>
    </BackgroundImage>
  );
}
