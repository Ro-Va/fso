const Filter = ({newFilter, handleOnChangeFilter}) => {
    return (
    <div>
        filter shown with <input value={newFilter} onChange={handleOnChangeFilter}/>
    </div>        
    )
}

export default Filter