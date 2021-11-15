import React, { useState } from 'react'

const Header = ({title}) => <h1>{title}</h1>

const Button = ({text, handler}) => {
  return (
    <button onClick={handler}>{text}</button>
  )
}

const StatisticLine = ({text, value}) => <tr><td>{text}</td><td>{value}</td></tr>

const Stats = ({good, neutral, bad}) => {
  
  const all = () => good + bad + neutral
  const avarage = () => {
    return ( (good * 1) + (bad * -1) ) / (all())
  }
  const positive = () => ( good / all() ) * 100

  if (all() === 0) {
    return (
      <p>No feedback given</p>
    )
  }

  return (
    <table>
      <caption><h2>Statistics</h2></caption>
      <tbody>
      <StatisticLine text="good" value={good} />
      <StatisticLine text="neutral" value={neutral} />
      <StatisticLine text="bad" value={bad} />
      <StatisticLine text="all" value={all()} />
      <StatisticLine text="avarage" value={avarage().toFixed(2)} />
      <StatisticLine text="positive" value={positive().toFixed(2)} />
      </tbody>
    </table>
  )
}


const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <Header title="Give Feedback" />
      <Button text="Good" handler={() => setGood(good + 1)} />
      <Button text="Neutral" handler={() => setNeutral(neutral + 1)} />
      <Button text="Bad" handler={() => setBad(bad + 1)} />
      <Stats good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App