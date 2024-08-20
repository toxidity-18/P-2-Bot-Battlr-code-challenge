import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function BotDetail() {
  const { id } = useParams();
  const [bot, setBot] = useState(null);

  useEffect(() => {
    axios.get(`https://bot-list-onwb.onrender.com/bots/${id}`)
      .then(response => setBot(response.data))
      .catch(error => console.error('Error fetching bot details:', error));
  }, [id]);

  if (!bot) return <div className="p-4">Loading...</div>;

  return (
    <div className="p-4 max-w-lg mx-auto">
      <h1 className="text-4xl font-bold mb-4">{bot.name}</h1>
      <img src={bot.avatar_url} alt={bot.name} className="w-full h-96 object-cover rounded-lg mb-4" />
      <div className="space-y-2">
        <p className="text-lg"><strong>Class:</strong> {bot.bot_class}</p>
        <p className="text-lg"><strong>Health:</strong> {bot.health}</p>
        <p className="text-lg"><strong>Damage:</strong> {bot.damage}</p>
        <p className="text-lg"><strong>Armor:</strong> {bot.armor}</p>
        <p className="text-lg"><strong>Catchphrase:</strong> {bot.catchphrase}</p>
      </div>
    </div>
  );
}

export default BotDetail;
