import React from 'react';
import '../public/style.css';
import { sti } from '../data/sti'
import { Sti } from '../components/Sti'


const createSti = (infection) => {
  return (
    <Sti 
      key={infection.id}
      name={infection.name}
      transmission={infection.transmission}
      symptoms={infection.symptoms}
      treatments={infection.treatments}
    />
  )
}

function App() {
  return (
    <main>
      {sti.map(createSti)}
    </main>
  );
}

export default App;