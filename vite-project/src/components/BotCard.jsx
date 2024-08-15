import React from 'react';

const BotCard = ({ bot }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-lg">
      <img src={bot.avatar_url} alt={bot.name} className="w-full h-48 object-cover rounded-t-lg" />
      <div className="p-4">
        <h2 className="text-xl font-bold">{bot.name}</h2>
        <p>Health: {bot.health}</p>
        <p>Damage: {bot.damage}</p>
        <p>Armor: {bot.armor}</p>
        <p>Class: {bot.bot_class}</p>
        <p>Catchphrase: {bot.catchphrase}</p>
      </div>
    </div>
  );
};

export default BotCard;
