import React from 'react';

import Subheading from '../UI/Subheading';
import Text from '../UI/Text';

const NoteCard = () => {
  return (
    <div className="p-4 shadow-md my-3">
      <Subheading className="text-lg text-gray-800 md:text-xl lg:text-lg">
        Anotação X
      </Subheading>
      <Text className="leading-6">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
        animi at aut harum nostrum quibusdam porro reprehenderit...
      </Text>

      <div className="flex justify-between mt-4">
        <button type="button" className="bg-accentColor p-1 px-3 rounded-sm">
          Ler mais
        </button>

        <button
          type="button"
          className="bg-customRed p-1 px-3 rounded-sm text-white"
        >
          Del
        </button>
      </div>
    </div>
  );
};

export default NoteCard;
