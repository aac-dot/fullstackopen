const Header = (props) => {
    let course = props.course
    return ( <h1>{course.name}</h1> )
}

const Content = (props) => {
    const parts = props.course.parts
    console.log('In content', parts)
    return (
        <>
        {parts.map(part => 
            <p key={part.id}>{part.name} {part.exercises}</p>
        )}
        </>
    )
}

const Total = (props) => {
    const parts = props.course.parts
    // console.log('In total', parts)
    const total = parts.map(part => part.exercises).reduce((acc, va) => acc + va)
    return (
        <>
        <b><p>Number of exercises {total}</p></b>
        </>
    )
}

const Course = ({course}) => {
    // console.log('In Course', course)
    return (
        <>
        <Header course={course} />
        <Content course={course} />
        <Total course={course} />
        </>
    )
}

export default Course

  