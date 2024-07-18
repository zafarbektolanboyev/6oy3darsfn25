import React, {useState} from 'react'
import './index.css'

function Game() {
    const game = ['Pubg', 'Dota', 'Counter', 'Dls', 'Fifa', 'Pes', 'FreeFire', 'Blur', 'Mortalcombat', 'Call Off duty'];
    const [selectedGame, setSelectedGame] = useState(null)
    function RandomGame(){
        const random = Math.floor(Math.random() * game.length);
        setSelectedGame(game[random])
    }
  return (
    <div className='Games'>
        <button onClick={RandomGame}>Game Random</button>
        {setSelectedGame && <h2>Select Game: {selectedGame}</h2>}
    </div>
  )
}

export default Game
