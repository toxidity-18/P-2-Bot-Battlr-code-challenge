import React, { useState } from 'react';

function BotArmy() {
  const [army, setArmy] = useState([]);

  // Dummy data for illustration; replace with actual enlistment functionality
  const addBotToArmy = (bot) => {
    setArmy([...army, bot]);
  };

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">Your Bot Army</h1>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {army.map(bot => (
          <li key={bot.id} className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center">
            <img src={bot.avatar_url} alt={bot.name} className="w-24 h-24 object-cover rounded-full mb-2" />
            <h2 className="text-xl font-semibold">{bot.name}</h2>
            <p className="text-gray-600">Class: {bot.bot_class}</p>
          </li>
        ))}
      </ul>
      {/* Add functionality to enlist new bots */}
    </div>
  );
}

export default BotArmy;
