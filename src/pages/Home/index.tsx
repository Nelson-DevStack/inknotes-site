/* eslint-disable react/no-unescaped-entities */
import React, { useContext } from 'react';

import NoteCard from '../../components/NoteCard';
import NoteForm from '../../components/NoteForm';
import PlusButton from '../../components/PlusButton';
import Container from '../../components/UI/Container';
import Main from '../../components/UI/Main';
import Subheading from '../../components/UI/Subheading';
import Text from '../../components/UI/Text';
import { NoteContext } from '../../contexts/NoteContext';

const HomePage = () => {
  const { list } = useContext(NoteContext);

  return (
    <Main
      className={`before:bg-[url("/src/assets/polka-dots.svg")] before:absolute before:w-full before:min-h-screen before:-z-10 before:opacity-[.015] before:-mt-5`}
    >
      <Container className="grid lg:grid-cols-2 lg:gap-10 py-6">
        <div className="lg:hidden">
          <PlusButton />
        </div>

        <div className="">
          <Subheading>Suas Anotações</Subheading>

          <div>
            {list.length === 0 ? (
              <div className="mt-10">
                <Text>Ainda não há nehuma anotação. Clique no "+".</Text>
              </div>
            ) : (
              list.map((note) => (
                <NoteCard
                  key={String(note.createdAt)}
                  id={note.id}
                  title={note.title}
                  text={note.text}
                />
              ))
            )}
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
