import React, { useState } from 'react';
import './App.css';

import Person from './components/Person.js';

/* eslint-disable */

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ])
  
  const [newName, setNewName] = useState('')

  const handleChangedName = (event) => {
    setNewName(event.target.value)
  }

  const addName = (event) => {
    event.preventDefault()

    for (let person of persons) {
      if (person.name === newName){
        alert(`${newName} is already added to phonebook`);
        return;
      }
    }

    const nameObj = {
      name: newName
    }

    setPersons(persons.concat(nameObj));
    setNewName('')
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div>
            name: <input 
                    value={newName}
                    onChange={handleChangedName} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>

      <h2>Numbers</h2>
      
      <ul>
        {persons.map(person => <Person key={person.name} person={person} /> )}
      </ul>
    </div>
  )
}

export default App;
