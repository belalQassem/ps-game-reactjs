import './App.css';
import React from 'react'
import SignUpAfter from './pages/SignUpAfter';
import SignUpBefore from './pages/SignUpBefore';
import GameDay from './pages/GameDay';

function App() {
  return (
    <div className="App">
      <SignUpAfter/>
      <SignUpBefore/>
      <GameDay/>
    </div>
  );
}

export default App;
