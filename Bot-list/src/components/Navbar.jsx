import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav className="bg-gray-800 p-4 text-white flex justify-between items-center">
      <Link to="/" className="text-xl font-bold">Bot Battlr</Link>
      <div>
        <Link to="/" className="mx-2 hover:text-gray-400">Home</Link>
        <Link to="/army" className="mx-2 hover:text-gray-400">Bot Army</Link>
      </div>
    </nav>
  );
}

export default NavBar;
