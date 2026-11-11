import { useState } from 'react'

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
  const showPersons = filteredPersons.map(person =>
    <div key={person.name}><b>{person.name} {person.number}</b></div>
  )
  const handleOnChange = (event) =>{setNewName(event.target.value)}
  const handleOnChangeNumber = (event) => {setNewNumber(event.target.value)}
  const handleOnChangeFilter = (event) => {setNewFilter(event.target.value)}

  return (
    <div>
      <h2>Phonebook</h2>
        <div>
          filter shown with <input value={newFilter} onChange={handleOnChangeFilter}/>
        </div>
      <h2>add a new</h2>
      <form onSubmit={addName}>
        <div>
          name: <input value={newName} onChange={handleOnChange}/>
        </div>
        <div>
          number: <input value={newNumber} onChange={handleOnChangeNumber}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
        <div>
          {showPersons}
        </div>
    </div>
  )
}

export default App