import React from 'react';

import Subheading from '../UI/Subheading';

const NoteForm = () => {
  return (
    <div className="w-full absolute top-16 inset-x-0 min-h-screen bg-black/60 p-5 lg:static lg:bg-white z-auto">
      <div className="bg-white p-5 max-w-lg lg:max-w-full mx-auto rounded-md relative">
        <div className="bg-gray-100 w-10 h-10 rounded-full flex items-center justify-center cursor-pointer lg:hidden">
          x
        </div>
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
    </div>
  );
};

export default NoteForm;
