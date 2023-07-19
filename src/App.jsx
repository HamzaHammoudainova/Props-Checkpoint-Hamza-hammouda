import React from 'react';
import { Players } from './Players'; 
import Card from './components/Card';

export default function App() {
  return (
    <div className='container-fluid mt-5'>
        <div className='row '>
        {
            Players.PlayersList.map(e=>(
               <Card element={e}  />
            ))
        }
        </div>
        
    </div>
  )
}
