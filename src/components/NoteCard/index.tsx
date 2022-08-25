import React, { useState } from 'react';
import { BiTrash } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';

import { lengthCrop } from '../../utils/lengthCrop';
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
  const croppedTitle = lengthCrop(80, title);
  const croppedText = lengthCrop(80, text);

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
        {croppedTitle}
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
