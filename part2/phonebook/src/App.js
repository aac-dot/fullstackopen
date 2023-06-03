import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

import PersonForm from './components/PersonForm';
import Filter from './components/Filter';
import Persons from './components/Persons'

/* eslint-disable */

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newPhone, setPhone] = useState('')
  const [newFilter, setNewFilter] = useState('')

  useEffect(() => {
    axios
    .get('http://localhost:3001/persons')
    .then(response => {
      setPersons(response.data)
    })

  }, [])

  const personsToShow = newFilter.length === 0 ? 
    persons : persons.filter(person => person.name.search(newFilter) >= 0)

  const addPerson = (event) => {
    event.preventDefault();
    
    // Check if the name already exist
    for (let person of persons) {
      if (person.name === newName) {
        alert(`${newName} is already added to phonebook`);
        return;
      }
    }

    // New name to added in phonebook
    const nameObj = {
        name: newName,
        number: newPhone
    }

    // Add the new name in phonebook
    setPersons(persons.concat(nameObj));
    setNewName('')
    setPhone('')
  }

  const handleChangedName = (event) => setNewName(event.target.value)
  const handleChangedPhone = (event) => setPhone(event.target.value)
  const handleFilterChange = (event) => setNewFilter(new RegExp(event.target.value, 'ig'))
    
  return (
    <div>
      <h2>Phonebook</h2>

      <Filter 
            handleFilterChange={ (e) => { handleFilterChange(e) } }
      />

      <h2>Add new contact</h2>
      <PersonForm 
            addPerson={ (e) => addPerson(e) }
            handleChangedName={ (e) => handleChangedName(e) }
            handleChangedPhone={ (e) => handleChangedPhone(e) }
      />

      <h2>Numbers</h2>
      <Persons 
            persons={personsToShow}
      />
    </div>
  )
}

export default App;
