import { useState } from 'react'

const Button = (props) => (
  <button onClick={props.onClick}>
    {props.text}
  </button>
)

const Display = (props) => (
  <div>{props.name} {props.value}</div>
)

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

  return (

    <div>
      <h1>give feedback</h1>
      <Button onClick={() => setValue("good")} text="good"/>
      <Button onClick={() => setValue("neutral")} text="neutral"/>
      <Button onClick={() => setValue("bad")} text="bad"/>
      <h1>statistics</h1>
      <Display value={good} name="good"/>
      <Display value={neutral} name="neutral"/>
      <Display value={bad} name="bad"/>
    </div>
  )
}

export default App