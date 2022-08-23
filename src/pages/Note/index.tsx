import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import BackButton from '../../components/BackButton';
import Container from '../../components/UI/Container';
import Main from '../../components/UI/Main';
import Subheading from '../../components/UI/Subheading';
import Text from '../../components/UI/Text';
import { NoteType } from '../../types/NoteType';

const NotePage = () => {
  const localStorageName = 'InkNotes:NOTES';
  const navigate = useNavigate();
  const { noteId } = useParams();
  const [noteTitle, setNoteTitle] = useState('');
  const [noteText, setNoteText] = useState('');

  // == Util
  const searchNoteById = (noteId: string | number | undefined) => {
    const storedNotes = localStorage.getItem(localStorageName);
    if (storedNotes) {
      const parsedNotes = JSON.parse(storedNotes);
      const filteredNote = parsedNotes.filter((note: NoteType) => {
        return note.id === Number(noteId);
      });
      return filteredNote;
    }

    return [];
  };
  // ** Util

  // == Util
  const setNoteInStates = (note: NoteType) => {
    setNoteTitle(note.title);
    setNoteText(note.text);
  };
  // ** Util

  useEffect(() => {
    const note = searchNoteById(noteId);
    return note.length === 0 ? navigate('/') : setNoteInStates(note[0]);
  }, []);

  return (
    <Main>
      <Container>
        <BackButton previousPage={false} />
        <Subheading>{noteTitle}</Subheading>
        <Text>{noteText}</Text>
      </Container>
    </Main>
  );
};

export default NotePage;
