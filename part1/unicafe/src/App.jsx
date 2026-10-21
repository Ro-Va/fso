import { useState } from 'react'

const Button = (props) => (
  <button onClick={props.onClick}>
    {props.text}
  </button>
)

const Display = (props) => (
  <div>{props.name} {props.value}</div>
)

const Average = (props) => (
  <div>average {props.average}</div>
)

const Positive = (props) => (
  <div>positive {props.positive * 100} %</div>
)

const Statistics = (props) => {
  if (props.goodValue + props.neutralValue + props.badValue === 0) {
    return <div>no feedback given</div>
  }
  return (
  <div>
    <Display name={props.goodName} value={props.goodValue} />
    <Display name={props.neutralName} value={props.neutralValue} />
    <Display name={props.badName} value={props.badValue} />
    <div>all {props.all}</div>
    <Average average={props.average}/>
    <Positive positive={props.positive}/>
  </div>
  )
  
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

const setValue = (category) =>{
  if (category === "good") {
    setGood(previous => previous + 1)
  } else if (category === "neutral") {
    setNeutral(previous => previous + 1)
  } else if(category === "bad") {
    setBad(previous => previous + 1)
  }
}

const calcAverage = () => {
  if (good + bad + neutral === 0) {
    return 0
  }
  return (good*1 - bad*1) / (good + bad + neutral) 
}

const calcPositive = () => {
    if (good + bad + neutral === 0) {
    return 0
  }
  return good / (good + neutral + bad)
}

const calcAll = () => {
  return good + neutral + bad
}

  return (

    <div>
      <h1>give feedback</h1>
      <Button onClick={() => setValue("good")} text="good"/>
      <Button onClick={() => setValue("neutral")} text="neutral"/>
      <Button onClick={() => setValue("bad")} text="bad"/>
      <h1>statistics</h1>
      <Statistics average={calcAverage()} positive={calcPositive()} all={calcAll()} goodName="good"
        goodValue={good} neutralName="neutral" neutralValue={neutral} badName="bad" badValue={bad}/>
    </div>
  )
}

export default App