// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

const Header = () => {
  const course = 'Half stack application development'

  return ( <h1>{course}</h1> )
}

const Content = (props) => {
  return (
    <>
      <p>{props.part}</p>
    </>
  )
}

const Total = (props) => {
  return (
    <>
      <p>Number of exercises {props.exercise1 + props.exercise2 + props.exercise3}</p>
    </>
  )
}


const App = () => {
  const part1 = 'Fundamentals of React'
  const part2 = 'Using props to pass data'
  const part3 = 'State of component'
  
  const exercise1 = 10
  const exercise2 = 7
  const exercise3 = 14

  return (
    
    <div>
      <Header />
       <Content part={part1} />
       <Content part={part2} />
       <Content part={part3} />
      
        <Total exercise1={exercise1} exercise2={exercise2} exercise3={exercise3} />
    </div>
  )
}
export default App;
