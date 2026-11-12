const Persons = ({persons}) => {
    return (
    <div>
        {persons.map(person => 
            <div key={person.name} >
                <b>{person.name} {person.number}</b>
            </div>
        )}
    </div>        
    )
}
export default Persons