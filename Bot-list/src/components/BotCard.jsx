import React from 'react';

const BotCard = ({ bot, onAddBot }) => {
  return (
    <div className="bg-green-900 shadow-lg rounded-lg p-4 m-4 max-w-xs text-center">
      <h2 className="text-2xl text-red-700 font-bold mb-2">{bot.name}</h2>
      <p className="text-gray-600 mb-4">{bot.description}</p>
      <button
        onClick={() => onAddBot(bot)}
        className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300"
      >
        Add to Army
      </button>
    </div>
  );
};

export default BotCard;
