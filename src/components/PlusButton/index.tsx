/* eslint-disable react/no-unescaped-entities */
import React, { useContext } from 'react';

import { ModalContext } from '../../contexts/ModalContext';
import Text from '../UI/Text';

const PlusButton = () => {
  const { setShowModal } = useContext(ModalContext);

  return (
    <div className="flex gap-3 my-6 justify-center flex-col-reverse md:flex-row md:items-center md:justify-start">
      <button
        type="button"
        onClick={() => setShowModal(true)}
        className="bg-mainColor w-8 h-8 p-5 rounded-full flex items-center justify-center text-white font-medium cursor-pointer"
      >
        +
      </button>

      <Text>Clique no "+" para criar uma anotação</Text>
    </div>
  );
};

export default PlusButton;
