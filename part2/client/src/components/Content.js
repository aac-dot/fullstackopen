import Part from './Part';

const Content = ({parts}) => {

    return (
      <>
        <ul>
          {parts.map(part => 
            <Part key={part.id} part={part} />
          )}
        </ul>
        <b>
          <p>Total of {parts.map(part => part.exercises).reduce((acc, cv) => acc + cv)} exercises</p>
        </b>
      </>
    )
}

export default Content;