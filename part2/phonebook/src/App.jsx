import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: "" }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState("")

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
  const handleOnChange = (event) =>{
    setNewName(event.target.value)
  }
  const handleOnChangeNumber = (event) => {setNewNumber(event.target.value)}
  
  return (
    <div>
      <h2>Phonebook</h2>
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
          {persons.map(person =>
           <div key={person.name}><b>{person.name} {person.number}</b></div>
          )}
        </div>
    </div>
  )
}

export default App