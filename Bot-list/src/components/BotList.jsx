import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function BotList() {
  const [bots, setBots] = useState([]);

  useEffect(() => {
    axios.get('https://bot-list-onwb.onrender.com/bots')
      .then(response => setBots(response.data))
      .catch(error => console.error('Error fetching bots:', error));
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">Available Bots</h1>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {bots.map(bot => (
          <li key={bot.id} className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center">
            <Link to={`/bots/${bot.id}`} className="text-center">
              <img src={bot.avatar_url} alt={bot.name} className="w-24 h-24 object-cover rounded-full mb-2" />
              <h2 className="text-xl font-semibold">{bot.name}</h2>
              <p className="text-gray-600">Class: {bot.bot_class}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BotList;
