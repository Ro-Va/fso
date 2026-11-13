import { useState, useEffect } from 'react'
import axios from 'axios'
import Filter from "./components/Filter"
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'


const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState("")
  const [newFilter, setNewFilter] = useState("")

  const hook = () => {
  console.log('effect')
  axios
    .get('http://localhost:3001/persons')
    .then(response => {
      console.log('promise fulfilled')
      setPersons(response.data)
    })
}

useEffect(hook, [])

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