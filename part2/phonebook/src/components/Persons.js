import React from "react"
import Person from "./Person"

const Persons = ({persons}) => {

    const personsElements = persons.map(e => {
        return (
            <Person 
                key={e.id}
                person={e}
            />
        )
    })

    return (
        <ul>
            {personsElements}
        </ul>
    )
}

export default Persons