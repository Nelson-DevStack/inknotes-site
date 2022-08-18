import React from 'react';

import completedTaskImage from '../../assets/completed-task.svg';
import Container from '../../components/UI/Container';
import Main from '../../components/UI/Main';
import Subheading from '../../components/UI/Subheading';
import Text from '../../components/UI/Text';

const AboutPage = () => {
  const paragraphs = [
    'Precisa fazer uma anotação rápida e simples? O InkNotes te ajuda a criar essas anotações.',
    'Com a simplicidade e leveza, o InkNotes é um simples Web App feito para facilitar a criação de anotações, de forma prática.',
    'Contando com um Código Aberto (Open-Source), o InkNotes foi feito utilizando a tecnologia React.js.',
  ];

  return (
    <Main>
      <Container>
        <Subheading className="text-center">Sobre</Subheading>
        <div className="mt-4">
          {paragraphs.map((text, index) => (
            <Text className="my-2 leading-6" key={index}>
              {text}
            </Text>
          ))}
        </div>

        <div className="px-8 mt-10">
          <img src={completedTaskImage} alt="Ilustração Task" />
        </div>
      </Container>
    </Main>
  );
};

export default AboutPage;