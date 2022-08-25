import React, { useEffect, useState } from 'react';
import { BiCopy } from 'react-icons/bi';
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
  const [isCopied, setIsCopied] = useState(false);

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

  const handleCopy = async (text: string) => {
    if ('clipboard' in navigator) {
      return navigator.clipboard.writeText(text);
    }
    return document.execCommand('copy', true, text);
  };

  const handleCopyClick = () => {
    try {
      handleCopy(noteText);
      setIsCopied(true);
      return setTimeout(() => {
        setIsCopied(false);
      }, 3000);
    } catch (error) {
      return error;
    }
  };

  useEffect(() => {
    const note = searchNoteById(noteId);
    return note.length === 0 ? navigate('/') : setNoteInStates(note[0]);
  }, []);

  return (
    <Main>
      <Container className="py-6">
        <div className="flex items-center justify-between mb-5">
          <BackButton previousPage={false} />

          <div className="space-x-4">
            <button
              type="button"
              className="flex items-center gap-2 p-2 cursor-pointer transition duration-200 text-lg border bg-gray-100 rounded-sm hover:bg-gray-200 transition duration-500"
              onClick={handleCopyClick}
            >
              <BiCopy />

              {isCopied ? 'Texto Copiado' : null}
            </button>
          </div>
        </div>
        <Subheading>{noteTitle}</Subheading>
        <hr className="my-2 border border-gray-300" />
        <Text className="whitespace-pre-wrap">{noteText}</Text>
      </Container>
    </Main>
  );
};

export default NotePage;
