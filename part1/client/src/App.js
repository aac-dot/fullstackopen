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
const App = () => {
  const course = 'Half stack application development'
  const part1 = 'Fundamentals of React'
  const exercise1 = 10
  const part2 = 'Using props to pass data'
  const exercise2 = 7
  const part3 = 'State of component'
  const exercise3 = 14

  return (
    <div>
      <h1>{course}</h1>
      <p>{part1}</p>
      <p>{part2}</p>
      <p>{part3} {exercise3}</p>
      <p>Number of exercises {exercise1 + exercise2 + exercise3}</p>
    </div>
  )
}
export default App;
