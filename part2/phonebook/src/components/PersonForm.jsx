const PersonForm = ({newName, newNumber, handleOnChange, handleOnChangeNumber, addName}) => {
    return (
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
    )
}

export default PersonForm