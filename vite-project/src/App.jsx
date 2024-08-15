import React from 'react';
import BotList from './components/BotList';

const BotList = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <BotCard />
        </div>
    );
};  

const App = () => {
  return (
    <div className="App p-4">
      <h1 className="text-3xl font-bold mb-6">Available Bots</h1>
      <BotList />
    </div>
  );
};

export default App;
