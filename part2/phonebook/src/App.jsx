import { useState } from 'react'
import Filter from "./components/Filter"
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState("")
  const [newFilter, setNewFilter] = useState("")

  const addName = (event) => {
    event.preventDefault()
    if (persons.some(person => person.name === newName)){
      alert(`${newName} is already added to phonebook`)
    }
    else{
    const nameObject = {
      name: newName,
      number: newNumber
    }
    setPersons(persons.concat(nameObject))
  }}
  const filteredPersons = persons.filter(person => 
    person.name.toLowerCase().includes(newFilter.toLowerCase())
  )
  const handleOnChange = (event) =>{setNewName(event.target.value)}
  const handleOnChangeNumber = (event) => {setNewNumber(event.target.value)}
  const handleOnChangeFilter = (event) => {setNewFilter(event.target.value)}

  return (
    <div>
      <h2>Phonebook</h2>
        <Filter newFilter = {newFilter} handleOnChangeFilter={handleOnChangeFilter}/>
      <h2>add a new</h2>
      
      <PersonForm 
        newName={newName} handleOnChange={handleOnChange} 
        newNumber={newNumber} handleOnChangeNumber={handleOnChangeNumber}
        addName={addName}
      />
      <h2>Numbers</h2>
        <Persons persons={filteredPersons}/>
    </div>
  )
}

export default App