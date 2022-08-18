import React from 'react';

import NoteCard from '../../components/NoteCard';
import PlusButton from '../../components/PlusButton';
import Container from '../../components/UI/Container';
import Subheading from '../../components/UI/Subheading';

const HomePage = () => {
  return (
    <div className="col-span-12 mt-16">
      <Container className="grid">
        <div>
          <PlusButton />
        </div>

        <div className="">
          <Subheading>Suas Anotações</Subheading>

          <div>
            <NoteCard />
            <NoteCard />
          </div>
        </div>

        <div className="hidden">
          <h1>Anotar</h1>
        </div>
      </Container>
    </div>
  );
};

export default HomePage;
