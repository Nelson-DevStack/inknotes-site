import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { NoteContext } from '../../contexts/NoteContext';
import { deleteNote } from '../../utils/deleteNote';
import Subheading from '../UI/Subheading';
import Text from '../UI/Text';

type NoteCardProps = {
  id: string | number;
  title: string;
  text: string;
};

const NoteCard = ({ id, title, text }: NoteCardProps) => {
  const { mutationValue, setMutationValue } = useContext(NoteContext);
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate(`/${id}`);
  };
  const handleDelete = (noteId: string | number) => {
    deleteNote(noteId);
    setMutationValue(mutationValue + 1);
  };

  return (
    <div className="p-4 shadow-md my-3">
      <Subheading className="text-lg text-gray-800 md:text-xl lg:text-lg">
        {/* Anotação X */}
        {title}
      </Subheading>
      <Text className="leading-6">{text}</Text>

      <div className="flex justify-between mt-4">
        <button
          type="button"
          className="bg-accentColor p-1 px-3 rounded-sm"
          onClick={handleNavigate}
        >
          Ler mais
        </button>

        <button
          type="button"
          className="bg-customRed p-1 px-3 rounded-sm text-white"
          onClick={() => {
            handleDelete(id);
          }}
        >
          Del
        </button>
      </div>
    </div>
  );
};

export default NoteCard;
