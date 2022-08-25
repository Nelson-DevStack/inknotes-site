import React, { useState } from 'react';
import { BiTrash } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';

import { setScrollPosition } from '../../utils/scrollPosition';
import DeleteModal from '../DeleteModal';
import Subheading from '../UI/Subheading';
import Text from '../UI/Text';

type NoteCardProps = {
  id: string | number;
  title: string;
  text: string;
};

const NoteCard = ({ id, title, text }: NoteCardProps) => {
  const textLengthToCrop = 80;
  const croppedText =
    text.length < textLengthToCrop
      ? text
      : `${text.slice(0, textLengthToCrop)}...`;

  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();
  const handleNavigate = () => {
    setScrollPosition();
    navigate(`/${id}`);
  };
  const handleClick = () => {
    setShowModal(!showModal);
  };

  return (
    <div className="p-4 border shadow-sm my-4 bg-white rounded-md">
      <DeleteModal
        showModal={showModal}
        setShowModal={setShowModal}
        noteId={id}
      />
      <Subheading className="!text-xl text-gray-800 font-textVariable font-semibold tracking-tight">
        {title}
      </Subheading>
      <Text className="leading-6 !text-base">{croppedText}</Text>

      <div className="flex justify-between mt-4">
        <button
          type="button"
          className="bg-accentColor p-1 px-3 rounded-sm transition duration-200 hover:scale-105"
          onClick={handleNavigate}
        >
          Ler
        </button>

        <button
          type="button"
          className="bg-customRed p-1 px-3 rounded-sm text-white transition duration-200 hover:scale-105"
          onClick={handleClick}
        >
          <BiTrash />
        </button>
      </div>
    </div>
  );
};

export default NoteCard;
