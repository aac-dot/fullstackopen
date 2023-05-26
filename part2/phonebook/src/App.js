import React, { useState } from 'react';
import './App.css';

import Person from './components/Person.js';

/* eslint-disable */

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', phone: '555-1234' }
  ])
  const [newName, setNewName] = useState('')
  const [newPhone, setPhone] = useState('')

  const handleChangedName = (event) => {
    setNewName(event.target.value)
  }

  const handleChangedPhone = (event) => {
    setPhone(event.target.value)
  }

  const addName = (event) => {
    event.preventDefault()


    // Check if the name already exist
    for (let person of persons) {
      if (person.name === newName){
        alert(`${newName} is already added to phonebook`);
        return;
      }
    }

    // New name to added in phonebook
    const nameObj = {
      name: newName,
      phone: newPhone
    }

    // Add the new name in phonebook
    setPersons(persons.concat(nameObj));
    setNewName('')
    setPhone('')
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
            phone number: <input 
                    value={newPhone}
                    onChange={handleChangedPhone} />
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
