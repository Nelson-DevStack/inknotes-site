import React from 'react';

import NoteCard from '../../components/NoteCard';
import NoteForm from '../../components/NoteForm';
import PlusButton from '../../components/PlusButton';
import Container from '../../components/UI/Container';
import Main from '../../components/UI/Main';
import Subheading from '../../components/UI/Subheading';

const HomePage = () => {
  return (
    <Main>
      <Container className="grid lg:grid-cols-2 lg:gap-10 py-6">
        <div className="lg:hidden">
          <PlusButton />
        </div>

        <div className="">
          <Subheading>Suas Anotações</Subheading>

          <div>
            <NoteCard />
            <NoteCard />
            <NoteCard />
            <NoteCard />
            <NoteCard />
            <NoteCard />
            <NoteCard />
            <NoteCard />
            <NoteCard />
            <NoteCard />
            <NoteCard />
          </div>
        </div>

        <div className="lg:flex">
          <NoteForm />
        </div>
      </Container>
    </Main>
  );
};

export default HomePage;
