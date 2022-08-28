/* eslint-disable react/no-unescaped-entities */
import React, { useContext } from 'react';
import { BiPlus } from 'react-icons/bi';

import { ModalContext } from '../../contexts/ModalContext';
import Text from '../UI/Text';

const PlusButton = () => {
  const { setShowModal } = useContext(ModalContext);

  return (
    <div className="flex flex-col-reverse md:flex-row md:items-center md:justify-start">
      <button
        type="button"
        onClick={() => setShowModal(true)}
        className="bg-mainColor mt-3 md:mt-0 w-10 h-10 rounded-full flex items-center justify-center cursor-pointer transition hover:bg-blue-600 text-xl"
      >
        <BiPlus color="#fff" />
      </button>

      <Text>Clique no "+" para criar uma anotação</Text>
    </div>
  );
};

export default PlusButton;
