import React, { useState } from 'react';
import './App.css';

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <div className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h2>Welcome to React</h2>
//         </div>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>
//       </div>
//     );
//   }
// }

const Person = (props) => {
  return (
    <div>{props.person.name}</div>
  )
}

const App = () => {
  const [persons, setPersons] = useState([{id: 1, name: 'Arto Hellas'}])
  const [newName, setNewName] = useState('')

  console.log(persons)

  const IsNameAlreadyExist = function(name) {
    let person;
    
    for (person of persons) {
      if (person.name === newName) {
        return true;
      }
    }
    return false;
  }

  const addName = (event) => {
    event.preventDefault()
    
    if (IsNameAlreadyExist(newName)) {
      alert(`${newName} is already added on phonebook`);
    } else {
      setPersons(persons.concat({ id: persons.length + 1, name: newName }))
      setNewName('');
    }
  }

  const handleChange = (event) => {
    setNewName(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        name: <input value={newName} onChange={handleChange}/>
        <div>
          <button type="submit">Add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <li>
        <ul>{persons.map(person => <Person key={person.id} person={person} />)}</ul>
      </li>
    </div>
  )
}

export default App;
