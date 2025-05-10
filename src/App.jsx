import { useState } from 'react'

import './App.css'
import PhotoCard from './components/PhotoCard.jsx'
import AppBar from './components/AppBar.jsx'

function App() {
  const photoCards = [];
  for (let i = 0; i < 10; i++){
    photoCards.push(<PhotoCard image={`https://picsum.photos/300?random=${i}`} />);
  }
  return (
    <>
      <AppBar />
    <div className='image-parent'>
        {photoCards}
    </div>
    </>
  )
}

export default App
