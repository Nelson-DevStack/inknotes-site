/* eslint-disable react/no-unescaped-entities */
import React from 'react';

import Text from '../UI/Text';

const PlusButton = () => {
  return (
    <div className="flex gap-3 my-6 justify-center flex-col-reverse md:flex-row">
      <div className="bg-mainColor w-8 h-8 p-5 rounded-full flex items-center justify-center text-white font-medium cursor-pointer">
        +
      </div>

      <Text>Clique no "+" para criar uma anotação</Text>
    </div>
  );
};

export default PlusButton;
