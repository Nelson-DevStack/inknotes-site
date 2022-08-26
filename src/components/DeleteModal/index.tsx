import React, { useContext, useEffect } from 'react';

import { NoteContext } from '../../contexts/NoteContext';
import { deleteNote } from '../../services/Note/deleteNote';

type DeleteModalProps = {
  showModal: boolean;
  setShowModal: (newState: boolean) => void;
  noteId: string | number | undefined;
};

const DeleteModal = ({ showModal, setShowModal, noteId }: DeleteModalProps) => {
  const { mutationValue, setMutationValue } = useContext(NoteContext);
  const handleDelete = (noteId: string | number | undefined) => {
    deleteNote(noteId);
    setMutationValue(mutationValue + 1);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  useEffect(() => {
    const keyDownHandler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        handleClose();
      }
    };

    document.addEventListener('keydown', keyDownHandler);

    return () => {
      document.removeEventListener('keydown', keyDownHandler);
    };
  }, []);

  return (
    <div
      className={`${
        showModal ? ' flex' : 'hidden'
      } min-w-screen h-screen animated fadeIn faster fixed left-0 top-0 justify-center items-center inset-0 z-50 outline-none focus:outline-none bg-no-repeat bg-center bg-cover`}
      id="modal-id"
    >
      <div className="absolute bg-black opacity-60 inset-0 z-0" />
      <div className="w-full  max-w-lg p-5 relative mx-auto my-auto rounded-xl shadow-lg  bg-white ">
        <div className="">
          <div className="text-center p-5 flex-auto justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-16 h-16 flex items-center text-red-500 mx-auto"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                clipRule="evenodd"
              />
            </svg>
            <h2 className="text-xl font-bold py-4 ">Tem certeza?</h2>
            <p className="text-gray-500 px-8 text-lg">
              A anotação não poderá ser recuperada se for deletada
            </p>
          </div>
          <div className="p-3  mt-2 text-center space-x-4 md:block">
            <button
              type="button"
              onClick={handleClose}
              className="mb-2 md:mb-0 bg-white px-5 py-2 text-sm shadow-sm font-medium tracking-wider border text-gray-600 rounded-full hover:shadow-lg hover:bg-gray-100"
            >
              Cancelar
            </button>
            <button
              type="button"
              onClick={() => handleDelete(noteId)}
              className="mb-2 md:mb-0 bg-red-500 border border-red-500 px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-full hover:shadow-lg hover:bg-red-600"
            >
              Deletar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
