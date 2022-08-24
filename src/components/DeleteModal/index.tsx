import React, { useContext } from 'react';

import { NoteContext } from '../../contexts/NoteContext';
import { deleteNote } from '../../utils/deleteNote';
import Subheading from '../UI/Subheading';
import Text from '../UI/Text';

type DeleteModalProps = {
  showModal: boolean;
  setShowModal: (newState: boolean) => void;
  noteId: string | number;
};

const DeleteModal = ({ showModal, setShowModal, noteId }: DeleteModalProps) => {
  const { mutationValue, setMutationValue } = useContext(NoteContext);
  const handleDelete = (noteId: string | number) => {
    deleteNote(noteId);
    setMutationValue(mutationValue + 1);
  };

  const handleClose = () => {
    setShowModal(!showModal);
  };

  return (
    <div
      className={`${
        showModal ? 'absolute' : 'hidden'
      } max-w-screen px-5 min-h-screen bg-black/30 inset-0 z-10 flex items-center justify-center`}
    >
      <div className="bg-white p-10 rounded-md">
        <Subheading>Tem certeza?</Subheading>
        <Text>A anotação não poderá ser recuperada se for deletada</Text>

        <div className="mt-6 flex gap-6 justify-center">
          <button
            type="button"
            className="rounded-lg px-3 py-2 bg-customRed hover:scale-105 text-white font-medium"
            onClick={() => handleDelete(noteId)}
          >
            Deletar
          </button>
          <button
            type="button"
            onClick={handleClose}
            className="rounded-lg border border-gray-400 transition duration-200 hover:bg-gray-300 px-3 py-2"
          >
            Cancelar
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
