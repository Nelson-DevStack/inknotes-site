import React, { FormEvent, useState } from 'react';

import { NoteType } from '../../types/NoteType';
import Subheading from '../UI/Subheading';

const NoteForm = () => {
  const [showModal, setShowModal] = useState(true);
  const [list, setList] = useState<NoteType[]>([]);
  const handleClick = () => {
    setShowModal(false);
  };
  const createNote = (event: FormEvent) => {
    event.preventDefault();
    const title = document.querySelector('#titleInput') as HTMLInputElement;
    const text = document.querySelector('#textInput') as HTMLTextAreaElement;
    const noteList = [];
    const storedItems = localStorage.getItem('InkNotes:NOTES');
    if (storedItems) {
      setList(JSON.parse(storedItems));
      noteList.push(...JSON.parse(storedItems), {
        id: Math.floor(Math.random() * 500),
        title: title.value,
        text: text.value,
      });
      localStorage.setItem('InkNotes:NOTES', JSON.stringify(noteList));
    } else {
      noteList.push({
        id: Math.floor(Math.random() * 500),
        title: title.value,
        text: text.value,
      });

      localStorage.setItem('InkNotes:NOTES', JSON.stringify(noteList));
    }
  };
  return (
    <div
      className={`w-full absolute top-16 inset-x-0 min-h-screen bg-black/60 p-5 lg:static lg:bg-white z-auto lg:block ${
        showModal ? 'block' : 'hidden'
      }`}
    >
      <div className="bg-white p-5 max-w-lg lg:max-w-full mx-auto rounded-md relative">
        <button
          type="button"
          onClick={handleClick}
          className="bg-gray-100 w-10 h-10 rounded-full flex items-center justify-center cursor-pointer lg:hidden"
        >
          x
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
