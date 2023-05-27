import React from 'react'

const PersonForm = ({addPerson, handleChangedName, handleChangedPhone}) => {
    return (
        <form onSubmit={addPerson}>
            <div>
                name: <input onChange={handleChangedName} />
            </div>

            <div>
                phone number: <input onChange={handleChangedPhone} />
            </div>

            <div>
                <button type="submit">add</button>
            </div>
        </form>
    )
}

export default PersonForm