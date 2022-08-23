import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

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
    if (!storedNotes) {
      return navigate('/');
    }
    const parsedNotes = JSON.parse(storedNotes);
    const filteredNote = parsedNotes.filter((note: NoteType) => {
      return note.id === Number(noteId);
    });
    return filteredNote;
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
    setNoteInStates(note[0]);
  }, []);

  return (
    <Main>
      <Container>
        <Subheading>{noteTitle}</Subheading>
        <Text>{noteText}</Text>
      </Container>
    </Main>
  );
};

export default NotePage;
