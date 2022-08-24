import React, { FormEvent, useContext } from 'react';
import { BiX } from 'react-icons/bi';

import { ModalContext } from '../../contexts/ModalContext';
import { NoteContext } from '../../contexts/NoteContext';
import { NoteType } from '../../types/NoteType';
import { checkInputEmpty } from '../../utils/checkInputEmpty';
import { clearForm } from '../../utils/clearForm';
import Subheading from '../UI/Subheading';

const NoteForm = () => {
  const { showModal, setShowModal } = useContext(ModalContext);
  const { mutationValue, setMutationValue } = useContext(NoteContext);
  const localStorageName = 'InkNotes:NOTES';
  const handleCloseModal = () => {
    setShowModal(false);
  };

  const saveNoteOperation = (noteList: NoteType[]) => {
    localStorage.setItem(localStorageName, JSON.stringify(noteList));
    setMutationValue(mutationValue + 1);
  };

  const createNote = (event: FormEvent) => {
    event.preventDefault();
    const title = document.querySelector('#titleInput') as HTMLInputElement;
    const text = document.querySelector('#textInput') as HTMLTextAreaElement;
    const storedNotes = localStorage.getItem(localStorageName);
    const noteList: NoteType[] = [];

    const errors = checkInputEmpty(title);
    if (errors.length > 0) {
      return alert(errors[0]);
    }

    const newNote: NoteType = {
      id: Math.floor(Math.random() * 1000),
      title: title.value,
      text: text.value,
      createdAt: new Date(),
    };

    if (storedNotes) {
      noteList.push(...JSON.parse(storedNotes));
      noteList.push(newNote);
      saveNoteOperation(noteList);
      clearForm(title, text);
      return setShowModal(false);
    }

    noteList.push(newNote);
    saveNoteOperation(noteList);
    clearForm(title, text);
    return setShowModal(false);
  };
  return (
    <div
      className={`w-full absolute top-16 inset-x-0 min-h-screen bg-black/60 p-5 lg:static lg:bg-white z-auto lg:min-h-fit lg:max-h-fit lg:block border rounded-md shadow-lg ${
        showModal ? 'block' : 'hidden'
      }`}
    >
      <div className="bg-white p-5 max-w-lg lg:max-w-full mx-auto rounded-md relative">
        <button
          type="button"
          onClick={handleCloseModal}
          className="bg-gray-100 transition hover:bg-gray-300 w-10 h-10 rounded-full flex items-center justify-center cursor-pointer lg:hidden"
        >
          <BiX />
        </button>
        <Subheading className="text-center">Criar Anotação</Subheading>

        <form className="flex flex-col" onSubmit={createNote}>
          <label
            htmlFor="titleInput"
            className="flex flex-col text-lg font-medium my-3"
          >
            Título
            <input
              type="text"
              id="titleInput"
              className="p-1 text-lg border-b border-gray-300 font-normal"
            />
          </label>
          <label
            htmlFor="textInput"
            className="flex flex-col text-lg font-medium my-3"
          >
            Anotação
            <textarea
              id="textInput"
              rows={8}
              className="p-1 text-lg border-b border-gray-300 my-2 font-normal"
            />
          </label>

          <button
            type="submit"
            className="w-full bg-mainColor p-2 text-lg text-white font-medium"
          >
            Salvar
          </button>
        </form>
      </div>
    </div>
  );
};

export default NoteForm;
