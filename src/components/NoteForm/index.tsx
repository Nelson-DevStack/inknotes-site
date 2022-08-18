import React from 'react';

import Subheading from '../UI/Subheading';

const NoteForm = () => {
  return (
    <div className="w-full">
      <Subheading className="text-center">Criar Anotação</Subheading>

      <form className="flex flex-col">
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
  );
};

export default NoteForm;
