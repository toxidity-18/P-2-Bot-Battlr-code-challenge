import React from 'react';

const YourBotArmy = ({ bots, onRemoveBot, onDischargeBot }) => {
  return (
    <div className="p-4">
      <h2 className="text-3xl font-bold mb-4 text-center">Your Bot Army</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {bots.map(bot => (
          <div key={bot.id} className="bg-white shadow-lg rounded-lg p-4 text-center">
            <h3 className="text-2xl font-semibold mb-2">{bot.name}</h3>
            <button
              onClick={() => onRemoveBot(bot)}
              className="bg-gray-500 text-white py-2 px-4 rounded-lg hover:bg-yellow-700 transition duration-300 mr-2"
              aria-label={`Remove ${bot.name}`}
            >
              Remove
            </button>
            <button
              onClick={() => onDischargeBot(bot)}
              className="bg-gray-500 text-purple-500 py-2 px-4 rounded-lg hover:bg-purple-700 transition duration-300"
              aria-label={`Discharge ${bot.name}`}
            >
              Discharge
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default YourBotArmy;
