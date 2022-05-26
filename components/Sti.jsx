import React from 'react'


const Sti = (props) => {
  return (
    <main>
      <h1>{props.name}</h1>
      <h3>{props.transmission}</h3>
      <ul>
        <li>{props.symptoms[0]}</li>
        <li>{props.symptoms[1]}</li>
        <li>{props.symptoms[2]}</li>
        <li>{props.symptoms[3]}</li>
      </ul>
      <h3>{props.treatments}</h3>
    </main>
  )
}

export { Sti }