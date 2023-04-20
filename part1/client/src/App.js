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
      <p>{props[0].name}</p>
      <p>{props[1].name}</p>
      <p>{props[2].name}</p>
    </>
  )
}

const Total = (props) => {
  return (
    <>
      <p>Number of exercises {props[0].exercise + props[1].exercise + props[2].exercise}</p>
    </>
  )
}


const App = () => {

  const parts = [
      {
        name: 'Fundamentals of React',
        exercise: 10
      },

      {
        name: 'Using props to pass data',
        exercise: 7
      },

      {
        name: 'State of component',
        exercise: 14
      }
  ]
  
  return (
    <div>
      <Header />
      <Content {...parts} />
      <Total {...parts} />
    </div>
  )
}

export default App;
