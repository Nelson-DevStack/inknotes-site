import React, { useEffect, useState } from 'react';
import { BiCopy } from 'react-icons/bi';
import { useNavigate, useParams } from 'react-router-dom';

import BackButton from '../../components/BackButton';
import Container from '../../components/UI/Container';
import Main from '../../components/UI/Main';
import Subheading from '../../components/UI/Subheading';
import Text from '../../components/UI/Text';
import searchNoteById from '../../services/Note/getById';
import { NoteType } from '../../types/NoteType';
import handleCopy from '../../utils/handleCopy';

const NotePage = () => {
  const { noteId } = useParams();
  const navigate = useNavigate();

  const [noteTitle, setNoteTitle] = useState('');
  const [noteText, setNoteText] = useState('');
  const [isCopied, setIsCopied] = useState(false);

  const setNoteInStates = (note: NoteType) => {
    setNoteTitle(note.title);
    setNoteText(note.text);
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
    <Main
      className={`before:bg-[url("/src/assets/polka-dots.svg")] before:absolute before:w-full before:min-h-screen before:-z-10 before:opacity-[.010] before:-mt-5`}
    >
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
