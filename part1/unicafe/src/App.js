
import { useState } from 'react'

const Header = (props) => {
  return (

    <>
      <h1>{props.text}</h1>
    </>
  );
}

const Button = ({eventClick, text}) => {
  return(
    <>
      <button onClick={eventClick}>{text}</button>
    </>
  );
}

const StatisticLine = ({text, value, extraText = ''}) => {
  return (
    <>
      {text}  {value} {extraText}
    </>
  );
}

const Statistics = (props) => {
  const {good, neutral, bad, total} = props;

  const calculateAverage = () => {
    if (total !== 0) {
      const averageValue = ((good) + (neutral * 0) + (bad * -1)) / total;
      return averageValue;
    }
  }

  const calculatePerPositive = () => {
    if (total !== 0) {
      return (good / total) * 100;
    }
  }
  console.log(total)

  if (total !== 0) {
    return (
      <>
        <table border="1">
          <tr>
            <td><StatisticLine text='Good' value={good} /></td>
          </tr>
          <tr>
            <td><StatisticLine text='Neutral' value={neutral} /></td>
          </tr>

          <tr>
            <td><StatisticLine text='Bad' value={bad} /></td>
          </tr>

          <tr>
            <td><StatisticLine text='Total' value={total} /></td>
          </tr>

          <tr>
            <td><StatisticLine text='Average' value={calculateAverage()} /></td>
          </tr>

          <tr>
            <td><StatisticLine text='Percentage Positive Votes' value={calculatePerPositive()} extraText='%' /></td>
          </tr>
        </table>
      </>
    );

  } else {

    return (
      <>
        <p>No feedback given</p>
      </>
    );

  }
}

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [total, setTotal] = useState(0);

  const giveGoodFeedBack = () => {
    setGood(good + 1)
    setTotal(total + 1)
  }

  const giveNeutralFeedBack = () => {
    setNeutral(neutral + 1)
    setTotal(total + 1)
  }

  const giveBadFeedBack = () => {
    setBad(bad + 1)
    setTotal(total + 1)
  }

  return (
    <div>
      <Header text='Give a feedback'/>
      <Button eventClick={giveGoodFeedBack} text={'good'}/>
      <Button eventClick={giveNeutralFeedBack} text={'neutral'}/>
      <Button eventClick={giveBadFeedBack} text={'bad'}/>

      <Header text='Statistics'/>
      <Statistics good={good} neutral={neutral} bad={bad} total={total} />

      <br />
    </div>
  );
}

export default App;
