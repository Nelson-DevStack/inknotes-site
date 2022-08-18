import React, { useContext, useEffect, useState } from 'react';

import NoteCard from '../../components/NoteCard';
import NoteForm from '../../components/NoteForm';
import PlusButton from '../../components/PlusButton';
import Container from '../../components/UI/Container';
import Main from '../../components/UI/Main';
import Subheading from '../../components/UI/Subheading';
import { NoteContext } from '../../contexts/NoteContext';
import { NoteType } from '../../types/NoteType';

const HomePage = () => {
  // const [list, setList] = useState<NoteType[]>([]);

  // useEffect(() => {
  //   const items = localStorage.getItem('InkNotes:NOTES');
  //   if (items) {
  //     const parsedList = JSON.parse(items);
  //     setList(parsedList);
  //   }
  // }, []);
  const { list } = useContext(NoteContext);
  console.log(list);

  return (
    <Main>
      <Container className="grid lg:grid-cols-2 lg:gap-10 py-6">
        <div className="lg:hidden">
          <PlusButton />
        </div>

        <div className="">
          <Subheading>Suas Anotações</Subheading>

          <div>
            {list.map((note, index) => (
              <NoteCard key={index} title={note.title} text={note.text} />
            ))}
            {/* <NoteCard />
            <NoteCard />
            <NoteCard />
            <NoteCard />
            <NoteCard />
            <NoteCard />
            <NoteCard />
            <NoteCard />
            <NoteCard />
            <NoteCard /> */}
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
